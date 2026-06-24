import { HN_ITEM_TYPES } from "@shared/hn";

export interface StoryItem {
  id: number;
  type: HN_ITEM_TYPES.Story;
  user: string;
  time: number;
  url: string | null;
  score: number;
  title: string;
  commentsCount: number;
  commentsId: number[];
}
