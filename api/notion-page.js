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
    console.log(mdBlocks);
    const mdStringObject = n2m.toMarkdownString(mdBlocks);
    console.log(mdStringObject.parent);

    res.status(200).json({ markdown: mdStringObject.parent });
  } catch (err) {
    console.error("notion page error", err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
}
