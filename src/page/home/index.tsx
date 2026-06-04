import { HN_STORY_CATEGORIES } from "@shared/hn/const";
import { ContentLayout } from "@/shared/ui";

const HomePage = async () => {
  const category = HN_STORY_CATEGORIES.new;

  return <ContentLayout>{category}</ContentLayout>;
};

export default HomePage;
