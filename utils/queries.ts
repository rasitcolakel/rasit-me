import { Client } from "@notionhq/client";
import type {
  GetDatabaseResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import axios from "axios";

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_KEY,
});

async function getBlogPosts() {
  let posts = await axios.get(process.env.BASE_URL + "/api/posts");
  return posts.data;
}

async function getEducationInformation() {
  let educations = await axios.get(process.env.BASE_URL + "/api/educations");
  return educations.data;
}

export { getBlogPosts, getEducationInformation };
