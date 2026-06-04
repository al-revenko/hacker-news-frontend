import { HN_ITEM_TYPES } from "@shared/hn/const";
import { CommentItem } from "../model/types";

export function isCommentItem(value: unknown): value is CommentItem {
  if (value && typeof value === "object" && "id" in value && "type" in value) {
    return value.type === HN_ITEM_TYPES.Comment;
  }

  return false;
}

export function isCommentItemsArray(values: unknown): values is CommentItem[] {
  if (!Array.isArray(values)) return false;

  return isCommentItem(values[0]);
}
