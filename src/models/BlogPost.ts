export interface BlogPost {
  object: string;
  id: string;
  created_time: Date;
  last_edited_time: Date;
  created_by: CreatedDate;
  last_edited_by: CreatedDate;
  cover: null;
  icon: null;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  url: string;
}

export interface CreatedDate {
  object: string;
  id: string;
}

export interface Parent {
  type: string;
  database_id: string;
}

export interface Properties {
  tags: Tags;
  link: Link;
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
