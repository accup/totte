import { recipe } from "@vanilla-extract/recipes";

import { colors } from "../style/color.css";
import { reset } from "../style/reset.css";

export const container = recipe({
  base: [
    reset,
    {
      paddingBlock: 5,
      paddingInline: 10,
    },
    {
      color: colors.base,
      backgroundColor: colors.contrast,
    },
    {
      border: `2px solid ${colors.border}`,
    },
    {
      cursor: "pointer",
    },
  ],
});