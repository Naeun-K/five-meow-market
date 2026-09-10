import styled from "@emotion/styled";

/* ---------- 색상 토큰 ---------- */
export const colors = {
  ink: "#1c1a17",
  paper: "#ffffff",
  line: "#eee3d3",
  accent: "#e2a6a1",
  muted: "#9a8f83",
};

/* =======================================================
   모달 전체를 감싸는 루트
   ======================================================= */
export const ModalRoot = styled.div({});

/* =======================================================
   둥근 테두리 카드형 메가메뉴 박스
   ======================================================= */

export const MegaMenuWrapper = styled.div(({ isOpen }) => ({
  position: "absolute",
  top: 160,
  left: 40,
  right: 40,
  zIndex: 60,

  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? "visible" : "hidden",
  transform: isOpen ? "translateY(0)" : "translateY(-12px)",
  transition: "opacity .25s ease, transform .25s ease, visibility .25s",

  "@media (max-width: 767px)": {
    top: 80,
  },
}));

export const MegaMenuCard = styled.div({
  position: "relative",
  background: "#fff",
  border: `1px solid ${colors.ink}`,
  borderRadius: 28,
  boxShadow: "0 30px 50px -25px rgba(28,26,23,0.35)",
  padding: "40px 48px",

  "@media (max-width: 930px)": {
    padding: "28px 24px",
  },

  "@media (max-width: 767px)": {
    display: "none",
  },
});

export const CloseButton = styled.div({
  position: "absolute",

  top: 25,
  right: 32,
  width: 28,
  height: 28,
  border: "none",
  background: "none",
  cursor: "pointer",
  fontSize: 22,
  lineHeight: 600,
  color: colors.ink,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 70,

  "@media (min-width:768px) and (max-width:1023px)": {
    top: 15,
    right: 15,
  },
});

export const MegaInner = styled.div({
  maxwidth: 1024,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: 32,

  "@media (max-width: 1023px)": {
    flexwrap: "wrap",
    gap: 24,
  },

  "@media (max-width: 767px)": {
    flexWrap: "wrap",
  },
});

export const LeftGroup = styled.div({
  flex: "1 1 auto",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",

  gap: 28,

  "@media (max-width: 1023px)": {
    gridTemplateColumns: "repeat(3, 1fr)",

    gridTemplateAreas: `
    "pick category community"
    "all  category community"
  `,
    gap: 10,
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

export const Divider = styled.div({
  width: 1,
  background: colors.line,
  alignSelf: "stretch",

  "@media (max-width: 767px)": {
    display: "none",
  },
});

export const MegaCol = styled.div(({ hideOnTablet, $title }) => ({
  minWidth: 96,
  tabletOffset: "none",

  h3: {
    fontSize: 20,
    margin: "0 0 16px",
    fontWeight: 700,
    color: colors.ink,
    whiteSpace: "nowrap",
  },
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  button: {
    fontSize: 18,
    color: colors.muted,
    textDecoration: "none",
    whiteSpace: "nowrap",
    "&:hover": {
      color: colors.ink,
    },
  },

  "@media (max-width: 1023px)": {
    display: hideOnTablet ? "none" : undefined,

    minWidth: 0,

    ...($title === "집사 PICK💗" && {
      gridArea: "pick",
    }),

    ...($title === "카테고리" && {
      gridArea: "category",
    }),

    ...($title === "전체상품" && {
      gridArea: "all",
    }),

    ...($title === "COMMUNITY" && {
      gridArea: "community",
    }),
    h3: {
      fontSize: 18,
    },

    button: {
      fontSize: 17,
    },
  },
}));

export const ExtraHeading = styled.h3({
  marginTop: 40,
  fontSize: 14,
  fontWeight: 700,
  color: colors.ink,
  cursor: "pointer",
});

export const CommunityLists = styled.div({
  display: "flex",
  gap: 32,
});

export const MyShopGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: 10,
  width: 180,

  "@media (max-width: 1023px)": {
    display: "grid",
    gridTemplateColumns: "repeat(1, 1fr)",
  },
});

/* =======================================================
   모바일 전용 리스트형 카드
   ======================================================= */

export const MobileCard = styled.div({
  display: "none",

  "@media (max-width: 767px)": {
    display: "block",
    position: "relative",
    background: colors.paper,
    border: `1px solid ${colors.line}`,
    borderRadius: 16,
    padding: "20px 20px 28px",
    boxShadow: "0 20px 40px -25px rgba(28,26,23,0.25)",
  },
});

export const MobileAuthRow = styled.div({
  display: "flex",
  gap: 10,
  padding: "16px 0 20px",

  button: {
    flex: 1,
  },
});

export const MobileAccordionSection = styled.div({
  borderBottom: `1px solid ${colors.line}`,
});

export const MobileAccordionHeader = styled.button({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 2px",
  background: "none",
  border: "none",
  fontSize: 16,
  fontWeight: 700,
  color: colors.ink,
  cursor: "pointer",
  textAlign: "left",
});

export const MobilePlainLink = styled.button({
  display: "flex",
  alignItems: "center",
  gap: 10,
  padding: "16px 2px",
  fontSize: 16,
  fontWeight: 700,
  color: colors.ink,
  textDecoration: "none",
});

export const MobileChevron = styled.span(({ isOpen }) => ({
  display: "inline-block",
  transition: "transform .2s ease",
  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  fontSize: 16,
  color: colors.muted,
}));

export const MobileSubNavList = styled.ul({
  listStyle: "none",
  margin: 0,
  padding: "0 2px 16px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
});

export const MobileSubNavLink = styled.button({
  fontSize: 14,
  color: colors.muted,
  textDecoration: "none",
});

export const MobileMyShopHeading = styled.h3({
  fontSize: 16,
  fontWeight: 700,
  color: colors.ink,
  margin: "20px 2px 12px",
});

export const MobileCloseButton = styled.button({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 44,
  height: 44,
  margin: "24px auto 4px",
  border: `1px solid ${colors.line}`,
  borderRadius: "50%",
  background: "#fff",
  fontSize: 18,
  color: colors.ink,
  cursor: "pointer",
});

export const MyShopButton = styled.button({
  padding: "8px 10px",
  fontSize: 17,
  fontWeight: 600,
  border: `1px solid ${colors.line}`,
  borderRadius: 12,
  background: "#fff",
  color: colors.ink,
  cursor: "pointer",
  whiteSpace: "nowrap",
  transition: "background .2s ease, color .2s ease, border-color .2s ease",

  "&:hover": {
    background: colors.accent,
    color: "#fff",
    borderColor: colors.accent,
  },
  "@media (max-width:1023px)": {
    fontSize: 15,
  },
});

/* 바깥 클릭용 백드롭 */
export const Backdrop = styled.div(({ isOpen }) => ({
  position: "fixed",
  inset: 0,
  background: "rgba(28,26,23,0.15)",
  opacity: isOpen ? 1 : 0,
  pointerEvents: isOpen ? "auto" : "none",
  transition: "opacity .25s ease",
  zIndex: 40,
}));
