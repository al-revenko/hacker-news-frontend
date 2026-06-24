export const HN_API_URL = process.env.NEXT_PUBLIC_HN_API_URL ?? "";
if (!HN_API_URL) {
  throw new Error("env NEXT_PUBLIC_HN_API_URL is not set");
}

export enum HN_STORY_CATEGORIES {
  new = "new",
  best = "best",
}

export enum HN_ITEM_TYPES {
  Story = "story",
  Comment = "comment",
}
