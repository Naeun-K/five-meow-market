import { css } from "@emotion/react";

export const container = css({
  width: "calc(100% - 60px)",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "30px 0 60px",

  "@media (max-width: 1023px)": {
    width: "calc(100% - 40px)",
    padding: "24px 0 50px",
  },

  "@media (max-width: 767px)": {
    width: "calc(100% - 32px)",
    padding: "20px 0 40px",
  },
});

export const breadcrumb = css({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "28px",
  fontSize: "13px",
  color: "#888",

  strong: {
    color: "#543B2A",
    fontWeight: 600,
  },

  "@media (max-width: 767px)": {
    marginBottom: "18px",
    fontSize: "14px",
    gap: "5px",
  },
});

export const titleArea = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",

  h1: {
    margin: 0,
    fontSize: "30px",
    fontWeight: 600,
    color: "#222",
  },

  p: {
    margin: "8px 0 0",
    fontSize: "15px",
    color: "#777",
  },

  "@media (max-width: 1023px)": {
    h1: {
      fontSize: "26px",
    },

    p: {
      fontSize: "14px",
    },
  },

  "@media (max-width: 767px)": {
    marginBottom: "20px",

    h1: {
      fontSize: "22px",
    },

    p: {
      marginTop: "6px",
      fontSize: "14px",
    },
  },
});

export const filter = css({
  display: "flex",
  gap: "14px",
  paddingBottom: "20px",

  button: {
    minWidth: "120px",
    height: "42px",
    padding: "0 24px",
    border: "1px solid #E4DDD7",
    borderRadius: "22px",
    backgroundColor: "#fff",
    color: "#543B2A",
    cursor: "pointer",

    span: {
      marginLeft: "6px",
    },

    "&.active": {
      borderColor: "#9A7454",
      backgroundColor: "#9A7454",
      color: "#fff",
    },

    "&:not(.active):hover": {
      backgroundColor: "#F7F1E8",
    },
  },

  "@media (max-width: 1023px)": {
    gap: "10px",

    button: {
      minWidth: "105px",
      height: "38px",
      padding: "0 18px",
      fontSize: "14px",
    },
  },
  "@media (max-width: 767px)": {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "8px",
    paddingBottom: 0,
    overflow: "visible",

    button: {
      width: "100%",
      minWidth: 0,
      height: "36px",
      padding: "0 8px",
      fontSize: "14px",
      whiteSpace: "nowrap",
    },
  },
});

export const filterArea = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@media (max-width: 767px)": {
    flexDirection: "column",
    alignItems: "stretch",
    gap: "12px",
    paddingBottom: "12px",
  },
});

export const sort = css({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "8px",
  padding: "12px 0",

  button: {
    padding: 0,
    border: 0,
    background: "none",
    color: "#999",
    fontSize: "16px",
    cursor: "pointer",

    "&.active": {
      color: "#543B2A",
      fontWeight: 600,
    },

    "&:hover": {
      color: "#543B2A",
    },
  },

  span: {
    color: "#D8D0C9",
    fontSize: "13px",
  },

  "@media (max-width: 767px)": {
    gap: "6px",
    padding: "10px 0",

    button: {
      fontSize: "14px",
    },
  },
});

export const table = css({
  width: "100%",

  ".table-header, .table-row": {
    display: "grid",
    gridTemplateColumns: "70px 230px minmax(240px, 1fr) 130px 110px 60px",
    alignItems: "center",
  },

  ".table-header": {
    minHeight: "52px",
    borderBottom: "1px solid #E8E3DD",
    fontSize: "15px",
    fontWeight: 600,
    textAlign: "center",
  },

  ".table-row": {
    minHeight: "88px",
    borderBottom: "1px solid #E8E3DD",
    fontSize: "15px",
  },

  ".number, .date, .views": {
    textAlign: "center",
    color: "#666",
  },

  ".product": {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    minWidth: 0,

    img: {
      width: "58px",
      height: "58px",
      flexShrink: 0,
      borderRadius: "6px",
      objectFit: "cover",
      backgroundColor: "#F7F1E6",
    },

    div: {
      minWidth: 0,
    },

    strong: {
      display: "block",
      overflow: "hidden",
      fontSize: "14px",
      fontWeight: 600,
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },

    p: {
      margin: "5px 0 0",
      overflow: "hidden",
      color: "#888",
      fontSize: "13px",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },

  ".inquiry-title": {
    display: "flex",
    alignItems: "center",
    gap: "8px",

    minWidth: 0,
    padding: "0 15px",
    overflow: "hidden",
    border: 0,
    background: "none",
    color: "#555",
    fontSize: "14px",
    textAlign: "left",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    cursor: "pointer",

    ".lock-icon": {
      width: "14px",
      height: "14px",
      flexShrink: 0,
      color: "#6B615E",
    },

    ".title-text": {
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },

    "&:hover": {
      color: "#9A6E4F",
      textDecoration: "underline",
    },
  },

  ".status": {
    justifySelf: "center",
    padding: "7px 14px",
    borderRadius: "20px",
    fontSize: "12px",
    whiteSpace: "nowrap",

    "&.complete": {
      backgroundColor: "#E5EDDD",
      color: "#657558",
    },

    "&.waiting": {
      backgroundColor: "#F8E9DB",
      color: "#8C684D",
    },

    ".empty": {
      padding: "80px 0",
      borderBottom: "1px solid #E8E3DD",
      color: "#999",
      fontSize: "14px",
      textAlign: "center",
    },
  },

  /* 태블릿 */
  "@media (max-width: 1023px)": {
    ".table-header, .table-row": {
      gridTemplateColumns: "55px 180px minmax(180px, 1fr) 110px 95px 45px",
    },

    ".table-header": {
      fontSize: "15px",
    },

    ".table-row": {
      minHeight: "82px",
      fontSize: "15px",
    },

    ".product": {
      gap: "10px",

      img: {
        width: "50px",
        height: "50px",
      },

      strong: {
        fontSize: "15px",
      },

      p: {
        fontSize: "15px",
      },
    },

    ".inquiry-title": {
      padding: "0 10px",
      fontSize: "15px",
    },

    ".status": {
      padding: "6px 10px",
      fontSize: "15px",
    },
  },

  /* 모바일 */
  "@media (max-width: 767px)": {
    ".table-header": {
      display: "none",
    },

    ".table-row": {
      position: "relative",
      display: "grid",
      gridTemplateColumns: "56px minmax(0, 1fr) auto",
      gridTemplateAreas: `
        "image product status"
        "image title status"
        "image meta meta"
      `,
      columnGap: "12px",
      rowGap: "5px",
      minHeight: "auto",
      padding: "16px 0",
      fontSize: "12px",
    },

    ".number": {
      display: "none",
    },

    ".product": {
      display: "contents",

      img: {
        gridArea: "image",
        width: "56px",
        height: "56px",
      },

      div: {
        gridArea: "product",
        minWidth: 0,
      },

      strong: {
        fontSize: "15px",
      },

      p: {
        marginTop: "3px",
        fontSize: "15px",
      },
    },

    ".inquiry-title": {
      gridArea: "title",
      padding: 0,
      fontSize: "15px",
      fontWeight: 500,
      overflow: "hidden",
    },
    ".title-text": {
      minWidth: 0,
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },

    ".date": {
      gridArea: "meta",
      textAlign: "left",
      fontSize: "15px",
      color: "#999",

      "&::before": {
        content: '"작성일 "',
        marginRight: "4px",
      },
    },

    ".status": {
      gridArea: "status",
      alignSelf: "start",
      justifySelf: "end",
      padding: "5px 9px",
      fontSize: "14px",
    },

    ".views": {
      display: "none",
    },
  },
});
