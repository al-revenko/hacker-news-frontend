"use client";

import { STORY_CATEGORIES } from "@entities/storyItem";
import { ContentLayout } from "@shared/ui";
import StoryList from "@widgets/storyList";
import { useEffect } from "react";

const STORY_ITEMS_PER_PAGE: number = 20;
const CACHE_STALE_TIME_MS: number = 30 * 1000;
const STORY_CATEGORY: STORY_CATEGORIES = STORY_CATEGORIES.best;
const PREFETCH_ITEMS: boolean = false;

const HomePage = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = "auto";
    };
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
