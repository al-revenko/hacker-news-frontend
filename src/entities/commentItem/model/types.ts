import { ITEM_TYPES } from "@shared/api";

export interface CommentItem {
  id: number;
  type: ITEM_TYPES.Comment;
  user?: string;
  time: number;
  parent: number | null;
  text?: string;
  kidsId: number[];
  descendantsCount: number;
}
