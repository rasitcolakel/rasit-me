export interface Post {
  tags: Tags;
  link: Link;
  title: Title;
}

export interface Education {
  description: Link;
  title: Title;
}

export interface Link {
  id: string;
  type: string;
  rich_text: any[];
}

export interface Tags {
  id: string;
  type: string;
  multi_select: Tag[];
}

export interface Title {
  id: string;
  type: string;
  title: any[];
}
export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface ExtractedPost {
  title: string;
  link: string;
  tags: Tag[];
  id?: string;
}

export interface ExtractedEducation {
  title: string;
  description: string;
}
