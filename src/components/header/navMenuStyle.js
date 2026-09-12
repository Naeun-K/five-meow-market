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

  borderRadius: 28,
  boxShadow: "0 30px 50px -25px rgba(28,26,23,0.35)",

  padding: "60px 48px",
  paddingBottom: "90px",
  // boxSizing: "border-box",

  "@media (max-width: 930px)": {
    padding: "60px 24px",
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

  // boxSizing: "border-box",

  gap: "40px",

  "@media (min-width: 768px) and (max-width: 1023px)": {
    padding: "0 8px",
    // boxSizing: "border-box",

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
    flexWrap: "wrap",
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

/* 메뉴 카테고리 */

export const MegaCol = styled.div(({ hideOnTablet, $title }) => ({
  minWidth: 96,

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

  "@media (min-width: 768px) and (max-width: 1023px)": {
    display: hideOnTablet ? "none" : "flex",
    minWidth: 96,

    h3: {
      fontSize: 18,
    },

    button: {
      fontSize: 17,
    },

    ...($title === "집사 PICK" && {
      order: 1,
      // flex: "0 0 auto",
      flex: "0 0 96px",
    }),

    ...($title === "카테고리" && {
      order: 2,
      // flex: "0 0 auto",
      flex: "0 0 96px",
    }),

    ...($title === "COMMUNITY" && {
      order: 3,
      flex: "0 0 96px",
      // flex: "0 0 auto",
    }),

    ...($title === "전체상품" && {
      order: 4,

      // 강제로 다음 줄로 보내기
      marginRight: "calc(100% - 96px)",

      flex: "0 0 96px",
      // flex: "0 0 auto",
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
  ".myshop-guest": {
    width: "100%",
    gridColumn: "1 / -1",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 8,
  },

  ".myshop-guest-image": {
    width: 100,
    height: "auto",
    objectFit: "contain",
    display: "block",
  },

  ".myshop-guest-title": {
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 1.4,
    color: colors.ink,
  },

  ".myshop-guest-text": {
    fontSize: 12,
    color: colors.muted,
    whiteSpace: "nowrap",
  },

  ".myshop-guest-buttons": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 4,

    button: {
      width: "100%",
    },
  },

  ".myshop-user": {
    width: "100%",
    gridColumn: "1 / -1",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },

  ".myshop-profile": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    marginBottom: 4,
  },

  ".myshop-profile-image": {
    width: 68,
    height: "auto",
    objectFit: "contain",
    display: "block",
  },
  ".myshop-image-circle": {
    width: 82,
    height: 82,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#F7EFE5",
    borderRadius: "50%",

    overflow: "visible",
  },

  ".myshop-nickname": {
    fontSize: 15,
    fontWeight: 600,
    color: colors.ink,
    whiteSpace: "nowrap",
  },

  ".myshop-points": {
    padding: "4px 12px",
    borderRadius: 20,
    backgroundColor: "#F7EFE5",

    fontSize: 13,
    fontWeight: 600,
    color: "#9A765B",
    whiteSpace: "nowrap",
  },

  ".logout-button": {
    width: "100%",
  },

  ".myshop-menu-buttons": {
    width: "100%",

    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 8,

    button: {
      minWidth: 0,
      padding: "8px 6px",

      "&:hover": {
        backgroundColor: "#F2DFC6",
        borderColor: "#D8BFA8",
        color: colors.ink,
      },
    },
  },
  "@media (max-width: 1023px)": {
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
    // boxSizing: "border-box",

    background: colors.paper,
    border: `1px solid ${colors.line}`,
    borderRadius: 16,
    padding: "20px 20px 28px",
    boxShadow: "0 20px 40px -25px rgba(28,26,23,0.25)",
  },

  "& .flex-wrapper": {
    display: "flex",
    flexDirection: "column",
  },
  ".mobile-user-area": {
    paddingTop: 20,
  },

  ".mobile-user-profile": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    marginBottom: 16,
  },

  ".mobile-user-image": {
    width: 76,
    height: 76,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7EFE5",
    borderRadius: "50%",

    img: {
      width: 62,
      height: "auto",
      display: "block",
    },
  },

  ".mobile-user-points": {
    padding: "5px 14px",
    backgroundColor: "#F7EFE5",
    borderRadius: 20,

    fontSize: 13,
    color: "#9A765B",
    whiteSpace: "nowrap",
  },

  ".mobile-user-menu": {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    "& .button-wrapper": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "10px",

      width: "100%",

      order: 1,
    },
    button: {
      width: "100%",
    },
  },

  ".mobile-guest-area": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    paddingTop: 20,

    textAlign: "center",
  },

  ".mobile-guest-image": {
    width: 90,
    height: "auto",
    display: "block",
  },

  ".mobile-guest-title": {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1.4,
  },

  ".mobile-guest-text": {
    fontSize: 12,
    color: colors.muted,
  },

  ".mobile-guest-buttons": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginTop: 8,

    button: {
      width: "100%",
    },
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

/* 공통 버튼 */

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
