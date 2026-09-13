import styled from "@emotion/styled";

const TABLET = "@media (max-width: 1023px)";

const MOBILE =
  "@media (min-width: 320px) and (max-width: 767px)";

/* ─────────────────────────────
   Page
───────────────────────────── */

export const Page = styled.div({
  width: "100%",
  padding: "40px 100px 80px",

  color: "var(--text-color)",

    [TABLET]: {
    padding: "32px 60px 60px",
    },

      [MOBILE]: {
    padding: "24px 28px 40px",
    
  },
});


/* ─────────────────────────────
   Header
───────────────────────────── */

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


/* ─────────────────────────────
   Main Tabs
───────────────────────────── */

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

export const MainTabButton = styled.button(
  ({ isActive }) => ({
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

    color: isActive
      ? "#2b2724"
      : "#6f6964",

    fontSize: "15px",

    fontWeight: isActive
      ? 700
      : 500,

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

          transform:
            "translateX(-50%)",
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
  })
);

/* ─────────────────────────────
   Review List
───────────────────────────── */

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


/* ─────────────────────────────
   Review Card
───────────────────────────── */

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


/* ─────────────────────────────
   Product Area
───────────────────────────── */

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


/* ─────────────────────────────
   Review Content
───────────────────────────── */

export const ReviewContent = styled.div({
  display: "flex",
  flexDirection: "column",
  
  flex: 1,
  minWidth: 0,
  height: "100%",
});


/* ─────────────────────────────
   Review Top
───────────────────────────── */

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
 },
);

export const ActionDivider = styled.span({
  color: "#aaa",
  fontSize: "15px",

    [MOBILE]: {
    fontSize: "14px",
  },
});


/* ─────────────────────────────
   Review Text
───────────────────────────── */

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