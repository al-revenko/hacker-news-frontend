import { ContentLayout } from "@shared/ui";
import StoryHead from "./ui/StoryHead";
import StoryComments from "./ui/StoryComments";
import { StoryItem } from "@entities/storyItem";

interface Props {
  data: StoryItem;
}

const StoryPage = ({ data }: Props) => {
  return (
    <ContentLayout>
      <div className="pt-2">
        <StoryHead item={data} />
        <StoryComments
          commentIds={data.commentsId ?? []}
          commentsTotal={data.commentsCount}
          refreshInterval={60000}
        />
      </div>
    </ContentLayout>
  );
};

export default StoryPage;
