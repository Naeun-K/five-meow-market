// import { css } from "@emotion/react";

// export const container = css({

//   width: "100%",
//   maxWidth: "1300px",

//   padding: "0 50px 60px",

//   "@media (max-width: 1023px)": {

//     padding: "0px 30px 50px",
//   },

//   "@media (max-width: 767px)": {

//     padding: "0 20px  40px",
//   },
// });

// export const breadcrumb = css({
//   display: "flex",
//   alignItems: "center",
//   gap: "8px",
//   marginBottom: "28px",
//   fontSize: "13px",
//   color: "#888",

//   strong: {
//     color: "#543B2A",
//     fontWeight: 600,
//   },

//   "@media (max-width: 767px)": {
//     marginBottom: "18px",
//     fontSize: "14px",
//     gap: "5px",
//   },
// });

// export const titleArea = css({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   marginBottom: "24px",

//   h1: {
//     margin: 0,
//     fontSize: "30px",
//     fontWeight: 600,
//     color: "#222",
//   },

//   p: {
//     margin: "8px 0 0",
//     fontSize: "15px",
//     color: "#777",
//   },

//   "@media (max-width: 1023px)": {
//     h1: {
//       fontSize: "26px",
//     },

//     p: {
//       fontSize: "14px",
//     },
//   },

//   "@media (max-width: 767px)": {
//     marginBottom: "20px",

//     h1: {
//       fontSize: "22px",
//     },

//     p: {
//       marginTop: "6px",
//       fontSize: "14px",
//     },
//   },
// });

// export const filter = css({
//   display: "flex",
//   gap: "14px",
//   paddingBottom: "20px",

//   button: {
//     minWidth: "120px",
//     height: "42px",
//     padding: "0 24px",
//     border: "1px solid #E4DDD7",
//     borderRadius: "22px",
//     backgroundColor: "#fff",
//     color: "#543B2A",
//     cursor: "pointer",

//     span: {
//       marginLeft: "6px",
//     },

//     "&.active": {
//       borderColor: "#9A7454",
//       backgroundColor: "#9A7454",
//       color: "#fff",
//     },

//     "&:not(.active):hover": {
//       backgroundColor: "#F7F1E8",
//     },
//   },

//   "@media (max-width: 1023px)": {
//     gap: "10px",

//     button: {
//       minWidth: "105px",
//       height: "38px",
//       padding: "0 18px",
//       fontSize: "14px",
//     },
//   },
//   "@media (max-width: 767px)": {
//     display: "grid",
//     gridTemplateColumns: "repeat(3, 1fr)",
//     gap: "8px",
//     paddingBottom: 0,
//     overflow: "visible",

//     button: {
//       width: "100%",
//       minWidth: 0,
//       height: "36px",
//       padding: "0 8px",
//       fontSize: "14px",
//       whiteSpace: "nowrap",
//     },
//   },
// });

// export const filterArea = css({
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",

//   "@media (max-width: 767px)": {
//     flexDirection: "column",
//     alignItems: "stretch",
//     gap: "12px",
//     paddingBottom: "12px",
//   },
// });

// export const sort = css({
//   display: "flex",
//   justifyContent: "flex-end",
//   alignItems: "center",
//   gap: "8px",
//   padding: "12px 0",

//   button: {
//     padding: 0,
//     border: 0,
//     background: "none",
//     color: "#999",
//     fontSize: "16px",
//     cursor: "pointer",

//     "&.active": {
//       color: "#543B2A",
//       fontWeight: 600,
//     },

//     "&:hover": {
//       color: "#543B2A",
//     },
//   },

//   span: {
//     color: "#D8D0C9",
//     fontSize: "13px",
//   },

//   "@media (max-width: 767px)": {
//     gap: "6px",
//     padding: "10px 0",

//     button: {
//       fontSize: "14px",
//     },
//   },
// });

// export const table = css({
//   width: "100%",

//   ".table-header, .table-row": {
//     display: "grid",
//     gridTemplateColumns: "70px 230px minmax(240px, 1fr) 130px 110px 60px",
//     alignItems: "center",
//   },

//   ".table-header": {
//     minHeight: "52px",
//     borderBottom: "1px solid #E8E3DD",
//     fontSize: "15px",
//     fontWeight: 600,
//     textAlign: "center",
//   },

//   ".table-row": {
//     minHeight: "88px",
//     borderBottom: "1px solid #E8E3DD",
//     fontSize: "15px",
//   },

//   ".number, .date, .views": {
//     textAlign: "center",
//     color: "#666",
//   },

//   ".product": {
//     display: "flex",
//     alignItems: "center",
//     gap: "20px",
//     minWidth: 0,

//     img: {
//       width: "58px",
//       height: "58px",
//       flexShrink: 0,
//       borderRadius: "6px",
//       objectFit: "cover",
//       backgroundColor: "#F7F1E6",
//     },

//     div: {
//       minWidth: 0,
//     },

//     strong: {
//       display: "block",
//       overflow: "hidden",
//       fontSize: "14px",
//       fontWeight: 600,
//       whiteSpace: "nowrap",
//       textOverflow: "ellipsis",
//     },

//     p: {
//       margin: "5px 0 0",
//       overflow: "hidden",
//       color: "#888",
//       fontSize: "13px",
//       whiteSpace: "nowrap",
//       textOverflow: "ellipsis",
//     },
//   },

//   ".inquiry-title": {
//     display: "flex",
//     alignItems: "center",
//     gap: "8px",

//     minWidth: 0,
//     padding: "0 15px",
//     overflow: "hidden",
//     border: 0,
//     background: "none",
//     color: "#555",
//     fontSize: "14px",
//     textAlign: "left",
//     whiteSpace: "nowrap",
//     textOverflow: "ellipsis",
//     cursor: "pointer",

//     ".lock-icon": {
//       width: "14px",
//       height: "14px",
//       flexShrink: 0,
//       color: "#6B615E",
//     },

//     ".title-text": {
//       overflow: "hidden",
//       whiteSpace: "nowrap",
//       textOverflow: "ellipsis",
//     },

//     "&:hover": {
//       color: "#9A6E4F",
//       textDecoration: "underline",
//     },
//   },

//   ".status": {
//     justifySelf: "center",
//     padding: "7px 14px",
//     borderRadius: "20px",
//     fontSize: "12px",
//     whiteSpace: "nowrap",

//     "&.complete": {
//       backgroundColor: "#E5EDDD",
//       color: "#657558",
//     },

//     "&.waiting": {
//       backgroundColor: "#F8E9DB",
//       color: "#8C684D",
//     },

//     ".empty": {
//       padding: "80px 0",
//       borderBottom: "1px solid #E8E3DD",
//       color: "#999",
//       fontSize: "14px",
//       textAlign: "center",
//     },
//   },

//   "@media (max-width: 1023px)": {
//     ".table-header, .table-row": {
//       gridTemplateColumns: "55px 180px minmax(180px, 1fr) 110px 95px 45px",
//     },

//     ".table-header": {
//       fontSize: "15px",
//     },

//     ".table-row": {
//       minHeight: "82px",
//       fontSize: "15px",
//     },

//     ".product": {
//       gap: "10px",

//       img: {
//         width: "50px",
//         height: "50px",
//       },

//       strong: {
//         fontSize: "15px",
//       },

//       p: {
//         fontSize: "15px",
//       },
//     },

//     ".inquiry-title": {
//       padding: "0 10px",
//       fontSize: "15px",
//     },

//     ".status": {
//       padding: "6px 10px",
//       fontSize: "15px",
//     },
//   },

//   "@media (max-width: 767px)": {
//     ".table-header": {
//       display: "none",
//     },

//     ".table-row": {
//       position: "relative",
//       display: "grid",
//       gridTemplateColumns: "56px minmax(0, 1fr) auto",
//       gridTemplateAreas: `
//         "image product status"
//         "image title status"
//         "image meta meta"
//       `,
//       columnGap: "12px",
//       rowGap: "5px",
//       minHeight: "auto",
//       padding: "16px 0",
//       fontSize: "12px",
//     },

//     ".number": {
//       display: "none",
//     },

//     ".product": {
//       display: "contents",

//       img: {
//         gridArea: "image",
//         width: "56px",
//         height: "56px",
//       },

//       div: {
//         gridArea: "product",
//         minWidth: 0,
//       },

//       strong: {
//         fontSize: "15px",
//       },

//       p: {
//         marginTop: "3px",
//         fontSize: "15px",
//       },
//     },

//     ".inquiry-title": {
//       gridArea: "title",
//       padding: 0,
//       fontSize: "15px",
//       fontWeight: 500,
//       overflow: "hidden",
//     },
//     ".title-text": {
//       minWidth: 0,
//       overflow: "hidden",
//       whiteSpace: "nowrap",
//       textOverflow: "ellipsis",
//     },

//     ".date": {
//       gridArea: "meta",
//       textAlign: "left",
//       fontSize: "15px",
//       color: "#999",

//       "&::before": {
//         content: '"작성일 "',
//         marginRight: "4px",
//       },
//     },

//     ".status": {
//       gridArea: "status",
//       alignSelf: "start",
//       justifySelf: "end",
//       padding: "5px 9px",
//       fontSize: "14px",
//     },

//     ".views": {
//       display: "none",
//     },
//   },
// });
import styled from "@emotion/styled";

const colors = {
  primary: "#6b4b32",
  primaryDark: "#4f3927",
  primaryLight: "#f8eee5",

  border: "#e8ded5",
  borderDark: "#c9b39f",

  background: "#fcfaf7",
  surface: "#ffffff",

  text: "#000000",
  subText: "#88776b",
  mutedText: "#a29489",

  waiting: "#a9682a",
  waitingBackground: "#fff3e2",

  complete: "#387a62",
  completeBackground: "#e9f6f0",
};

export const Container = styled.section({
  // width: "min(1200px, calc(100% - 80px))",
  width: "100%",
  maxWidth: "1300px",
  minHeight: "650px",

  // margin: "0 auto",
  padding: "80px 0 140px",

  color: colors.text,

  // boxSizing: "border-box",

  // "& *, & *::before, & *::after": {
  //   boxSizing: "border-box",
  // },

  "& button": {
    font: "inherit",
  },

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "calc(100% - 48px)",

    padding: "64px 0 110px",
  },

  "@media (max-width: 767px)": {
    width: "calc(100% - 32px)",
    minHeight: "500px",

    padding: "48px 0 80px",
  },

  "@media (max-width: 480px)": {
    width: "calc(100% - 24px)",

    padding: "36px 0 64px",
  },
});

export const PageLoader = styled.div({
  width: "100%",
  minHeight: "500px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "@media (max-width: 767px)": {
    minHeight: "400px",
  },
});

export const TitleArea = styled.div({
  width: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",

  marginBottom: "42px",

  "& h1": {
    margin: "0 0 12px",

    color: colors.text,

    fontSize: "36px",
    fontWeight: 700,
    lineHeight: 1.3,
    letterSpacing: "-1.2px",
  },

  "& p": {
    margin: 0,

    color: colors.subText,

    fontSize: "16px",
    fontWeight: 400,
    lineHeight: 1.6,
  },

  "@media (max-width: 767px)": {
    marginBottom: "30px",

    "& h1": {
      marginBottom: "8px",

      fontSize: "28px",
    },

    "& p": {
      fontSize: "14px",
    },
  },

  "@media (max-width: 480px)": {
    marginBottom: "24px",

    "& h1": {
      fontSize: "25px",
    },
  },
});

export const MyPageButton = styled.button({
  flexShrink: 0,
  padding: "10px 18px",

  color: colors.text,
  backgroundColor: colors.accent,

  fontSize: "14px",
  fontWeight: 600,

  border: `1px solid ${colors.border}`,
  borderRadius: "999px",
  cursor: "pointer",

  transition: "background-color 0.2s ease, color 0.2s ease",

  "&:hover": {
    color: "#FFFFFF",
    backgroundColor: colors.text,
  },
});

export const FilterArea = styled.div({
  width: "100%",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "24px",

  marginBottom: "24px",

  "@media (max-width: 767px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "18px",

    marginBottom: "20px",
  },
});

export const Filter = styled.div({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "10px",

  "& button": {
    minWidth: "90px",
    minHeight: "44px",

    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",

    padding: "10px 18px",

    border: `1px solid ${colors.border}`,
    borderRadius: "999px",

    backgroundColor: colors.surface,
    color: colors.subText,

    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1,

    cursor: "pointer",

    transition:
      "color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease",

    "& span": {
      color: "inherit",

      fontSize: "13px",
      fontWeight: 700,
    },

    "&:hover": {
      borderColor: colors.borderDark,

      color: colors.primary,

      transform: "translateY(-1px)",
    },

    "&:focus-visible": {
      outline: "3px solid rgba(107, 75, 50, 0.18)",
      outlineOffset: "2px",
    },

    "&.active": {
      borderColor: colors.primary,

      backgroundColor: colors.primary,
      color: "#ffffff",

      boxShadow: "0 4px 12px rgba(80, 52, 31, 0.14)",
    },
  },

  "@media (max-width: 767px)": {
    width: "100%",

    gap: "8px",

    "& button": {
      minWidth: 0,
      minHeight: "42px",

      padding: "10px 14px",

      fontSize: "13px",
    },
  },

  "@media (max-width: 480px)": {
    "& button": {
      flex: "1 1 0",

      width: "100%",

      padding: "9px 6px",
    },
  },
});

export const Sort = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "10px",

  flexShrink: 0,

  "& button": {
    padding: "5px 2px",

    border: 0,

    backgroundColor: "transparent",
    color: colors.mutedText,

    fontSize: "14px",
    fontWeight: 500,

    cursor: "pointer",

    transition: "color 0.2s ease",

    "&:hover": {
      color: colors.primary,
    },

    "&:focus-visible": {
      borderRadius: "3px",

      outline: "2px solid rgba(107, 75, 50, 0.3)",
      outlineOffset: "3px",
    },

    "&.active": {
      color: colors.primary,

      fontWeight: 700,
    },
  },

  "& span": {
    color: colors.borderDark,

    fontSize: "12px",
  },

  "@media (max-width: 767px)": {
    alignSelf: "flex-end",
  },
});

/*
 * 문의 내역 빈 화면
 */
export const EmptyState = styled.div({
  width: "100%",
  minHeight: "470px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",

  padding: "72px 24px 70px",

  backgroundColor: colors.background,

  color: colors.text,
  textAlign: "center",

  "@media (min-width: 768px) and (max-width: 1023px)": {
    minHeight: "440px",

    padding: "68px 24px 64px",
  },

  "@media (max-width: 767px)": {
    minHeight: "400px",

    padding: "60px 20px 54px",
  },

  "@media (max-width: 480px)": {
    minHeight: "370px",

    padding: "52px 16px 48px",
  },
});

export const EmptyImageWrapper = styled.div({
  width: "120px",
  height: "120px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  flex: "0 0 120px",

  margin: "0 0 24px",
  padding: 0,

  overflow: "hidden",

  border: 0,

  backgroundColor: "transparent",

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "110px",
    height: "110px",

    flexBasis: "110px",

    marginBottom: "22px",
  },

  "@media (max-width: 767px)": {
    width: "100px",
    height: "100px",

    flexBasis: "100px",

    marginBottom: "20px",
  },

  "@media (max-width: 480px)": {
    width: "90px",
    height: "90px",

    flexBasis: "90px",

    marginBottom: "18px",
  },
});

export const EmptyImage = styled.img({
  display: "block",

  width: "100%",
  minWidth: 0,
  maxWidth: "100%",

  height: "100%",
  minHeight: 0,
  maxHeight: "100%",

  margin: 0,
  padding: 0,

  objectFit: "contain",
  objectPosition: "center",

  border: 0,

  backgroundColor: "transparent",
});

export const EmptyTitle = styled.strong({
  display: "block",

  margin: 0,

  color: "var(--text-color, #17110d)",

  fontSize: "28px",
  fontWeight: 700,
  lineHeight: 1.3,
  letterSpacing: "-0.5px",

  textAlign: "center",

  "@media (min-width: 768px) and (max-width: 1023px)": {
    fontSize: "24px",
  },

  "@media (max-width: 767px)": {
    fontSize: "21px",
  },

  "@media (max-width: 480px)": {
    fontSize: "19px",
  },
});

export const EmptyDescription = styled.p({
  margin: "16px 0 0",

  color: "#8b817a",

  fontSize: "18px",
  fontWeight: 400,
  lineHeight: 1.5,
  letterSpacing: "-0.2px",

  textAlign: "center",

  "@media (min-width: 768px) and (max-width: 1023px)": {
    marginTop: "14px",

    fontSize: "16px",
  },

  "@media (max-width: 767px)": {
    marginTop: "12px",

    fontSize: "14px",
    lineHeight: 1.6,
  },

  "@media (max-width: 480px)": {
    fontSize: "13px",
  },
});

export const EmptyButton = styled.button({
  width: "380px",
  maxWidth: "100%",
  minHeight: "58px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  marginTop: "30px",
  padding: "14px 28px",

  border: 0,
  borderRadius: "999px",

  backgroundColor: "var(--acent-beidge, #efc9a9)",
  color: "var(--bg-button, #765136)",

  fontSize: "20px",
  fontWeight: 700,
  lineHeight: 1,

  cursor: "pointer",

  transition:
    "color 0.2s ease, background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    backgroundColor: "var(--bg-button, #4f3927)",
    color: "#ffffff",

    transform: "translateY(-2px)",

    boxShadow: "0 7px 18px rgba(79, 57, 39, 0.18)",
  },

  "&:active": {
    transform: "translateY(0)",
  },

  "&:focus-visible": {
    outline: "3px solid rgba(107, 75, 50, 0.22)",
    outlineOffset: "3px",
  },

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "330px",
    minHeight: "54px",

    marginTop: "28px",

    fontSize: "17px",
  },

  "@media (max-width: 767px)": {
    width: "300px",
    minHeight: "50px",

    marginTop: "26px",

    fontSize: "15px",
  },

  "@media (max-width: 480px)": {
    width: "260px",
    minHeight: "48px",

    marginTop: "24px",

    fontSize: "14px",
  },
});

export const TableLoader = styled.div({
  width: "100%",
  minHeight: "470px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: colors.background,

  "@media (min-width: 768px) and (max-width: 1023px)": {
    minHeight: "440px",
  },

  "@media (max-width: 767px)": {
    minHeight: "400px",
  },

  "@media (max-width: 480px)": {
    minHeight: "370px",
  },
});

export const Table = styled.div({
  width: "100%",

  overflow: "hidden",

  borderTop: `1px solid ${colors.border}`,
  borderBottom: `1px solid ${colors.border}`,

  backgroundColor: colors.surface,

  /*
   * EmptyState가 Table의 자식이면 테두리를 제거한다.
   */
  [`&:has(> ${EmptyState})`]: {
    borderTop: 0,
    borderBottom: 0,
  },

  /*
   * 문의 목록 테이블
   */
  "& .table-header, & .table-row": {
    width: "100%",

    display: "grid",
    gridTemplateColumns:
      "minmax(58px, 0.45fr) minmax(220px, 1.65fr) minmax(260px, 2.4fr) minmax(105px, 0.9fr) minmax(105px, 0.9fr) minmax(65px, 0.5fr)",
    alignItems: "center",
  },

  "& .table-header": {
    minHeight: "66px",

    padding: "0 18px",

    borderBottom: `1px solid ${colors.border}`,

    backgroundColor: colors.background,
    color: colors.primary,

    fontSize: "14px",
    fontWeight: 700,
    textAlign: "center",
  },

  "& .table-header span:nth-of-type(2), & .table-header span:nth-of-type(3)": {
    textAlign: "left",
  },

  "& .table-row": {
    position: "relative",

    minHeight: "126px",

    padding: "18px",

    borderBottom: "1px solid #eee7e1",

    transition: "background-color 0.2s ease",

    "&:last-child": {
      borderBottom: 0,
    },

    "&:hover": {
      backgroundColor: "#fdfbf9",
    },
  },

  "& .number, & .date, & .status, & .views": {
    justifySelf: "center",

    fontSize: "14px",
  },

  "& .number": {
    color: colors.subText,

    fontWeight: 500,
  },

  /*
   * 상품 문의 정보
   */
  "& .product": {
    minWidth: 0,

    display: "flex",
    alignItems: "center",
    gap: "14px",

    paddingRight: "18px",
  },

  "& .product-image": {
    width: "72px",
    height: "72px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    flex: "0 0 72px",

    overflow: "hidden",

    border: "1px solid #eee7e1",
    borderRadius: "8px",

    backgroundColor: "#f5f1ed",
    color: colors.mutedText,

    fontSize: "12px",
  },

  "& .product-image img": {
    display: "block",

    width: "100%",
    height: "100%",

    objectFit: "cover",
    objectPosition: "center",
  },

  "& .product-info": {
    minWidth: 0,

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "6px",
  },

  "& .product-info strong": {
    display: "-webkit-box",

    overflow: "hidden",

    color: colors.text,

    fontSize: "14px",
    fontWeight: 600,
    lineHeight: 1.45,
    overflowWrap: "anywhere",

    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2,
  },

  "& .product-info > span": {
    display: "inline-flex",
    alignItems: "center",

    padding: "4px 8px",

    borderRadius: "20px",

    backgroundColor: colors.primaryLight,
    color: colors.primary,

    fontSize: "11px",
    fontWeight: 700,
    lineHeight: 1.3,
  },

  /*
   * 주문 관련 및 기타 문의 정보
   */
  "& .related-order": {
    minWidth: 0,

    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "7px",

    paddingRight: "18px",
  },

  "& .related-order strong": {
    display: "inline-flex",
    alignItems: "center",

    padding: "4px 8px",

    borderRadius: "20px",

    backgroundColor: colors.primaryLight,
    color: colors.primary,

    fontSize: "11px",
    fontWeight: 700,
    lineHeight: 1.3,
  },

  "& .related-order span": {
    display: "block",

    width: "100%",

    overflow: "hidden",

    color: colors.subText,

    fontSize: "13px",
    lineHeight: 1.45,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  /*
   * 문의 제목
   */
  "& .inquiry-title": {
    minWidth: 0,
    width: "fit-content",
    maxWidth: "calc(100% - 20px)",

    display: "flex",
    alignItems: "center",
    gap: "8px",

    padding: "8px 10px",

    border: 0,
    borderRadius: "6px",

    backgroundColor: "transparent",
    color: colors.text,

    textAlign: "left",

    cursor: "pointer",

    transition: "color 0.2s ease, background-color 0.2s ease",

    "&:hover": {
      backgroundColor: colors.primaryLight,
      color: colors.primary,
    },

    "&:focus-visible": {
      outline: "2px solid rgba(107, 75, 50, 0.35)",
      outlineOffset: "2px",
    },
  },

  "& .lock-icon": {
    width: "15px",
    height: "15px",

    flexShrink: 0,

    color: colors.subText,
  },

  "& .title-text": {
    display: "block",

    minWidth: 0,

    overflow: "hidden",

    fontSize: "15px",
    fontWeight: 500,
    lineHeight: 1.5,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  "& .date": {
    color: colors.subText,

    whiteSpace: "nowrap",
  },

  /*
   * 답변 상태
   */
  "& .status": {
    minWidth: "82px",
    minHeight: "32px",

    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "7px 12px",

    borderRadius: "20px",

    fontSize: "12px",
    fontWeight: 700,
    whiteSpace: "nowrap",

    "&.complete": {
      backgroundColor: colors.completeBackground,
      color: colors.complete,
    },

    "&.waiting": {
      backgroundColor: colors.waitingBackground,
      color: colors.waiting,
    },
  },

  "& .views": {
    color: colors.subText,
  },

  /*
   * 태블릿
   */
  "@media (min-width: 768px) and (max-width: 1100px)": {
    overflowX: "auto",

    "& .table-header, & .table-row": {
      minWidth: "930px",
    },

    [`&:has(> ${EmptyState})`]: {
      overflowX: "visible",
    },
  },

  /*
   * 모바일
   */
  "@media (max-width: 767px)": {
    overflow: "visible",

    borderTopWidth: "1px",
    borderBottom: 0,

    backgroundColor: "transparent",

    "& .table-header": {
      display: "none",
    },

    "& .table-row": {
      minWidth: 0,
      minHeight: 0,

      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: "14px",

      marginBottom: "14px",
      padding: "18px",

      border: `1px solid ${colors.border}`,
      borderRadius: "12px",

      backgroundColor: colors.surface,

      boxShadow: "0 3px 12px rgba(80, 52, 31, 0.04)",

      "&:last-child": {
        marginBottom: 0,

        borderBottom: `1px solid ${colors.border}`,
      },
    },

    "& .product, & .related-order": {
      width: "100%",

      padding: "0 0 14px",

      borderBottom: "1px solid #eee7e1",
    },

    "& .product-image": {
      width: "66px",
      height: "66px",

      flexBasis: "66px",
    },

    "& .product-info strong": {
      fontSize: "14px",
    },

    "& .related-order span": {
      whiteSpace: "normal",
    },

    "& .number, & .date, & .status, & .views": {
      justifySelf: "auto",

      fontSize: "13px",
    },

    "& .number::before": {
      content: '"번호 "',

      marginRight: "4px",

      color: colors.mutedText,

      fontSize: "12px",
    },

    "& .inquiry-title": {
      width: "100%",
      maxWidth: "100%",

      padding: "4px 0",

      "&:hover": {
        backgroundColor: "transparent",
      },
    },

    "& .title-text": {
      whiteSpace: "normal",
    },

    "& .date::before": {
      content: '"작성일 "',

      marginRight: "4px",

      color: colors.mutedText,

      fontSize: "12px",
    },

    "& .status": {
      width: "fit-content",
      minWidth: "76px",
      minHeight: "30px",

      padding: "6px 10px",
    },

    "& .views::before": {
      content: '"조회 "',

      marginRight: "4px",

      color: colors.mutedText,
    },
  },

  /*
   * 작은 모바일
   */
  "@media (max-width: 480px)": {
    "& .table-row": {
      gap: "12px",

      padding: "15px",
    },

    "& .product-image": {
      width: "58px",
      height: "58px",

      flexBasis: "58px",
    },

    "& .title-text": {
      fontSize: "14px",
    },
  },
});
