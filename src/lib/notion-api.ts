import { NotionAPI } from "notion-client";

const client = new NotionAPI();

export const getNotionPageById = async (pageId: string) => {
  return await client.getPage(pageId);
};
