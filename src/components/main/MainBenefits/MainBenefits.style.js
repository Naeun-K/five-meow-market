import { css } from "@emotion/react";

export const whole = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  backgroundColor: "#f7f1e8",
});

export const benefits = css({
  width: "100%",

  maxWidth: "1300px",
  display: "grid",
  gridTemplateColumns: "repeat(4, max-content)",
  justifyContent: "space-between",
  gap: "80px",
  padding: "50px 30px",
  backgroundColor: "#f7f1e8",

  "@media (max-width: 1200px)": {
    justifyContent: "space-around",
    gridTemplateColumns: "repeat(2, max-content)",
    gap: "60px",
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "50px",
    // padding: "30px",
  },

  "@media (max-width: 450px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "30px",
    // padding: "30px",
  },
});

export const benefitItem = css({
  display: "flex",
  alignItems: "center",
  gap: "30px",
  minWidth: 0,
  "@media (max-width: 767px)": {
    justifyContent: "center",
    gap: "11px",
  },
});

export const icon = css({
  width: "50px",
  height: "50px",
  flexShrink: 0,
  fill: "currentColor",
  "@media (max-width: 767px)": {
    width: "40px",
    height: "40px",
  },
});

export const textBox = css({
  minWidth: 0,

  strong: {
    fontSize: "16px",
    fontWeight: 600,
    // whiteSpace: "nowrap",
    wordBreak: "keep-all",
  },

  p: {
    marginTop: "4px",
    fontSize: "15px",
    whiteSpace: "normal",
  },

  "@media (max-width: 767px)": {
    strong: {
      fontSize: "15px",
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
