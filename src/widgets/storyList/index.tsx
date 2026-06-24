"use client";
import { HN_STORY_CATEGORIES } from "@shared/hn";
import { StoryItem, useStoryListQuery } from "@entities/storyItem";
import { useOnInView } from "react-intersection-observer";
import StoryCard from "./ui/StoryCard";
import StoryCardSkeleton from "./ui/StoryCardSkeleton";

export interface StoryListProps {
  className?: string;
  category: HN_STORY_CATEGORIES;
  itemsPerPage?: number;
  cacheStaleTimeMs?: number;
}

function renderSkeletons(
  count: number,
  sentinelRef?: (element: Element | null | undefined) => void,
) {
  const skeletons: React.JSX.Element[] = [];
  const prefix = "skeleton-";

  for (let i = 0; i < count; i++) {
    const isSentinel = i === 0;

    if (isSentinel && sentinelRef) {
      skeletons.push(
        <li ref={sentinelRef} key={prefix + i}>
          <StoryCardSkeleton />
        </li>,
      );

      continue;
    }

    skeletons.push(
      <li key={prefix + i}>
        <StoryCardSkeleton />
      </li>,
    );
  }

  return skeletons;
}

function renderListItems(
  items: StoryItem[],
  skeletonsCount: number,
  hasNextPage: boolean,
  sentinelRef: (element: Element | null | undefined) => void,
) {
  const storyCards = items.map((item, index) => (
    <li key={item.id}>
      <StoryCard item={item} positionNumber={index + 1} />
    </li>
  ));

  if (hasNextPage) {
    const skeletons = renderSkeletons(skeletonsCount, sentinelRef);

    return [...storyCards, ...skeletons];
  }

  return storyCards;
}

const StoryList = ({
  category,
  itemsPerPage = 20,
  cacheStaleTimeMs = 0,
  className,
}: StoryListProps) => {
  const {
    data = [],
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useStoryListQuery(category, itemsPerPage, cacheStaleTimeMs);

  const inViewRef = useOnInView(() => fetchNextPage(), {
    threshold: 0,
    rootMargin: "500px",
  });

  return (
    <div className={className}>
      <ul className="h-full flex flex-col gap-2">
        {isLoading
          ? renderSkeletons(itemsPerPage)
          : renderListItems(data, 5, hasNextPage, inViewRef)}
      </ul>
    </div>
  );
};

export default StoryList;
