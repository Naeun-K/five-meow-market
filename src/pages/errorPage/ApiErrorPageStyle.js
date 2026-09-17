import { css } from "@emotion/react";

export const errorPage = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  minHeight: "650px",
  padding: "80px 40px 120px",

  "@media (max-width: 1023px)": {
    minHeight: "600px",
    padding: "60px 30px 100px",
  },

  "@media (max-width: 767px)": {
    minHeight: "520px",
    padding: "50px 20px 80px",
  },
});

export const errorContent = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  width: "100%",
  maxWidth: "600px",

  textAlign: "center",
});

export const errorImage = css({
  width: "220px",
  height: "220px",
  marginBottom: "30px",

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  "@media (max-width: 1023px)": {
    width: "190px",
    height: "190px",
  },

  "@media (max-width: 767px)": {
    width: "150px",
    height: "150px",
    marginBottom: "24px",
  },
});

export const errorTitle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",

  marginBottom: "18px",

  "& h1": {
    margin: 0,

    color: "var(--text-primary)",
    fontSize: "32px",
    fontWeight: 700,
  },

  "& span": {
    display: "flex",
    width: "28px",
    height: "28px",

    color: "var(--paw-color)",
  },

  "@media (max-width: 1023px)": {
    "& h1": {
      fontSize: "28px",
    },
  },

  "@media (max-width: 767px)": {
    gap: "8px",

    "& h1": {
      fontSize: "23px",
    },

    "& span": {
      width: "22px",
      height: "22px",
    },
  },
});

export const errorDescription = css({
  marginBottom: "40px",

  color: "var(--text-secondary)",
  fontSize: "18px",
  lineHeight: 1.7,

  "& p": {
    margin: 0,
  },

  "@media (max-width: 767px)": {
    marginBottom: "32px",

    fontSize: "15px",
  },
});

export const buttonWrapper = css({
  display: "flex",
  justifyContent: "center",
  gap: "12px",

  width: "100%",
  maxWidth: "420px",

  "@media (max-width: 767px)": {
    gap: "10px",
  },
});

const commonButton = {
  flex: 1,

  minHeight: "50px",
  padding: "12px 20px",

  fontSize: "16px",
  fontWeight: 600,

  borderRadius: "var(--radius-md)",

  cursor: "pointer",

  transition:
    "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",

  "@media (max-width: 767px)": {
    minHeight: "44px",
    padding: "10px",

    fontSize: "14px",
  },
};

export const retryButton = css({
  ...commonButton,

  color: "var(--text-button)",
  backgroundColor: "var(--bg-button)",

  border: "1px solid var(--bg-button)",

  "&:hover": {
    backgroundColor: "var(--text-primary)",
    borderColor: "var(--text-primary)",
  },
});

export const homeButton = css({
  ...commonButton,

  color: "var(--text-primary)",
  backgroundColor: "#fff",

  border: "1px solid var(--border)",

  "&:hover": {
    backgroundColor: "var(--bg-notice)",
    borderColor: "var(--text-primary)",
  },
});
