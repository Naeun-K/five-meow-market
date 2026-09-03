export const headerStyle = {
  /* 전체 헤더 */

  header: {
    width: "100%",
    height: "115px",
  },

  /* ================= PC ================= */

  pcHeader: {
    width: "964px",
    height: "115px",

    margin: "0 auto",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    gap: "45px",
  },

  /* 로고 영역 */

  logoArea: {
    width: "287px",
    height: "115px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,
  },

  logo: {
    height: "94.82px",
    maxWidth: "100%",

    objectFit: "contain",
    display: "block",
  },

  /* 햄버거 + 메뉴 + 아이콘 */

  menuArea: {
    width: "677px",
    height: "25.96px",

    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: "40px",

    flexGrow: 1,
  },

  /* 햄버거 */

  menuButton: {
    width: "31.8px",
    height: "19.88px",

    padding: 0,
    margin: 0,

    border: "none",
    background: "transparent",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",
    flexShrink: 0,
  },

  /* 메뉴 */

  nav: {
    width: "379px",
    height: "24px",

    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",

    gap: "20px",

    flexShrink: 0,
  },

  navItem: {
    fontFamily: "Inter, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    lineHeight: "24px",

    color: "#000000",

    textDecoration: "none",
    whiteSpace: "nowrap",
  },

  /* 오른쪽 아이콘 3개 */

  icons: {
    width: "112.99px",
    height: "25.96px",

    display: "flex",
    flexDirection: "row",

    justifyContent: "center",
    alignItems: "center",

    gap: "20px",

    flexShrink: 0,
  },

  iconButton: {
    padding: 0,
    margin: 0,

    border: "none",
    background: "transparent",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    cursor: "pointer",

    lineHeight: 0,
    flexShrink: 0,
  },

  /* ================= 모바일 ================= */

  mobileHeader: {
    width: "100%",
    height: "115px",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  mobileLogo: {
    height: "70px",
    maxWidth: "80%",

    objectFit: "contain",
    display: "block",
  },
};
