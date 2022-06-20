import {
  Education,
  ExtractedEducation,
  ExtractedPost,
  Link,
  Post,
  Tag,
  Tags,
  Title,
} from "src/models";

function tagsExtractor(tags: Tags): Tag[] {
  return tags.multi_select.map((tag) => tag);
}
function titleExtractor(title: Title): string {
  return title.title[0].text.content;
}
function richTextExtractor(link: Link): string {
  return link.rich_text[0].text.content;
}

function extractPost(properties: Post): ExtractedPost {
  return {
    tags: tagsExtractor(properties.tags),
    title: titleExtractor(properties.title),
    link: richTextExtractor(properties.link),
  };
}

function extractEducation(properties: Education): ExtractedEducation {
  return {
    id: properties.id,
    title: titleExtractor(properties.title),
    description: richTextExtractor(properties.description),
  };
}

export { extractPost, extractEducation };
