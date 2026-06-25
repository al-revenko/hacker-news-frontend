import { fetchStoryItemArray, STORY_CATEGORIES } from "@entities/storyItem";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useStoryListQuery(
  category: STORY_CATEGORIES,
  itemsLimit: number,
  staleTimeMs: number = 0,
) {
  return useInfiniteQuery({
    queryKey: ["story", "list", category],
    queryFn: ({ pageParam }) =>
      fetchStoryItemArray(category, {
        offset: pageParam,
        limit: itemsLimit,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      const isFinalOffset = lastPage.offset + itemsLimit >= lastPage.total;

      if (isFinalOffset) {
        return undefined;
      }

      return lastPage.offset + itemsLimit;
    },
    select: (data) => data.pages.flatMap((page) => page.data),
    staleTime: staleTimeMs,
  });
}
