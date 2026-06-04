"use client";
import { CommentItem } from "@entities/commentItem";
import CommentNode from "./ui/CommentNode";
import CommentNodeSkeleton from "./ui/CommentNodeSkeleton";

interface Props {
  comments?: CommentItem[];
  commentsCount?: number;
  isLoading?: boolean;
}

function renderSkeleton(countSkeletons: number) {
  return (
    <>
      {Array.from({ length: countSkeletons }).map((_, index) => (
        <li key={index}>
          <CommentNodeSkeleton />
        </li>
      ))}
    </>
  );
}

function renderComments(comments: CommentItem[]) {
  return (
    <>
      {comments?.map((comment) => (
        <li key={comment.id}>
          <CommentNode CommentsBlock={CommentsBlock} comment={comment} />
        </li>
      ))}
    </>
  );
}

const CommentsBlock = ({ comments, commentsCount, isLoading }: Props) => {
  return (
    <ul>
      {isLoading
        ? renderSkeleton(commentsCount ?? 0)
        : renderComments(comments ?? [])}
    </ul>
  );
};

export default CommentsBlock;
