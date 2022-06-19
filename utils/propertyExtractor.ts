import {
  ExtractedPost,
  Link,
  Properties,
  Tag,
  Tags,
  Title,
} from "src/models/BlogPost";

function tagsExtractor(tags: Tags): Tag[] {
  return tags.multi_select.map((tag) => tag);
}
function titleExtractor(title: Title): string {
  return title.title[0].text.content;
}
function linkExtractor(link: Link): string {
  return link.rich_text[0].text.content;
}

function extractProperties(properties: Properties): ExtractedPost {
  return {
    tags: tagsExtractor(properties.tags),
    title: titleExtractor(properties.title),
    link: linkExtractor(properties.link),
  };
}
export { extractProperties };
