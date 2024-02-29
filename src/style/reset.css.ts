import { globalStyle, style } from "@vanilla-extract/css";

export const reset = style([]);

globalStyle(`:where(${reset})`, {
  boxSizing: "border-box",
  blockSize: "auto",
  inlineSize: "auto",

  margin: 0,
  padding: 0,

  display: "block",

  border: "none",

  color: "inherit",
  background: "none",

  fontSize: "inherit",
  fontFamily: "inherit",
  fontWeight: "inherit",
  lineHeight: "inherit",
  textDecoration: "none",

  listStyle: "none",
});
