"use client";

import { UnexpectedErrorPage, type UnexpectedErrorProps } from "@page/error";

export default function Error(props: UnexpectedErrorProps) {
  return <UnexpectedErrorPage {...props} />;
}
