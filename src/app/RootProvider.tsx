"use client";
import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import {
  QueryClient,
  QueryClientProvider,
  QueryErrorResetBoundary,
} from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: true,
    },
  },
});

const RootProvider = ({ children }: PropsWithChildren) => {
  return (
    <AppRouterCacheProvider options={{ enableCssLayer: true }}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <QueryErrorResetBoundary>{children}</QueryErrorResetBoundary>
        </QueryClientProvider>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default RootProvider;
