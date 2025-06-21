export interface MediumBlogResponse {
  items: MediumBlogItem[];
  feed: MediumFeedItem;
}

export interface MediumFeedItem {
  link: string;
}

export interface MediumBlogItem {
  title: string;
  description: string;
  categories: string[];
  image: string;
}

export type Tech = {
  id: number;
  name: string;
  url: string;
  status: string;
};

export enum SkillLevel {
  All = "All",
  Beginner = "Beginner",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}
