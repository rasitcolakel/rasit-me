import { Client } from "@notionhq/client";
import type {
  GetDatabaseResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_KEY,
});

async function getBlogPosts() {
  const database_id = process.env.NOTION_DATABASE_ID as string;
  const response = (await notion.databases.query({
    database_id,
  })) as QueryDatabaseResponse;

  return response.results;
}

export { getBlogPosts };
