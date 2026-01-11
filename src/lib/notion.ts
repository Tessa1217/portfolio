// lib/notion.ts
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { cache } from "react";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({
  notionClient: notion,
  config: {
    separateChildPage: false,
  },
});

// 페이지 마크다운 가져오기 (캐싱)
export const getNotionPageMarkdown = cache(
  async (pageId: string): Promise<string> => {
    try {
      const mdBlocks = await n2m.pageToMarkdown(pageId);
      return convertHeadingToggleToDetails(mdBlocks);
    } catch (err) {
      console.error("notion page error", err);
      throw err;
    }
  }
);

// 헬퍼 함수들
function convertBlockToMarkdown(block: any): string {
  if (typeof block === "string") return block;

  const text = Array.isArray(block.parent)
    ? block.parent
        .map((t: any) => (typeof t === "string" ? t : t.text))
        .join("")
    : block.parent;

  switch (block.type) {
    case "paragraph":
      return `${text}\n\n`;
    case "code":
      return `\`\`\`${block.language || ""}\n${text}\n\`\`\`\n\n`;
    case "heading_3":
      return `### ${text}\n\n`;
    default:
      return `${text}\n\n`;
  }
}

function convertHeadingToggleToDetails(blocks: any[]): string {
  let result = "";

  for (const block of blocks) {
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
