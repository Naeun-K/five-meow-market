import styled from "@emotion/styled";

const TABLET = "@media (max-width: 1023px)";
const MOBILE = "@media (max-width: 767px)";

export const EmptyOrderStyle = styled.div({
  width: "100%",
  maxWidth: "1300px",
  minHeight: "680px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  gap: "44px",

  padding: "60px 50px",

  textAlign: "center",

  "& .empty-image-container": {
    width: "220px",
    height: "220px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "& .empty-image": {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "contain",
  },

  "& .empty-text-container": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    gap: "16px",

    "& strong": {
      fontSize: "30px",
      fontWeight: 700,
      lineHeight: 1.4,

      color: "var(--text-primary)",
    },

    "& p": {
      fontSize: "18px",
      fontWeight: 400,
      lineHeight: 1.7,

      color: "var(--text-secondary)",
    },
  },

  "& > .navProduct": {
    
    width: "340px",
    height: "60px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: 0,

    border: "none",
    borderRadius: "30px",

    backgroundColor: "#ebccb2",
    color: "var(--text-primary)",

    fontSize: "18px",
    fontWeight: 600,

    cursor: "pointer",

    transition: "background-color 0.2s ease, color 0.2s ease",

    "&:hover": {
      backgroundColor: "#4F3927",
      color: "#fff",
    },
  },

  
  "@media (min-width: 768px) and (max-width: 1023px)": {
    minHeight: "620px",

    gap: "38px",

    padding: "50px 30px",

    "& .empty-image-container": {
      width: "180px",
      height: "180px",
    },

    "& .empty-text-container": {
      gap: "14px",

      "& strong": {
        fontSize: "26px",
      },

      "& p": {
        fontSize: "17px",
      },
    },

    "& > button": {
      width: "300px",
      
      height: "56px",

      fontSize: "17px",
    },
  },

  
  "@media (max-width: 767px)": {
    minHeight: "520px",

    gap: "32px",

    padding: "40px 20px",

    "& .empty-image-container": {
      width: "140px",
      height: "140px",
    },

    "& .empty-text-container": {
      gap: "12px",

      "& strong": {
        fontSize: "22px",
      },

      "& p": {
        fontSize: "16px",
        lineHeight: 1.6,
      },
    },

    "& > button": {
      
      width: "260px",
      height: "52px",

      fontSize: "16px",
    },
  },
});

export const Page = styled.div({
  maxWidth: 1300,

  padding: "0 50px 60px",
  color: "var(--text-color)",
  width: "100%",

  [TABLET]: {
    padding: "0 30px 50px",
  },

  [MOBILE]: {
    padding: "16px 20px 40px",
  },
});

export const Header = styled.header({
  

  marginBottom: 28,

  [TABLET]: {
    marginBottom: 24,
  },

  [MOBILE]: {
    marginBottom: 20,
  },
});

export const Title = styled.h1({
  fontSize: 44,
  fontWeight: 700,

  [TABLET]: {
    fontSize: "36px",
  },

  [MOBILE]: {
    fontSize: 28,
  },
});

export const Subtitle = styled.p({
  margin: "6px 0 0",

  fontSize: 22,
  color: "#6E6860",

  [TABLET]: {
    fontSize: "20px",
  },

  [MOBILE]: {
    marginTop: 4,
    fontSize: "18px",
  },
});

export const SearchBar = styled.div({
  display: "flex",
  gap: 12,
  marginBottom: 24,

  [TABLET]: {
    gap: 10,
    marginBottom: 20,
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

export const TabList = styled.div({
  display: "flex",
  flexWrap: "wrap",
  gap: 12,
  marginBottom: 56,

  [TABLET]: {
    gap: 10,
    marginBottom: 44,
  },

  [MOBILE]: {
    gap: 8,
    marginBottom: 32,
  },
});

export const TabButton = styled.button(({ isActive }) => ({
  padding: "8px 14px",
  border: isActive ? "1px solid var(--border)" : "1px solid #ddd",
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

export const OrderList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 20,

  [TABLET]: {
    gap: "16px",
  },

  [MOBILE]: {
    gap: 12,
  },
});

export const OrderCard = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 20,
  padding: "18px 22px",

  border: "1px solid var(--text-primary)",
  borderRadius: "var(--radius-md)",
  background: "#fffdf9",

    "@media (max-width: 1300px)": {
    display: "grid",
    gridTemplateColumns: "70px minmax(0, 1fr)",
    gridTemplateRows: "auto auto",

    columnGap: 18,
    rowGap: 10,

    padding: "16px 22px",

    alignItems: "center",
  },

  [TABLET]: {
    display: "grid",

    gridTemplateColumns: "64px minmax(0, 1fr)",
    gap: "12px 16px",
    padding: "16px 20px",

    alignItems: "center",
  },

  [MOBILE]: {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  gap: 10,
  padding: 10,
  },
});

export const OrderButtonGroup = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 20,
  flexShrink: 0,

  "@media (max-width: 1300px)": {
  gridColumn: "2",
  gridRow: "2",

  display: "flex",
  alignItems: "center",

  gap: 12,
  width: "100%",

  alignSelf: "auto",
  transform: "none",

    "& > button": {
    flex: 1,
  },
},

  [TABLET]: {
    gridColumn: "2 / -1",
    gridRow: "2",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "8px 10px",

    width: "100%",
   
    alignSelf: "auto",
    transform: "none",
  },

  [MOBILE]: {
    gridColumn: "auto",
    gridRow: "auto",

    display: "flex",
    width: "auto",

    alignItems: "center",
    justifyContent: "center",

    gap: 0,

    alignSelf: "center",
    flexShrink: 0,
  },
});

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
    width: 64,
    height: 64,

    gridColumn: "1",
    gridRow: "1",
  },

  [MOBILE]: {
    width: 60,
    height: 60,
    flexShrink: 0,
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

export const OrderInfo = styled.div({
  flex: 1,
  minWidth: 0,

  display: "flex",
  flexDirection: "column",
  gap: 8,

  [TABLET]: {
    minWidth: 0,
    gridColumn: "2",
    gridRow: "1",
  },

  [MOBILE]: {
    flex: 1,
    minWidth: 0,
  },
});

export const OrderHeader = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 12,

  [TABLET]: {
    gap: 9,
  },

  [MOBILE]: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gridTemplateAreas: `
      "label badge"
      "id id"
    `,

    width: "100%",
    columnGap: 6,
    rowGap: 4,
    alignItems: "center",
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
    fontSize: 13,



    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
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
    fontSize: 12,

    width: "100%",
    minWidth: 0,

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
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
      flexShrink: 0,
      whiteSpace: "nowrap",

      fontSize: 10,
      padding: "3px 6px",

      justifySelf: "end",
    },
  };
});

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
    whiteSpace: "nowrap",
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

export const OrderSummaryRow = styled.div({
  display: "flex",
  alignItems: "baseline",
  gap: 6,

  [TABLET]: {
    gap: 5,
  },

  [MOBILE]: {
    alignItems: "center",
    gap: 6,
    flexWrap: "nowrap",
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
    whiteSpace: "nowrap",
    flexShrink: 0,
  },
});

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

  "@media (max-width: 1300px)": {
  flex: 1,
  width: "auto",
  minWidth: 0,
},

  [TABLET]: {
    width: "100%",
    height: 42,
    padding: "0 12px",
    fontSize: 13,
  },

  [MOBILE]: {
    width: "auto",
    height: "auto",

    padding: 4,

    border: "none",
    background: "none",

"&:not(:first-of-type)": {
    display: "none",
  },

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

  whiteSpace: "nowrap",

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

    whiteSpace: "nowrap",

    "& svg": {
      width: 14,
      height: 14,
      flexShrink: 0,
    },
  },
});
