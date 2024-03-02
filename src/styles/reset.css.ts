import { recipe } from "@vanilla-extract/recipes";

import { resetLayer } from "./layer.css";

export const reset = recipe({
  variants: {
    box: {
      border: resetLayer({
        boxSizing: "border-box",
      }),
    },
    size: {
      auto: resetLayer({
        minBlockSize: "auto",
        maxBlockSize: "none",
        minInlineSize: "auto",
        maxInlineSize: "none",
        blockSize: "auto",
        inlineSize: "auto",
      }),
    },
    margin: {
      none: resetLayer({
        margin: 0,
      }),
    },
    padding: {
      none: resetLayer({
        padding: 0,
      }),
    },
    display: {
      block: resetLayer({
        display: "block",
      }),
    },
    border: {
      none: resetLayer({
        border: "none",
      }),
    },
    background: {
      none: resetLayer({
        background: "none",
      }),
    },
    text: {
      inherit: resetLayer({
        color: "inherit",
        fontSize: "inherit",
        fontFamily: "inherit",
        fontWeight: "inherit",
        lineHeight: "inherit",
        textDecoration: "none",
      }),
    },
    list: {
      none: resetLayer({
        listStyle: "none",
      }),
    },
  },
  defaultVariants: {
    box: "border",
    size: "auto",
    margin: "none",
    padding: "none",
    display: "block",
    border: "none",
    background: "none",
    text: "inherit",
    list: "none",
  },
});
