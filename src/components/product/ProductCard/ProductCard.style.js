import { css } from "@emotion/react";

export const badgeText = {
  bestOrange: "BEST",
  bestBrown: "BEST",
  new: "NEW",
  badgeNone: "",
};

const badgeColors = {
  bestOrange: "#D25F36",
  bestBrown: "#B9785A",
  new: "#8DA64B",
  badgeNone: "transparent",
};

export const card = (hover) =>
  css({
    position: "relative",
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: "8px",
    overflow: "hidden",
    backgroundColor: "#eee7df",

    ...(hover && {
      transition: "transform 0.25s ease, box-shadow 0.25s ease",

      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
      },

      "&:hover img": {
        transform: "scale(1.05)",
      },
    }),
  });

export const productImage = (hover) =>
  css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center center",
    display: "block",

    ...(hover && {
      transition: "transform 0.3s ease",
    }),
  });
export const badge = (type) =>
  css({
    position: "absolute",
    top: "12px",
    left: "12px",

    width: "60px",
    height: "21px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: "15px",

    color: "#fff",
    backgroundColor: badgeColors[type],

    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1,
  });
