import { useQuery } from "@tanstack/react-query";

import { fetchCommentsByIds } from "../api/commentItem";
import { CommentItem } from "../model/types";

const DEFAULT_STALE_TIME = 5 * 60 * 1000;
const DEFAULT_GC_TIME = 10 * 60 * 1000;

export function useComments(
  commentsId: number[] | null,
  options?: { staleTime?: number; gcTime?: number; autoRefetch?: boolean },
) {
  const staleTime = options?.staleTime ?? DEFAULT_STALE_TIME;
  const gcTime = options?.gcTime ?? DEFAULT_GC_TIME;
  const autoRefetch = options?.autoRefetch ?? true;
  const ids = commentsId ?? [];

  const queryFn = () => {
    return ids.length > 0 ? fetchCommentsByIds(ids) : null;
  };

  return useQuery<CommentItem[] | null>({
    queryKey: ["comments", ...ids.sort()],
    queryFn,
    enabled: ids.length > 0 && autoRefetch,
    staleTime,
    gcTime,
  });
}
