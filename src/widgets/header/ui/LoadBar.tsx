"use client";
// import { useLoadingState } from '@shared/hooks';
import { LinearProgress } from "@mui/material";

const LoadBar = () => {
  const isLoading = false;

  return (
    <div className="absolute bottom-0 left-0 right-0">
      {isLoading && (
        <LinearProgress
          className="bg-primary h-0.75 w-full"
          color="secondary"
        />
      )}
    </div>
  );
};

export default LoadBar;
