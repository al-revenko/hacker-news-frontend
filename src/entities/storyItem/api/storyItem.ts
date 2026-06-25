import { StoryItem } from "../model/types";
import { isStoryItem } from "../guard/isStoryItem";
import { STORY_CATEGORIES } from "../const";
import { API_URL } from "@shared/api";

export async function fetchStoryItem(
  id: string | number,
): Promise<StoryItem | null> {
  const url = new URL(`hn/story/${id}`, API_URL);

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
  category: STORY_CATEGORIES,
  pagination: { offset?: number; limit?: number } = {},
): Promise<FetchStoryItemArrayResponse> {
  const { offset = 0, limit = 20 } = pagination;

  const url = new URL(
    `hn/story/${category}?offset=${offset}&limit=${limit}`,
    API_URL,
  );

  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}
