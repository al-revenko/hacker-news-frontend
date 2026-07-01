"use client";

import { useEffect, useRef, useState } from "react";
import { Container, Title } from "./ui";
import { Button } from "@mui/material";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

export interface UnexpectedErrorProps {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}

export default function UnexpectedError({
  error,
  unstable_retry,
}: UnexpectedErrorProps) {
  const [disableeReset, setDisableeReset] = useState(false);
  const { reset: resetQueries } = useQueryErrorResetBoundary();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    console.error(error);
  }, [error]);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  function reset() {
    setDisableeReset(true);
    resetQueries();
    unstable_retry();
    timerRef.current = setTimeout(() => {
      setDisableeReset(false);
      timerRef.current = null;
    }, 3000);
  }

  return (
    <Container>
      <Title>Something went wrong!</Title>
      <div className="flex flex-col sm:flex-row justify-center gap-1">
        <p className="text-center">An unexpected error occurred</p>
        <Button
          size="small"
          className="text-secondary"
          variant="contained"
          onClick={reset}
          disabled={disableeReset}
        >
          Try again
        </Button>
      </div>
    </Container>
  );
}
