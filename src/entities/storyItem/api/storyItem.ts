import { HN_API_URL } from "@shared/hn/const";
import { StoryItem } from "../model/types";
import { isStoryItem } from "../guard/isStoryItem";
import { isStoryItemsArray } from "../guard/isStoryItem";
import { HN_STORY_CATEGORIES } from "@shared/hn/const";

export async function fetchStoryItem(
  id: string | number,
): Promise<StoryItem | null> {
  const url = new URL(`story/${id}`, HN_API_URL);

  const item = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (isStoryItem(item)) return item;

  return null;
}

export async function fetchStoryItemArray(
  category: HN_STORY_CATEGORIES,
): Promise<StoryItem[] | null> {
  const url = new URL(`story/${category}`, HN_API_URL);

  const items = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  if (isStoryItemsArray(items)) return items;

  return null;
}
