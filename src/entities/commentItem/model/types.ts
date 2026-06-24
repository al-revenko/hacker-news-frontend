import { HN_ITEM_TYPES } from "@shared/hn";

export interface CommentItem {
  id: number;
  type: HN_ITEM_TYPES.Comment;
  user?: string;
  time: number;
  parent: number | null;
  text?: string;
  kidsId: number[];
  descendantsCount: number;
}
