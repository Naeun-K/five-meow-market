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
  left: "50%",

  width: "calc(100% - 80px)",
  maxWidth: "1300px",

  transform: isOpen ? "translate(-50%, 0)" : "translate(-50%, -12px)",

  zIndex: 60,

  opacity: isOpen ? 1 : 0,
  visibility: isOpen ? "visible" : "hidden",

  transition: "opacity .25s ease, transform .25s ease, visibility .25s",

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "calc(100% - 0px)",
    maxWidth: "none",

    left: "50%",
    right: "auto",

    transform: isOpen
      ? "translateX(-50%) translateY(0)"
      : "translateX(-50%) translateY(-12px)",
  },

  "@media (max-width: 767px)": {
    position: "fixed",

    top: 80,
    left: 0,
    right: 0,

    width: "100vw",
    maxWidth: "none",

    transform: isOpen ? "translateY(0)" : "translateY(-12px)",
  },
}));

export const MegaMenuCard = styled.div({
  position: "relative",
  width: "100%",

  background: "#fff",
  border: "1px solid #d4b59a",
  borderRadius: 0,

  borderRadius: 28,
  boxShadow: "0 30px 50px -25px rgba(28,26,23,0.35)",

  padding: "60px 48px",
  paddingBottom: "90px",
  boxSizing: "border-box",

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
  width: "fit-content",
  maxWidth: "100%",
  margin: "0 auto",

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",

  boxSizing: "border-box",

  gap: "40px",

  "@media (min-width: 768px) and (max-width: 1023px)": {
    padding: "0 8px",
    boxSizing: "border-box",

    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",

    flexWrap: "nowrap",
    gap: "10px",
  },

  "@media (max-width: 767px)": {
    flexWrap: "wrap",
  },
});

export const LeftGroup = styled.div({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  flex: "0 0 auto",

  gap: "55px",

  "@media (min-width: 768px) and (max-width: 1023px)": {
    flex: "1 1 0",
    minWidth: 0,

    display: "flex",
    flexWrap: "wrap", // 🔴 전체상품을 다음 줄로 보낼 수 있게
    justifyContent: "flex-start",
    alignItems: "flex-start",

    columnGap: 50,
    rowGap: 18,
  },

  "@media (max-width: 767px)": {
    flexDirection: "column",
  },
});

export const Divider = styled.div({
  width: 1,
  background: colors.line,
  alignSelf: "stretch",

  "@media (min-width: 768px) and (max-width: 1023px)": {
    marginRight: "25px",
  },

  "@media (max-width: 767px)": {
    display: "none",
  },
});

export const MegaCol = styled.div(({ hideOnTablet, $title }) => ({
  minWidth: 96,
  tabletOffset: "none",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",

  h3: {
    fontSize: 20,
    margin: "0 0 16px",
    fontWeight: 700,
    color: colors.ink,
    whiteSpace: "nowrap",

    display: "flex",
    alignItems: "center",
    gap: "6px",

    ".mega-paw": {
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      svg: {
        width: "100%",
        height: "100%",
      },
    },
  },
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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

  // 🔴 태블릿 기본
  "@media (min-width: 768px) and (max-width: 1023px)": {
    display: hideOnTablet ? "none" : "block",
    minWidth: 96,

    h3: {
      fontSize: 18,
    },

    button: {
      fontSize: 17,
    },

    // 첫 줄
    ...($title === "집사 PICK💗" && {
      order: 1,
      flex: "0 0 auto",
    }),

    ...($title === "카테고리" && {
      order: 2,
      flex: "0 0 auto",
    }),

    ...($title === "COMMUNITY" && {
      order: 3,
      flex: "0 0 auto",
    }),

    // 작은 태블릿에서는 아래로
    ...($title === "전체상품" && {
      order: 4,
      flex: "0 0 auto",
      marginTop: "-80px",
    }),
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

    width: "100%",
    margin: 0,
    boxSizing: "border-box",

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

  "& .mobile-title": {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },

  "& .mobile-paw": {
    width: "25px",
    height: "25px",
    display: "flex",
  },

  svg: {
    width: "100%",
    height: "100%",
  },
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
