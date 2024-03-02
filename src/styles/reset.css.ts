import { recipe } from "@vanilla-extract/recipes";

import { resetLayer } from "./layer.css";

export const reset = recipe({
  base: [
    resetLayer({
      boxSizing: "border-box",
      blockSize: "auto",
      inlineSize: "auto",
    }),
    resetLayer({
      margin: 0,
      padding: 0,
    }),
    resetLayer({
      display: "block",
    }),
    resetLayer({
      border: "none",
    }),
    resetLayer({
      color: "inherit",
      background: "none",
    }),
    resetLayer({
      fontSize: "inherit",
      fontFamily: "inherit",
      fontWeight: "inherit",
      lineHeight: "inherit",
      textDecoration: "none",
    }),
    resetLayer({
      listStyle: "none",
    }),
  ],
});
