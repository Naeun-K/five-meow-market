import { css } from "@emotion/react";

export const benefits = css({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, max-content)",
  justifyContent: "space-between",
  columnGap: "80px",
  padding: "28px 40px",
  backgroundColor: "#f7f1e8",

  "@media (max-width: 1023px)": {
    justifyContent: "center",
    gridTemplateColumns: "repeat(2, max-content)",
    columnGap: "80px",
    rowGap: "24px",
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    columnGap: "12px",
    rowGap: "16px",
    padding: "18px 16px",
  },
});

export const benefitItem = css({
  display: "flex",
  alignItems: "center",
  gap: "14px",
  minWidth: 0,
  "@media (max-width: 767px)": {
    justifyContent: "center",
    gap: "8px",
  },
});

export const icon = css({
  width: "28px",
  height: "28px",
  flexShrink: 0,
  fill: "currentColor",
});

export const textBox = css({
  minWidth: 0,

  strong: {
    fontSize: "14px",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },

  p: {
    marginTop: "4px",
    fontSize: "12px",
    whiteSpace: "normal",
  },

  "@media (max-width: 767px)": {
    strong: {
      fontSize: "13px",
    },

    p: {
      display: "none",
    },
  },
});

export const desktopSpace = css({
  display: "inline",

  "@media (max-width: 767px)": {
    display: "none",
  },
});

export const mobileBreak = css({
  display: "none",

  "@media (max-width: 767px)": {
    display: "block",
  },
});
