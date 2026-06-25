import { ITEM_TYPES } from "@shared/api";
import { CommentItem } from "../model/types";

export function isCommentItem(value: unknown): value is CommentItem {
  if (value && typeof value === "object" && "id" in value && "type" in value) {
    return value.type === ITEM_TYPES.Comment;
  }

  return false;
}

export function isCommentItemsArray(values: unknown): values is CommentItem[] {
  if (!Array.isArray(values)) return false;

  return isCommentItem(values[0]);
}
