import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { configDotenv } from "dotenv";

configDotenv({ path: "./.env.local" });

const notion = new Client({
  auth: process.env.VITE_NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    separateChildPage: false,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    req.setHeader("Allow", "POST");
    return res.status(405).send("Method Not Allowed");
  }

  const { pageId } = req.body;
  if (!pageId) {
    return res.status(400).json({ error: "PageId not in request body" });
  }

  try {
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const converted = convertHeadingToggleToDetails(mdBlocks);

    res.status(200).json({ markdown: converted });
  } catch (err) {
    console.error("notion page error", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
}

function convertBlockToMarkdown(block) {
  if (typeof block === "string") return block;

  const text = Array.isArray(block.parent)
    ? block.parent.map((t) => (typeof t === "string" ? t : t.text)).join("")
    : block.parent;

  switch (block.type) {
    case "paragraph":
      return `${text}\n\n`;
    case "code":
      return `${block.language || ""}\n${text}\n\n`;
    case "heading_3":
      return `${text}\n\n`;
    default:
      return `${text}\n\n`;
  }
}

function convertHeadingToggleToDetails(blocks) {
  let result = "";

  for (const block of blocks) {
    // Toggle 후보: heading_3 + children 존재
    if (
      block.type === "heading_3" &&
      Array.isArray(block.children) &&
      block.children.length > 0
    ) {
      result += `<details>\n<summary>${block.parent.replace(
        /^### /,
        ""
      )}</summary>\n\n`;

      for (const child of block.children) {
        result += convertBlockToMarkdown(child);
      }

      result += `\n</details>\n\n`;
    } else {
      result += convertBlockToMarkdown(block);
    }
  }

  return result;
}
