import styled from "@emotion/styled";

const TABLET = "@media (max-width: 1023px)";
const MOBILE = "@media (max-width: 767px)";

/* ─────────────────────────────
   Page
───────────────────────────── */

export const Page = styled.div({
  maxWidth: 720,
  margin: "0 auto",
  padding: "24px 20px 60px",
  color: "var(--text-color)",

  [TABLET]: {
    maxWidth: "640px",
    padding: "20px 18px 50px",
  },

  [MOBILE]: {
    maxWidth: 480,
    padding: "16px 16px 40px",
  },
});

/* ─────────────────────────────
   Header
───────────────────────────── */

export const Header = styled.header({
  marginBottom: 20,

  [TABLET]: {
    marginBottom: 18,
  },

  [MOBILE]: {
    marginBottom: 16,
  },
});

export const Title = styled.h1({
  fontSize: 24,
  fontWeight: 700,

  [TABLET]: {
    fontSize: "22px",
  },

  [MOBILE]: {
    fontSize: 20,
  },
});

export const Subtitle = styled.p({
  margin: "6px 0 0",
  
  fontSize: 18,
  color: "#6E6860",

  [TABLET]: {
    fontSize: "16px",
  },

  [MOBILE]: {
    marginTop: 4,
    fontSize: "15px",
  },
});

/* ─────────────────────────────
   Search
───────────────────────────── */

export const SearchBar = styled.div({
  display: "flex",
  gap: 8,
  marginBottom: 16,

  [TABLET]: {
    gap: 6,
    marginBottom: 14,
  },

  [MOBILE]: {
    flexDirection: "column",
  },
});

export const FilterSelect = styled.select({
  flexShrink: 0,
  padding: "10px 12px",
  border: "1px solid #ddd",
  borderRadius: "var(--radius-md)",
  background: "#fff",
  color: "var(--text-color)",
  fontSize: 16,
  cursor: "pointer",

    [TABLET]: {
    padding: "9px 10px",
    fontSize: 14,
  },

  [MOBILE]: {
    width: "100%",
  },
});

export const SearchInputWrap = styled.div({
  position: "relative",
  flex: 1,
  display: "flex",
  alignItems: "center",

  [MOBILE]: {
    width: "100%",
  },
});

export const SearchInput = styled.input({
  width: "100%",
  padding: "10px 40px 10px 14px",
  border: "1px solid #ddd",
  borderRadius: "var(--radius-md)",
  background: "#fff",
  color: "var(--text-color)",
  fontSize: 18,

  "&::placeholder": {
    color: "#aaa",
  },

  [TABLET]: {
    padding: "9px 36px 9px 12px",
    fontSize: 15,
  },
});

export const SearchIconButton = styled.button({
  position: "absolute",
  right: 8,

  width: 24,
  height: 24,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  padding: 0,
  border: "none",
  background: "none",
  color: "#6E6860",
  cursor: "pointer",

});

/* ─────────────────────────────
   Tabs
───────────────────────────── */

export const TabList = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
  marginBottom: 20,

  [TABLET]: {
    gap: 6,
    marginBottom: 18,
  },

  [MOBILE]: {
    gap: 6,
    marginBottom: 16,
  },
});

export const TabButton = styled.button(({ isActive }) => ({
  padding: "8px 14px",
  border: isActive
    ? "1px solid var(--border)"
    : "1px solid #ddd",
  borderRadius: "var(--radius-md)",

  background: isActive ? "var(--bg-button)" : "#fff",
  color: isActive ? "#fff" : "#6E6860",

  fontSize: 13,
  fontWeight: 600,
  cursor: "pointer",

  "&:hover": {
    background: isActive ? "var(--bg-button)" : "#f7f7f7",
  },

  [TABLET]: {
    padding: "7px 12px",
    fontSize: 15,
  },

  [MOBILE]: {
    padding: "6px 12px",
    fontSize: 12,
  },
}));

/* ─────────────────────────────
   Order List
───────────────────────────── */

export const OrderList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 12,

  [TABLET]: {
    gap: "10px",
  },

  [MOBILE]: {
    gap: 8,
  },
});

/* ─────────────────────────────
   Order Card
───────────────────────────── */

export const OrderCard = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: "14px 18px",

  border: "1px solid var(--text-primary)",
  borderRadius: "var(--radius-md)",
  background: "#fffdf9",

  [TABLET]: {
    gap: "12px",
    padding: "12px 16px",
  },

  [MOBILE]: {
    gap: 20,
    padding: "12px 14px",
  },
});

/* ─────────────────────────────
   Thumbnail
───────────────────────────── */

export const Thumb = styled.div({
  flexShrink: 0,

  width: 64,
  height: 64,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  borderRadius: "var(--radius-md)",
  background: "#f2f2f2",

  [TABLET]: {
    width: 56,
    height: 56,
  },

  [MOBILE]: {
    width: 80,
    height: 80,
  },
});

export const ThumbIconWrap = styled.div({
  width: 18,
  height: 18,

  "& svg": {
    display: "block",
    width: "100%",
    height: "100%",
  },

  [TABLET]: {
    width: 16,
    height: 16,
  },

  [MOBILE]: {
    width: 28,
    height: 28,
  },
});

/* ─────────────────────────────
   Order Info
───────────────────────────── */

export const OrderInfo = styled.div({
  flex: 1,
  minWidth: 0,

  display: "flex",
  flexDirection: "column",
  gap: 4,

  [TABLET]: {
    gap: 3,
  },

  [MOBILE]: {
    gap: 2,
  },
});

/* 주문번호 / 상태 */

export const OrderHeader = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 8,

  [TABLET]: {
    gap: 6,
  },

  [MOBILE]: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gridTemplateAreas: `
      "label badge"
      "id id"
    `,
    columnGap: 6,
    rowGap: 2,
  },
});

export const OrderLabelText = styled.span({
  gridArea: "label",

  fontSize: 15,
  fontWeight: 700,
  color: "var(--text-color)",
  whiteSpace: "nowrap",

  [TABLET]: {
    fontSize: 16,
  },

  [MOBILE]: {
    fontSize: 15,
  },
});

export const OrderIdText = styled.span({
  gridArea: "id",

  fontSize: 15,
  fontWeight: 700,
  color: "var(--text-color)",
  whiteSpace: "nowrap",

    [TABLET]: {
    fontSize: 16,
  },

  [MOBILE]: {
    fontSize: 14,
  },
});

export const StatusBadge = styled.span(({ variant }) => {
  const palette = {
    delivered: {
      bg: "#eef4ff",
      color: "#2563eb",
    },

    shipping: {
      bg: "#e9f9ee",
      color: "#16a34a",
    },

    preparing: {
      bg: "#fff4e5",
      color: "#d97706",
    },

    paid: {
      bg: "#f3f0ff",
      color: "#7c3aed",
    },

    cancelExchange: {
      bg: "#fdeaea",
      color: "#dc2626",
    },

    default: {
      bg: "#f2f2f2",
      color: "#666",
    },
  };

  const { bg, color } = palette[variant] || palette.default;

  return {
    gridArea: "badge",

    flexShrink: 0,

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "2px 8px",

    borderRadius: "var(--radius-md)",

    background: bg,
    color,

    fontSize: 12,
    fontWeight: 600,

    userSelect: "none",
    whiteSpace: "nowrap",
    WebkitTapHighlightColor: "transparent",

    [TABLET]: {
      padding: "2px 7px",
      fontSize: 13,
    },

    [MOBILE]: {
      justifySelf: "start",
      padding: "1px 6px",
      fontSize: 11,
    },
  };
});

/* ─────────────────────────────
   Meta
───────────────────────────── */

export const MetaList = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 6,

  [TABLET]: {
    gap: 4,
  },

  [MOBILE]: {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0,
  },
});

export const MetaRow = styled.p({
  margin: 0,
  minHeight: 18,

  color: "#888",
  fontSize: 13,

  [TABLET]: {
    fontSize: 12,
  },

  [MOBILE]: {
    minHeight: 15,
    fontSize: 11,
  },
});

export const MetaDivider = styled.span({
  color: "#ccc",
  fontSize: 13,

  [TABLET]: {
    fontSize: 12,
  },

  [MOBILE]: {
    display: "none",
  },
});

/* ─────────────────────────────
   Order Summary
───────────────────────────── */

export const OrderSummaryRow = styled.div({
  display: "flex",
  alignItems: "baseline",
  gap: 6,

  [TABLET]: {
    gap: 5,
  },

  [MOBILE]: {
    marginTop: 2,
  },
});

export const OrderCount = styled.span({
  color: "#999",
  fontSize: 14,

  [TABLET]: {
    fontSize: 12,
  },

  [MOBILE]: {
    fontSize: 11,
  },
});

export const OrderTotal = styled.span({
  margin: 0,

  fontSize: 17,
  fontWeight: 700,

  [TABLET]: {
    fontSize: 15,
  },

  [MOBILE]: {
    fontSize: 13,
  },
});

/* ─────────────────────────────
   Detail Button
───────────────────────────── */

export const DetailButton = styled.button({
  flexShrink: 0,

  width: 154,
  height: 52,

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  padding: "0 16px",

  border: "1px solid var(--text-primary)",
  borderRadius: "var(--radius-md)",

  background: "#fff",
  color: "var(--text-primary)",

  fontSize: 17,
  fontWeight: 600,
  lineHeight: 1,

  cursor: "pointer",

  transition: "background 0.15s ease, color 0.15s ease",

  "&:hover": {
    background: "var(--bg-button)",
    color: "#fff",
    borderColor: "var(--bg-button)",
  },

  [TABLET]: {
    width: 130,
    height: 46,
    padding: "0 12px",
    fontSize: 15,
  },

  [MOBILE]: {
    width: "auto",
    height: "auto",

    padding: 4,

    border: "none",
    background: "none",

    "&:hover": {
      background: "none",
      color: "#6E6860",
    },
  },
});

export const DetailButtonText = styled.span({
  color: "inherit",
  whiteSpace: "nowrap",

  [MOBILE]: {
    display: "none",
  },
});

export const DetailArrow = styled.span({
  flexShrink: 0,

  width: 16,
  height: 16,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  color: "inherit",

  "& svg": {
    display: "block",
    width: 14,
    height: 14,
  },

  [TABLET]: {
    width: 14,
    height: 14,

    "& svg": {
      width: 12,
      height: 12,
    },
  },

  [MOBILE]: {
    width: 18,
    height: 18,

    "& svg": {
      width: 16,
      height: 16,
    },
  },
});

/* ─────────────────────────────
   Load More
───────────────────────────── */

export const LoadMoreWrap = styled.div({
  display: "flex",
  justifyContent: "center",
  marginTop: 24,

  [TABLET]: {
    marginTop: 20,
  },

  [MOBILE]: {
    marginTop: 16,
  },
});

export const LoadMoreButton = styled.button({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",

  // 텍스트가 세로로 내려가지 않도록
  whiteSpace: "nowrap",

  // 버튼 자체가 내용에 맞게 유지되도록
  width: "auto",
  minWidth: "auto",
  flexShrink: 0,

  gap: 10,

  fontSize: 13,
  fontWeight: 600,
  lineHeight: 1,

  color: "var(--text-primary)",
  padding: "10px 20px",

  border: "1px solid var(--text-primary)",
  borderRadius: "var(--radius-md)",
  background: "#fff",

  cursor: "pointer",

  "&:hover": {
    background: "var(--bg-button)",
    color: "#fff",
  },

  "& svg": {
    display: "block",
    width: 14,
    height: 14,
    flexShrink: 0,
  },

  [TABLET]: {
    fontSize: 15,
    padding: "9px 18px",
    gap: 10,

    "& svg": {
      width: 13,
      height: 13,
    },
  },

  [MOBILE]: {
    fontSize: 12,
    padding: "8px 16px",
    gap: 8,

    // 모바일에서도 한 줄 고정
    whiteSpace: "nowrap",

    "& svg": {
      width: 14,
      height: 14,
      flexShrink: 0,
    },
  },
});