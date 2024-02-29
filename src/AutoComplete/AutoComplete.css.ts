import { recipe } from "@vanilla-extract/recipes";

import { colors } from "../style/color.css";
import { reset } from "../style/reset.css";

export const input = recipe({
  base: [reset],
});

export const suggestList = recipe({
  base: [
    reset,
    {
      border: "1px solid #000",
    },
  ],
});

export const suggestItem = recipe({
  base: [
    reset,
    {
      ":hover": {
        color: colors.contrast,
        backgroundColor: colors.primary,
      },
    },
  ],
});

export const suggestButton = recipe({
  base: [
    reset,
    {
      inlineSize: "100%",
    },
    {
      cursor: "pointer",
    },
  ],
});
