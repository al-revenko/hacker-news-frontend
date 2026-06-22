"use client";
import { LinearProgress } from "@mui/material";

export interface LoadBarProps {
  isLoading: boolean;
}

const LoadBar = ({ isLoading }: LoadBarProps) => {
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
