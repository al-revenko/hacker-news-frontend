import { HN_API_URL } from "@shared/hn/const";
import { CommentItem } from "../model/types";
import { isCommentItemsArray } from "../guard/isCommentItem";

export async function fetchCommentsByIds(
  ids: number[],
): Promise<CommentItem[] | null> {
  const url = new URL(`comments`, HN_API_URL);

  const items = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ids }),
  }).then((res) => res.json());

  if (isCommentItemsArray(items)) return items;

  return null;
}
