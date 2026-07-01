import { Metadata } from "next";
import StoryPage from "@page/story";
import { fetchStoryItem } from "@entities/storyItem";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | null> {
  const { id } = await params;

  const item = await fetchStoryItem(id);

  if (!item) {
    return null;
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

  if (!item) notFound();

  return <StoryPage data={item} />;
}
