import { createTheme, style } from "@vanilla-extract/css";

import { colors } from "./color.css";

export const theme = style([
  createTheme(colors, {
    base: "black",
    contrast: "white",
    primary: "blue",
    secondary: "green",
    border: "gray",
    accent: "yellow",
    important: "red",
    error: "red",
    info: "blue",
  }),
]);
