import { Skeleton } from "@mui/material";

const StoryCardSkeleton = () => {
  return (
    <div className="text-font group grid h-25 grid-cols-[50px_max-content_1fr] min-[450px]:text-xs md:h-14.75">
      <span className="text-primary flex items-center justify-center text-xl font-bold">
        <Skeleton variant="text" width={40} height={28} />
      </span>
      <span className="bg-fontSecond mx-1 my-0 w-0.75" />
      <div className="flex flex-col justify-between">
        <Skeleton
          variant="rectangular"
          className="w-[80%] h-5 md:h-4 mt-5 md:mt-1"
        />
        <div className="flex gap-0.5">
          <Skeleton variant="text" width={40} height={14} />
          <Skeleton variant="text" width={60} height={14} />
          <Skeleton variant="text" width={50} height={14} />
          <Skeleton variant="text" width={40} height={14} />
        </div>
      </div>
    </div>
  );
};

export default StoryCardSkeleton;
