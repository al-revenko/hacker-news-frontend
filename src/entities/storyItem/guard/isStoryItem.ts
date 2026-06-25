import { ITEM_TYPES } from "@shared/api";
import { StoryItem } from "../model/types";

export function isStoryItem(value: unknown): value is StoryItem {
  if (value && typeof value === "object" && "id" in value && "type" in value) {
    return value.type === ITEM_TYPES.Story;
  }

  return false;
}

export function isStoryItemsArray(values: unknown): values is StoryItem[] {
  if (!Array.isArray(values)) return false;

  return isStoryItem(values[0]);
}
