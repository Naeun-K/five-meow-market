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
    border: "none",
    borderRadius: "50%",
    backgroundColor: "#fff",

    // 안 눌렀을 때 검정 / 눌렀을 때 빨강
    color: isLiked ? "var(--acent-error)" : "#000",
    //가운데 안와서 위로 올림
    transform: "translateY(1px)",

    cursor: "pointer",

    svg: {
      width: "19px",
      height: "19px",
      display: "block",
    },
  });
