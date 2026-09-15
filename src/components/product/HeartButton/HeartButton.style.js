import { css } from "@emotion/react";

export const heartButton = (isLiked) =>
  css({
    position: "absolute",
    top: "8px",
    right: "8px",

    width: "32px",
    height: "32px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: 0,
    border: "1px solid var(--bg-button)",

    borderRadius: "50%",
    backgroundColor: "#fff",

    color: isLiked ? "var(--acent-error)" : "var(--text-primary)",

    transform: "translateY(1px)",

    cursor: "pointer",

    svg: {
      width: "19px",
      height: "19px",
      display: "block",

      animation: isLiked ? "heartPop 0.35s ease" : "none",
    },
    "@keyframes heartPop": {
      "0%": {
        transform: "scale(1)",
      },
      "40%": {
        transform: "scale(1.3)",
      },
      "70%": {
        transform: "scale(0.9)",
      },
      "100%": {
        transform: "scale(1)",
      },
    },
  });
