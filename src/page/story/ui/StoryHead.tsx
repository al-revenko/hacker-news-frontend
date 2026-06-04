import { StoryItem } from "@entities/storyItem";
import { Heading } from "@shared/ui";
import { timestampFormat } from "@shared/utils";

type Props = { item: StoryItem };

const StoryHead = ({ item }: Props) => {
  const timestamp = timestampFormat(item.time, "DD MMMM YYYY");

  const dateString = `in ${timestamp.date} at ${timestamp.time}`;

  return (
    <>
      <Heading variant="h1">{item.title}</Heading>
      <div className="flex flex-wrap items-center gap-1 pt-2 text-xl">
        {item.score && (
          <span className="text-fontSecond">
            <span className="text-primary">{item.score}</span>
            {" pts"}
          </span>
        )}
        {item.user && (
          <span className="text-fontSecond">
            {"by "}
            <span className="font-bold">{item.user}</span>
          </span>
        )}
        {item.url && (
          <a
            className="text-primary hover:opacity-70"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.url}
          </a>
        )}
        <span className="text-fontSecond">{dateString}</span>
      </div>
    </>
  );
};

export default StoryHead;
