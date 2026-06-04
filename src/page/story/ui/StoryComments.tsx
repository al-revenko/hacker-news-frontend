"use client";
import { Heading } from "@shared/ui";
import CommentsBlock from "@widgets/commentsBlock";
import { useComments } from "@/entities/commentItem";

interface Props {
  commentIds: number[];
  commentsTotal: number;
  refreshInterval?: number;
}

const StoryComments = ({ commentIds, commentsTotal }: Props) => {
  const { data: comments, isLoading } = useComments(commentIds);

  return (
    <div className="pb-2 pt-5">
      <Heading className="flex items-center gap-1 pb-4">
        <span>
          {commentsTotal > 0
            ? `Comments: ${commentsTotal}`
            : "No comments here"}
        </span>
      </Heading>
      <CommentsBlock
        comments={comments ?? []}
        commentsCount={commentIds.length}
        isLoading={isLoading}
      />
    </div>
  );
};

export default StoryComments;
