import styled from "@emotion/styled";

const TABLET = "@media (max-width: 1023px)";

const MOBILE = "@media (min-width: 320px) and (max-width: 767px)";

export const Page = styled.div({
  maxWidth: 1300,
  width: "100%",
  padding: "0 50px 80px",

  color: "var(--text-color)",

  [TABLET]: {
    padding: "0 30px 60px",
  },

  [MOBILE]: {
    padding: "0 20px 40px",
  },
});

export const Header = styled.div({
  marginBottom: "24px",

  [TABLET]: {
    marginBottom: "20px",
  },

  [MOBILE]: {
    marginBottom: "18px",
  },
});

export const Title = styled.h1({
  fontSize: "44px",
  fontWeight: 700,
  lineHeight: 1.2,

  [TABLET]: {
    fontSize: "36px",
  },

  [MOBILE]: {
    fontSize: "28px",
  },
});

export const Subtitle = styled.p({
  margin: "6px 0 0",

  color: "#6E6560",
  fontSize: "18px",

  [TABLET]: {
    fontSize: "16px",
  },

  [MOBILE]: {
    fontSize: "15px",
  },
});

export const MyPageButton = styled.button({
  flexShrink: 0,
  padding: "10px 18px",

  color: "#4A3425",
  backgroundColor: "#F5E9DF",

  fontSize: "14px",
  fontWeight: 600,

  border: "1px solid #DCC8B8",
  borderRadius: "999px",
  cursor: "pointer",

  transition: "background-color 0.2s ease, color 0.2s ease",

  "&:hover": {
    color: "#FFFFFF",
    backgroundColor: "#4A3425",
  },
});

export const TabSection = styled.div({
  display: "flex",
  flexDirection: "column",

  gap: "20px",

  [TABLET]: {
    gap: "18px",
  },

  [MOBILE]: {
    gap: "16px",
  },
});

export const MainTabList = styled.div({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",

  width: "100%",

  gap: "18px",

  [TABLET]: {
    gap: "14px",
  },

  [MOBILE]: {
    gridTemplateColumns: "1fr",

    gap: "12px",
  },
});

export const MainTabButton = styled.button(({ isActive }) => ({
  position: "relative",

  display: "flex",

  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  height: "54px",

  padding: 0,

  border: "1px solid var(--text-primary)",
  borderRadius: "4px",

  background: "#fff",

  color: isActive ? "#2b2724" : "#6f6964",

  fontSize: "15px",

  fontWeight: isActive ? 700 : 500,

  cursor: "pointer",

  "&::after": isActive
    ? {
        content: '""',

        position: "absolute",

        left: "50%",
        bottom: 0,

        width: "48px",
        height: "3px",

        background: "#2b2724",

        transform: "translateX(-50%)",
      }
    : {},

  "&:hover": {
    color: "#120801",
  },

  [TABLET]: {
    fontSize: "14px",
  },

  [MOBILE]: {
    height: "44px",
    border: "1px solid #eee9e4",
    fontSize: "13px",

    "&::after": {
      display: "none",
    },
  },
}));

export const ReviewList = styled.div({
  display: "flex",
  flexDirection: "column",

  gap: "40px",

  [TABLET]: {
    gap: "30px",
  },

  [MOBILE]: {
    gap: "20px",
  },
});

export const ReviewCard = styled.article({
  display: "flex",

  gap: "40px",

  width: "100%",

  padding: "30px 60px",

  border: "1px solid var(--text-primary)",
  borderRadius: "var(--radius-md)",

  background: "#fff",

  [TABLET]: {
    gap: "16px",

    padding: "20px 32px",
  },

  [MOBILE]: {
    flexDirection: "column",

    gap: "10px",

    padding: "10px",
  },
});

export const ProductArea = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  gap: "12px",

  minWidth: 0,

  [MOBILE]: {
    flexDirection: "row",
    columnGap: "10px",
    width: "100%",
  },
});

export const ProductImage = styled.div({
  width: "130px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "8px",

  background: "#ddd5cd",
  color: "#8b827a",

  fontSize: "12px",

  overflow: "hidden",

  aspectRatio: "1 / 1",

  flexShrink: 0,

  "& img": {
    width: "100%",
    height: "100%",

    objectFit: "cover",
  },

  [TABLET]: {
    width: "105px",
  },

  [MOBILE]: {
    width: "70px",
    fontSize: "9px",
  },
});

export const ProductName = styled.p({
  width: "100%",

  margin: 0,

  overflow: "hidden",

  fontSize: "18px",
  fontWeight: 700,

  textAlign: "center",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",

  [TABLET]: {
    fontSize: "17px",
  },

  [MOBILE]: {
    width: "auto",

    fontSize: "15px",

    textAlign: "left",
    whiteSpace: "normal",
  },
});

export const ProductInfo = styled.div({
  width: "100%",

  [MOBILE]: {
    position: "relative",

    display: "flex",
    alignItems: "center",

    height: "70px",

    flex: 1,
  },
});

export const MobileActions = styled.div({
  display: "none",

  [MOBILE]: {
    position: "absolute",

    top: 0,
    right: 0,

    display: "flex",
    alignItems: "center",

    gap: "3px",
  },
});

export const ReviewContent = styled.div({
  display: "flex",
  flexDirection: "column",

  flex: 1,
  minWidth: 0,
  height: "100%",
});

export const ReviewTop = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  gap: "16px",

  marginBottom: "10px",

  [TABLET]: {
    gap: "12px",

    marginBottom: "8px",
  },

  [MOBILE]: {
    marginBottom: "8px",
  },
});

export const ReviewMeta = styled.div({
  display: "flex",
  alignItems: "center",

  gap: "14px",

  minWidth: 0,

  [TABLET]: {
    gap: "10px",
  },

  [MOBILE]: {
    width: "100%",
    justifyContent: "space-between",
  },
});

export const StarRating = styled.div({
  display: "flex",
  alignItems: "center",

  gap: "4px",

  color: "#2b2724",

  "& svg": {
    width: "16px",
    height: "16px",
  },

  [TABLET]: {
    gap: "3px",

    "& svg": {
      width: "14px",
      height: "14px",
    },
  },

  [MOBILE]: {
    gap: "2px",

    "& svg": {
      width: "12px",
      height: "12px",
    },
  },
});

export const ReviewDate = styled.span({
  color: "#4f4a46",

  fontSize: "17px",
  fontWeight: 600,

  whiteSpace: "nowrap",

  [TABLET]: {
    fontSize: "14px",
  },

  [MOBILE]: {
    fontSize: "13px",
  },
});

export const ReviewActions = styled.div({
  display: "flex",
  alignItems: "center",

  gap: "6px",

  flexShrink: 0,

  [MOBILE]: {
    display: "none",
  },
});

export const ActionButton = styled.button({
  padding: 0,

  border: "none",

  background: "transparent",

  color: "#2b2724",

  fontSize: "17px",
  fontWeight: 600,

  cursor: "pointer",

  "&:hover": {
    color: "var(--bg-button)",
    textDecoration: "underline",
  },

  [TABLET]: {
    fontSize: "15px",
  },
});

export const ActionDivider = styled.span({
  color: "#aaa",
  fontSize: "15px",

  [MOBILE]: {
    fontSize: "14px",
  },
});

export const ReviewTextBox = styled.div({
  height: "140px",

  padding: "12px 14px",

  border: "1px solid var(--border)",

  borderRadius: "4px",

  background: "#fff",

  [TABLET]: {
    height: "110px",

    padding: "8px 10px",
  },

  [MOBILE]: {
    height: "90px",
    padding: "8px",
  },
});

export const ReviewText = styled.p({
  color: "var(--text-color)",

  fontSize: "18px",
  fontWeight: 300,

  lineHeight: 1.2,

  wordBreak: "keep-all",

  [TABLET]: {
    fontSize: "17px",
  },

  [MOBILE]: {
    fontSize: "15px",

    lineHeight: 1.45,
  },
});

// ========================================
// [추가] 리뷰가 없을 때 Empty 화면
// ========================================

export const EmptyReview = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "100%",
  minHeight: "520px",

  padding: "50px 20px",

  textAlign: "center",

  [TABLET]: {
    minHeight: "450px",
    padding: "40px 20px",
  },

  [MOBILE]: {
    minHeight: "400px",
    padding: "35px 10px",
  },
});

// [추가] 고양이 이미지
export const EmptyImage = styled.img({
  width: "180px",
  height: "auto",

  marginBottom: "20px",

  objectFit: "contain",

  [TABLET]: {
    width: "150px",
  },

  [MOBILE]: {
    width: "110px",
    marginBottom: "14px",
  },
});

// [추가] 리뷰내역이 없습니다.
export const EmptyTitle = styled.h2({
  color: "var(--text-color)",

  fontSize: "28px",
  fontWeight: 700,
  lineHeight: 1.3,

  [TABLET]: {
    fontSize: "24px",
  },

  [MOBILE]: {
    fontSize: "20px",
  },
});

// [추가] 설명 문구
export const EmptyDescription = styled.p({
  margin: "16px 0 0",

  color: "#8B817A",

  fontSize: "18px",
  fontWeight: 400,
  lineHeight: 1.5,

  [TABLET]: {
    fontSize: "16px",
  },

  [MOBILE]: {
    marginTop: "10px",
    fontSize: "14px",
  },
});

// [추가] 상품보러가기 버튼
export const ProductButton = styled.button({
  width: "380px",
  height: "58px",

  marginTop: "30px",

  border: "none",
  borderRadius: "30px",

  background: "var(--acent-beidge)",
  color: "var(--bg-button)",

  fontSize: "20px",
  fontWeight: 700,

  cursor: "pointer",

  "&:hover": {
    background: "var(--bg-button)",
    color: "var(--text-button)",
  },

  [TABLET]: {
    width: "320px",
    height: "54px",
  },

  [MOBILE]: {
    width: "100%",
    height: "48px",

    marginTop: "18px",

    fontSize: "15px",
  },
});
