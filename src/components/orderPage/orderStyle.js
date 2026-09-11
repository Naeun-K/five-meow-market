import styled from "@emotion/styled"

const TABLET= "@media (max-width: 1023px)";
const MOBILE= "@media (max-width: 767px)";

export const Page = styled.div({
  maxWidth: 720,
  margin: "0 auto",
  padding: "24px 20px 60px",
  fontFamily: "-apple-system, 'Pretendard', sans-serif",
  color: "var(--text-color)",

  [MOBILE]: {
    maxWidth: 480,
    padding: "16px 16px 40px",
  }
});

export const Breadcrumb = styled.a({
  display: "inline-block",
  fontSize: 13,
  color: "#6E6860",
  textDecoration: "none",
  marginBottom: 16,

  [MOBILE]: { marginBottom: 12},
});

export const Header = styled.header({
  marginBottom: 24,
  [MOBILE]: { marginBottom: 16},
});

export const Title = styled.h1({
  fontSize: 24,
  fontWeight: 700,
  [MOBILE]: { fontSize: 20},
});

export const Subtitle = styled.p({
  fontSize: 14,
  color: "#6E6860",
  margin: "6px 0 0",
  minHeight: 18,
  [MOBILE]: { fontSize: 13, margin: "4px 0 0"},
});

export const SummaryBar = styled.section({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 16,
  padding: "16px 20px",
  border: "1px solid #eee",
  borderRadius: "var(--radius-md)",
  marginBottom: 32,
  background: "#fffdf9",

  [MOBILE]: {
    flexDirection: "column",
    gap: 10,
    padding: "14px 16px",
    marginBottom: 24,
  },
});

export const InfoRow = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  minWidth: 90,

  [MOBILE]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    minWidth: 0,
  },
});

export const InfoLabel = styled.span({
  fontSize: 14,
  color: "#66615e",

  [MOBILE]: { fontSize: 13},
});

export const InfoValue = styled.p({
  fontSize: 14,
  margin: 0,
  minHeight: 18,

  [MOBILE]: {
    fontSize: 13, 
    textAlign: "right"
  },
});

export const InfoValueSub = styled.p({
  fontSize: 13,
  color: "#777",
  margin: 0,
  minHeight: 16,
});

export const InfoValueStrong = styled.p({
  fontSize: 15,
  lineHeight: 1.4,
  fontWeight: 700,
  color:" #D97757",
  margin: 0,
  textAlign: "right",

  [MOBILE]: {
    fontSize: 14
  },
});

export const Section = styled.section({
  marginBottom: 32,

  [MOBILE]: {
    marginBottom: 20
  },
});

export const SectionTitle = styled.h2({
  fontSize: 16,
  fontWeight: 700,
  margin: "0 0 16px",
  paddingBottom: 12,
  borderBottom: "2px solid #222",

  [MOBILE]: {
    fontSize: 15, 
    margin: "0 0 12px"
  },
});

export const ProductList = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: 20,
  [MOBILE]: {
    gap: 12
  },
});

export const ProductItemWrap = styled.div({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start",
  gap: 14,
  padding: "20px 16px",
  borderBottom: "1px solid #f0f0f0",
  background:" #fffdf9",

  [MOBILE]: {
    border: "1px solid #eee",
    borderRadius: "var(--radius-md)",
    borderBottom: "1px solid #eee",
    padding: "12px 14px",
  },
});

export const Thumb = styled.div({
  width: 64,
  height: 64,
  borderRadius: 8,
  background: "#f2f2f2",
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [MOBILE]: {
    width: 48, height: 48
  },
});

export const ThumbText = styled.p({
  fontSize: 11,
  color: "#bbb",
  margin: 0,

  [MOBILE]: {
    fontSize: 10
  },
});

export const ProductBody = styled.div({
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: 4,
});

export const ProductName = styled.p({
  fontSize: 14,
  fontWeight: 600,
  margin: 0,
  minHeight: 18,

  [MOBILE]: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export const ProductOption = styled.p({
  fontSize: 13,
  color: "#888",
  margin: 0,
  minHeight: 16,

  [MOBILE]: {
    fontSize: 12
  },
});

export const PriceRow = styled.div({
  display: "flex",
  gap: 8,
  alignItems: "baseline",
  marginTop: 4,
});

export const ProductPrice = styled.p({
  fontSize: 14,
  fontWeight: 700,
  margin: 0,
  minHeight: 18,
});

export const ProductQty = styled.p({
  fontSize: 13,
  color: "#999",
  margin: 0,
  minHeight: 16,
  [MOBILE]: {
    fontSize: 12
  },
});

export const ProductActions = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "space-between",
  gap: 8,

  [MOBILE]: {
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    gap: 8,
    marginTop: 4,
  },
});

export const StatusBadgeSmall = styled.span({
  fontSize: 12,
  color: "#2563eb",
  minHeight: 14,
  display: "inline-block",

  [MOBILE]: {
    alignSelf: "flex-end"
  },
});

export const ActionButtons = styled.div({
  display: "flex",
  gap: 6,

  [MOBILE]: {
    width: "100%",
    borderTop: "1px solid #f0f0f0",
    paddingTop: 8,
  },
});

export const GhostButton = styled.button({
  fontSize: 13,
  fontWeight: 600,
  color:" #6E6860",
  padding: "6px 10px",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-md)",
  background: "#fff",
  cursor: "pointer",

  "&:hover": {
    background: "#f7f7f7",
  },

  [MOBILE]: {
    flex: 1,
    border: "none",
    borderLeft: "1px solid #f0f0f0",
    borderRadius: 0,
    padding: "8px 0",
    "&:first-of-type": { borderLeft: "none"},
  },
});

export const StatusBadge = styled.span({
  display: "inline-block",
  fontSize: 13,
  fontWeight: 600,
  color: "#2563eb",
  minHeight: 18,

    [MOBILE]: {
    fontSize: 13,
    background: "#fffdf9",
    padding: "2px 8px",
    borderRadius: "var(--radius-md)",
    },
});

export const BottomGrid = styled.section({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 24,

  [TABLET]: {
    gridTemplateColumns: "1fr",
    gap: 10,
  },
});

export const Panel = styled.div({
  border: "1px solid #eee",
  borderRadius: "var(--radius-md)",
  background: "#fffdf9",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  height: "100%",

  [TABLET]: {
    padding: 0,
    height: "auto"
  },
});

export const AccordionHeader = styled.button({
  all: "unset",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  fontSize: 16,
  fontWeight: 700,
  color: "var(--text-color)",
  paddingBottom: 12,
  marginBottom: 16,
  borderBottom: "2px solid #222",
  cursor: "default",

  [TABLET]: {
    padding: "14px 16px",
    margin: 0,
    border: "none",
    cursor: "pointer",
  },
});

export const ChevronIcon = styled.svg(({ isOpen }) => ({
  display: "none",

  [TABLET]: {
    display: "block",
    width: 16,
    height: 16,
    color: "#6E6860",
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
    flexShrink: 0,
  },
}));

export const PanelBody = styled.div(({ isOpen }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent:"space-between",
  gap: 10,

  [TABLET]: {
    display: isOpen ? "flex" : "none",
    padding: "0 16px 16px",
    justifyContent: "flex-start",
  },
}));

export const Divider = styled.div({
  borderTop: "1px solid #222",
  margin: "4px 0",
});

export const LinkButton = styled.button({
  marginTop: 4,
  fontSize: 12,
  padding: "5px 10px",
  border: "1px solid #ddd",
  borderRadius: 6,
  background: "#fff",
  cursor: "pointer",
  width: "fit-content",

  "&:hover": { background: "#f7f7f7" },
  [MOBILE]: { fontSize: 11, padding: "4px 8px"},
});

// 배송정보/결제정보 패널 전용 행 (라벨 좌, 값 우 정렬)
export const PanelRow = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: 12,
});

export const PanelLabel = styled.span({
  fontSize: 15,
  color: "#6E6860",
  flexShrink: 0,
  paddingTop: 2,
  lineHeight: 1.4,

  [MOBILE]: {
    fontSize: 13,
    paddingTop: 0
  },
});

export const PanelValueGroup = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: 4,
});

export const PanelValue = styled.p({
  fontSize: 15,
  lineHeight: 1.4,
  fontWeight: 600,
  color: "var(--text-color)",
  margin: 0,
  textAlign: "right",

  [MOBILE]: {
    fontSize: 13
  },
});

export const PanelValueSub = styled.p({
  fontSize: 15,
  lineHeight: 1.4,
  fontWeight: 600,
  color: "var(--text-color)",
  margin: 0,
  textAlign: "right",

  [MOBILE]: {
    fontSize: 13
  },
});

// 송장번호처럼 값 + 버튼이 같이 오른쪽에 붙는 경우
export const TrackingGroup = styled.div({
  display: "flex",
  alignItems: "center",
  gap: 8,
});
