import { ITEM_TYPES } from "@shared/api";

export interface StoryItem {
  id: number;
  type: ITEM_TYPES.Story;
  user: string;
  time: number;
  url: string | null;
  score: number;
  title: string;
  commentsCount: number;
  commentsId: number[];
}
