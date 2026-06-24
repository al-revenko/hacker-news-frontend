"use client";

import { HN_STORY_CATEGORIES } from "@shared/hn";
import { ContentLayout } from "@shared/ui";
import StoryList from "@widgets/storyList";
import { useEffect } from "react";

const STORY_ITEMS_PER_PAGE: number = 20;
const CACHE_STALE_TIME_MS: number = 30 * 1000;
const STORY_CATEGORY: HN_STORY_CATEGORIES = HN_STORY_CATEGORIES.best;
const PREFETCH_ITEMS: boolean = false;

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ContentLayout>
      <StoryList
        category={STORY_CATEGORY}
        itemsPerPage={STORY_ITEMS_PER_PAGE}
        cacheStaleTimeMs={CACHE_STALE_TIME_MS}
        prefetchItems={PREFETCH_ITEMS}
        className="mb-5"
      />
    </ContentLayout>
  );
};

export default HomePage;
