import { css } from "@emotion/react";

/* BEST REVIEW 전체 */
export const reviewGrid = css({
  width: "100%",

  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  // justifyContent: "center",
  // alignItems: "center",
  justifyContent: "space-between",
  alignContent: "space-between",
  gap: "60px",

  // padding: "0 30px",

  "@media (max-width: 1023px)": {
    padding: "0 20px",
    // columnGap: "20px",
    // rowGap: "30px",
    gridTemplateColumns: "1fr",
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "1fr",
    justifyItems: "center",
    padding: "0 20px",

    columnGap: 0,
    rowGap: "50px",
  },
});

/* 리뷰 카드 */
export const reviewCard = css({
  width: "100%",
  height: "240px",

  display: "flex",

  borderRadius: "8px",
  overflow: "hidden",

  backgroundColor: "#fff",

  "@media (max-width: 767px)": {
    maxWidth: "400px",
    height: "auto",
    flexDirection: "column",
  },
});

/* 상품 이미지 */
export const productImage = css({
  // width: "50%",
  // height: "100%",

  flexShrink: 0,
  aspectRatio: "1 / 1",
  display: "block",

  objectFit: "cover",
  objectPosition: "center center",

  "& img": { width: "100%", height: "100%", objectFit: "cover" },

  "@media (max-width: 767px)": {
    width: "100%",
    height: "auto",
  },
});

/* 리뷰 내용 */
export const reviewContent = css({
  width: "100%",
  minWidth: 0,

  display: "flex",
  flexDirection: "column",

  padding: "24px",

  // boxSizing: "border-box",

  "@media (max-width: 767px)": {
    width: "100%",
    height: "auto",

    padding: "20px",
    gap: "20px",

    textAlign: "left",
  },
});

/* 상품명 */
export const productName = css({
  margin: "0 0 12px",

  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "26px",

  color: "var(--text-primary)",

  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

/* 리뷰 내용 */
export const reviewText = css({
  margin: 0,

  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "21px",

  color: "var(--text-secondary)",

  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,

  overflow: "hidden",
});

/* 별점 영역 */
export const ratingArea = css({
  marginTop: "auto",

  display: "flex",
  flexDirection: "column",

  gap: "5px",
});

/* 점수 + 문구 + 닉네임 */
export const ratingTop = css({
  display: "flex",
  alignItems: "center",

  gap: "7px",
});

export const ratingNumber = css({
  fontSize: "16px",
  fontWeight: 600,
  lineHeight: "20px",

  color: "var(--text-primary)",
});

export const ratingText = css({
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "20px",

  color: "var(--text-secondary)",
});

/* 별 5개 */
export const starRating = css({
  display: "flex",
  alignItems: "center",

  gap: "3px",

  width: "fit-content",
  height: "16px",
});

/* 채워진 별 */
export const star = css({
  width: "16px",
  height: "16px",

  flexShrink: 0,

  display: "block",

  fill: "var(--text-primary)",
});

/* 빈 별 */
export const emptyStar = css({
  width: "16px",
  height: "16px",

  flexShrink: 0,

  display: "block",

  fill: "var(--border)",
});
