import { Metadata } from "next";
import StoryPage from "@page/story";
import { fetchStoryItem } from "@entities/storyItem";
import NotFoundPage from "@page/notFound";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  const item = await fetchStoryItem(id);

  if (!item) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: item.title,
    authors: item.user
      ? {
          name: item.user,
          url: item.url ?? undefined,
        }
      : undefined,
  };
}

export default async function Story({ params }: Props) {
  const { id } = await params;

  const item = await fetchStoryItem(id);

  if (!item) return <NotFoundPage />;

  return <StoryPage data={item} />;
}
