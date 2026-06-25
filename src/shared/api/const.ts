import { dependOnSide } from "@shared/lib";

export const API_URL =
  dependOnSide(process.env.NEXT_PUBLIC_API_URL, process.env.INTERNAL_API_URL) ??
  "";
if (!API_URL) {
  throw new Error(
    `env ${dependOnSide("NEXT_PUBLIC_API_URL", "INTERNAL_API_URL")} is not set`,
  );
}

export enum ITEM_TYPES {
  Story = "story",
  Comment = "comment",
}
