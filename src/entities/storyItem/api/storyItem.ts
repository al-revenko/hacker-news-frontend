import { HN_API_URL, HN_STORY_CATEGORIES } from "@shared/hn";
import { StoryItem } from "../model/types";
import { isStoryItem } from "../guard/isStoryItem";

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

export interface FetchStoryItemArrayResponse {
  data: StoryItem[];
  total: number;
  offset: number;
  limit: number;
}

export async function fetchStoryItemArray(
  category: HN_STORY_CATEGORIES,
  pagination: { offset?: number; limit?: number } = {},
): Promise<FetchStoryItemArrayResponse> {
  const { offset = 0, limit = 20 } = pagination;

  const url = new URL(
    `story/${category}?offset=${offset}&limit=${limit}`,
    HN_API_URL,
  );

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
