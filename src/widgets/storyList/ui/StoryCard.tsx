import Link from "next/link";
import { Heading } from "@shared/ui";
import { timestampFormat } from "@shared/lib";
import { PropsWithChildren } from "react";
import ForumIcon from "@mui/icons-material/Forum";
import { StoryItem } from "@entities/storyItem";

interface StoryCardProps {
  item: StoryItem;
  positionNumber: number;
}

const StoryCardInfo = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <div
      className={
        "text-fontsecond flex gap-0.5 text-sm min-[450px]:text-xs " + className
      }
    >
      {children}
    </div>
  );
};

const StoryCard = ({ positionNumber, item }: StoryCardProps) => {
  const { id, title, user, score, time, commentsCount } = item ?? {};

  const timestamp = timestampFormat(time ?? 0, "DD.MM.YYYY");
  const dateString = `${timestamp.date}`;

  return (
    <Link href={`/story/${id}`}>
      <div className="text-font group grid h-25 grid-cols-[50px_max-content_1fr] md:h-14.75">
        <span className="text-primary flex items-center justify-center text-xl font-bold">
          {score ?? 0}
        </span>
        <span className="group-hover:bg-primary article-decor bg-fontSecond mx-1 my-0 w-0.75" />
        <div className="flex flex-col justify-between">
          <Heading
            className="!min-[450px]:text-lg flex! h-full! items-center! font-medium!"
            variant="h2"
          >
            {title}
          </Heading>
          <div className="flex gap-0.5">
            <StoryCardInfo>{`#${positionNumber}`}</StoryCardInfo>
            <StoryCardInfo>
              {"by "}
              <StoryCardInfo className="text-font font-semibold">{`${user ?? "unknown"}`}</StoryCardInfo>
            </StoryCardInfo>
            <StoryCardInfo>{dateString}</StoryCardInfo>
            <StoryCardInfo className="flex items-center gap-0.5">
              <ForumIcon color="action" fontSize="inherit" />
              {commentsCount}
            </StoryCardInfo>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;
