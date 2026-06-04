"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 102, 0)",
    },
    secondary: {
      main: "rgb(246, 246, 239)",
    },
    text: {
      primary: "rgb(0, 0, 0)",
      secondary: "rgb(130, 130, 130)",
    },
    common: {
      white: "rgb(255, 255, 255)",
      black: "rgb(0, 0, 0)",
    },
    action: {
      disabled: "rgb(208 208 208 / 81%)",
    },
    error: {
      main: "rgb(211, 60, 60)",
    },
    warning: {
      main: "rgb(255, 201, 0)",
    },
    success: {
      main: "rgb(59, 240, 18)",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
