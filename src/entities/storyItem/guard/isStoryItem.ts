import { HN_ITEM_TYPES } from "@shared/hn/const";
import { StoryItem } from "../model/types";

export function isStoryItem(value: unknown): value is StoryItem {
  if (value && typeof value === "object" && "id" in value && "type" in value) {
    return value.type === HN_ITEM_TYPES.Story;
  }

  return false;
}

export function isStoryItemsArray(values: unknown): values is StoryItem[] {
  if (!Array.isArray(values)) return false;

  return isStoryItem(values[0]);
}
