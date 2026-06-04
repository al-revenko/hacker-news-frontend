import { Skeleton } from "@mui/material";

const CommentNodeSkeleton = () => {
  return (
    <article className="grid grid-cols-[10px_1fr] gap-1 pb-4">
      <div className="flex h-full flex-col items-center gap-1">
        <Skeleton variant="circular" width={14} height={20} />
        <Skeleton
          variant="rectangular"
          className="h-full w-0.75"
          height="100%"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Skeleton variant="rectangular" width={180} height={16} />
        <Skeleton variant="rectangular" width="100%" height={12} />
        <Skeleton variant="rectangular" width="80%" height={12} />
      </div>
    </article>
  );
};

export default CommentNodeSkeleton;
