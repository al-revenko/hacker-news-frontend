"use client";
import { ComponentType, useState } from "react";
import DOMPurify from "isomorphic-dompurify";
import { CircularProgress } from "@mui/material";
import { timestampFormat } from "@/shared/lib";
import ArithmeticButton from "@shared/ui/ArithmeticButton";
import { CommentItem } from "@entities/commentItem";
import { useComments } from "@/entities/commentItem";

interface Props {
  CommentsBlock: ComponentType<{ comments: CommentItem[] }>;
  comment: CommentItem;
}

const CommentNode = ({ CommentsBlock, comment }: Props) => {
  const {
    user = "unknown",
    time,
    text = "[no text]",
    kidsId,
    descendantsCount,
  } = comment;

  const {
    data: kids,
    isLoading,
    refetch,
  } = useComments(kidsId, { autoRefetch: false });

  const [kidsDisplay, setKidsDisplay] = useState(false);

  const timestamp = timestampFormat(time);

  const displayKids = async () => {
    if (!kidsDisplay) {
      if (!kids?.length) {
        await refetch();
      }

      setKidsDisplay(true);
    } else {
      setKidsDisplay(false);
    }
  };

  const setHTMLContent = () => {
    return { __html: DOMPurify.sanitize(text) };
  };

  const renderKidsButton = () => {
    if (descendantsCount === 0) return;

    if (isLoading) return <CircularProgress color="primary" size={15} />;

    return (
      <ArithmeticButton
        className="h-1 w-1"
        onClick={displayKids}
        symbol={kidsDisplay ? "subtract" : "add"}
      />
    );
  };

  return (
    <>
      <article className="grid grid-cols-[10px_1fr] gap-1 pb-4">
        <div className="flex h-full flex-col items-center gap-1">
          {renderKidsButton()}
          <span className="bg-fontSecond inline-block h-full w-0.75" />
        </div>
        <div>
          <div className="text-fontSecond flex flex-wrap gap-1 pb-2 text-base">
            <span className="comment-user font-semibold">{user}</span>
            <span>{`${timestamp.date} ${timestamp.time}`}</span>
          </div>
          <div
            className="[&_a]:text-primary flex flex-col gap-1 [&_pre]:wrap-break-word [&_pre]:whitespace-pre-wrap [&_pre]:overflow-x-auto"
            dangerouslySetInnerHTML={setHTMLContent()}
          />
        </div>
      </article>
      {kids && kids.length > 0 && kidsDisplay && (
        <div className="pl-1">
          <CommentsBlock comments={kids} />
        </div>
      )}
    </>
  );
};

export default CommentNode;
