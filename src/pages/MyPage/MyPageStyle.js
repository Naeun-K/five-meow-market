import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const page = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "100px",

  width: "100%",
  maxWidth: "1300px",

  padding: "40px 50px 160px",

  color: "var(--text-color)",

  "@media (max-width: 1023px)": {
    padding: "30px 35px 120px",
    gap: "80px",
  },

  "@media (max-width: 767px)": {
    padding: "20px 20px 100px",
    gap: "60px",
  },
});

export const OrderCardWrapper = styled.article({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",
  "@media (min-width:320px) and (max-width:767px)": {
    flexDirection: "row",

    justifyContent: "flex-start",
    gap: "30px",

    overflowX: "auto",
    overflowY: "hidden",

    scrollSnapType: "x mandatory",

    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

// export const OrderCard = styled.article({
//   display: "flex",
//   flexDirection: "column",
//   gap: "24px",

//   width: "100%",
//   padding: "20px 0",

//   "& .order-banner": {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "20px",

//     width: "100%",
//     padding: "12px 20px",

//     color: "#4A3425",
//     backgroundColor: "#F5E9DF",

//     fontWeight: 500,

//     borderRadius: "999px",

//     "& .order-date": {
//       flexShrink: 0,
//     },

//     "& button.order-number": {
//       minWidth: 0,

//       color: "inherit",

//       textDecoration: "underline",
//       textUnderlineOffset: "3px",

//       overflow: "hidden",
//       textOverflow: "ellipsis",
//       whiteSpace: "nowrap",

//       transition: "color 0.15s, font-weight 0.15s",

//       "&:hover": {
//         color: "#2B180D",
//         fontWeight: 700,
//       },
//     },
//   },

//   "& .order-content": {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     gap: "40px",

//     width: "100%",
//     minWidth: 0,

//     padding: "5px 20px 24px",

//     borderBottom: "1px solid var(--border)",
//   },

//   "& .order-product-summary": {
//     display: "flex",
//     alignItems: "center",
//     gap: "28px",

//     flex: 1,
//     minWidth: 0,
//   },

//   "& .img-container": {
//     flexShrink: 0,

//     width: "110px",
//     height: "110px",

//     border: "1px solid var(--border)",
//     borderRadius: "8px",

//     overflow: "hidden",

//     "& > *": {
//       width: "100%",
//       height: "100%",
//     },

//     "& article": {
//       width: "100%",
//       height: "100%",
//     },

//     "& img": {
//       display: "block",

//       width: "100%",
//       height: "100%",

//       objectFit: "cover",
//       objectPosition: "center",
//     },
//   },

//   "& .product-summary-info": {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "flex-start",
//     gap: "10px",

//     flex: 1,
//     minWidth: 0,

//     "& > strong": {
//       display: "block",

//       width: "100%",

//       color: "var(--text-primary)",

//       fontSize: "18px",
//       fontWeight: 600,
//       lineHeight: 1.4,

//       overflow: "hidden",
//       textOverflow: "ellipsis",
//       whiteSpace: "nowrap",
//     },

//     "& > span": {
//       color: "var(--text-secondary)",

//       fontSize: "15px",
//       lineHeight: 1.5,
//     },

//     "& > p": {
//       display: "flex",
//       alignItems: "center",
//       gap: "6px",

//       margin: 0,

//       color: "var(--text-secondary)",

//       fontSize: "16px",
//       lineHeight: 1.5,

//       "& strong": {
//         color: "var(--text-primary)",

//         fontSize: "18px",
//         fontWeight: 700,
//       },
//     },
//   },

//   /*
//    * 데스크톱
//    *
//    * 주문 상품 정보 | 주문 상태 | 버튼
//    *
//    * 주문 상태는 버튼 묶음 전체의 세로 중앙에 고정된다.
//    */
//   "& .button-container": {
//     position: "relative",

//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "flex-end",
//     gap: "12px",

//     flexShrink: 0,

//     /*
//      * 주문 상태 100px
//      * 영역 사이 간격 24px
//      * 버튼 160px
//      */
//     width: "284px",
//     minHeight: "44px",
//     paddingLeft: "124px",

//     "& .badge": {
//       position: "absolute",
//       top: "50%",
//       left: 0,

//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",

//       width: "100px",
//       minHeight: "44px",

//       color: "var(--text-primary)",

//       fontSize: "15px",
//       fontWeight: 700,
//       lineHeight: 1.4,
//       textAlign: "center",

//       whiteSpace: "nowrap",

//       transform: "translateY(-50%)",
//     },

//     "& button": {
//       flexShrink: 0,

//       width: "160px",
//       minHeight: "44px",

//       padding: "10px 16px",

//       color: "var(--text-primary)",
//       backgroundColor: "#fff",

//       fontSize: "15px",
//       fontWeight: 500,
//       lineHeight: 1.4,

//       border: "1px solid var(--text-primary)",
//       borderRadius: "var(--radius-md)",

//       whiteSpace: "nowrap",

//       transition:
//         "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",

//       "&:hover": {
//         color: "var(--text-button)",
//         backgroundColor: "var(--bg-button)",
//         borderColor: "var(--bg-button)",
//       },
//     },

//     "& .confirm-button": {
//       color: "#fff",
//       backgroundColor: "var(--text-primary)",
//     },
//   },

//   /*
//    * 태블릿
//    */
//   "@media (max-width: 1023px)": {
//     gap: "20px",

//     "& .order-content": {
//       gap: "24px",

//       padding: "5px 15px 22px",
//     },

//     "& .order-product-summary": {
//       gap: "20px",
//     },

//     "& .img-container": {
//       width: "96px",
//       height: "96px",
//     },

//     "& .product-summary-info": {
//       gap: "8px",

//       "& > strong": {
//         fontSize: "17px",
//       },

//       "& > span": {
//         fontSize: "14px",
//       },

//       "& > p": {
//         fontSize: "15px",

//         "& strong": {
//           fontSize: "17px",
//         },
//       },
//     },

//     "& .button-container": {
//       /*
//        * 주문 상태 80px
//        * 영역 사이 간격 16px
//        * 버튼 140px
//        */
//       width: "236px",
//       paddingLeft: "96px",
//       gap: "10px",

//       "& .badge": {
//         left: 0,

//         width: "80px",
//         minHeight: "42px",

//         fontSize: "14px",
//       },

//       "& button": {
//         width: "140px",
//         minHeight: "42px",

//         padding: "9px 10px",

//         fontSize: "14px",
//       },
//     },
//   },

//   /*
//    * 모바일
//    *
//    * 주문 상품 정보
//    * 주문 상태
//    * 버튼
//    */
//   "@media (min-width: 320px) and (max-width: 767px)": {
//     flexShrink: 0,

//     width: "100%",
//     minWidth: "290px",

//     gap: "20px",
//     padding: "15px 0",

//     scrollSnapAlign: "start",

//     "& .order-banner": {
//       gap: "12px",

//       padding: "10px 14px",

//       fontSize: "13px",

//       borderRadius: "16px",
//     },

//     "& .order-content": {
//       flexDirection: "column",
//       alignItems: "stretch",
//       gap: "24px",

//       padding: "0 10px 22px",
//     },

//     "& .order-product-summary": {
//       alignItems: "center",
//       gap: "16px",

//       width: "100%",
//     },

//     "& .img-container": {
//       width: "88px",
//       height: "88px",
//     },

//     "& .product-summary-info": {
//       gap: "6px",

//       "& > strong": {
//         display: "-webkit-box",

//         fontSize: "16px",
//         whiteSpace: "normal",

//         WebkitBoxOrient: "vertical",
//         WebkitLineClamp: 2,

//         overflow: "hidden",
//       },

//       "& > span": {
//         fontSize: "13px",
//       },

//       "& > p": {
//         flexWrap: "wrap",

//         fontSize: "14px",

//         "& strong": {
//           fontSize: "16px",
//         },
//       },
//     },

//     "& .button-container": {
//       position: "static",

//       display: "grid",
//       gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
//       gap: "10px",

//       width: "100%",
//       minHeight: 0,
//       paddingLeft: 0,

//       "& .badge": {
//         position: "static",

//         gridColumn: "1 / -1",

//         justifyContent: "flex-start",

//         width: "100%",
//         minHeight: "auto",

//         padding: "0 0 4px",

//         fontSize: "14px",
//         textAlign: "left",

//         transform: "none",
//       },

//       "& button": {
//         width: "100%",
//         minWidth: 0,
//         minHeight: "42px",

//         padding: "9px 8px",

//         fontSize: "13px",
//       },

//       "& button:only-of-type": {
//         gridColumn: "1 / -1",
//       },
//     },
//   },

//   /*
//    * 소형 모바일
//    */
//   "@media (max-width: 374px)": {
//     "& .order-banner": {
//       alignItems: "flex-start",

//       "& button.order-number": {
//         maxWidth: "160px",
//       },
//     },

//     "& .order-product-summary": {
//       alignItems: "flex-start",
//       gap: "12px",
//     },

//     "& .img-container": {
//       width: "76px",
//       height: "76px",
//     },

//     "& .product-summary-info": {
//       "& > strong": {
//         fontSize: "15px",
//       },

//       "& > span": {
//         fontSize: "12px",
//       },

//       "& > p": {
//         flexDirection: "column",
//         alignItems: "flex-start",
//         gap: "2px",

//         fontSize: "13px",

//         "& strong": {
//           fontSize: "15px",
//         },
//       },
//     },

//     "& .button-container": {
//       gridTemplateColumns: "1fr",

//       "& .badge": {
//         gridColumn: "auto",
//       },

//       "& button": {
//         gridColumn: "auto",
//       },

//       "& button:only-of-type": {
//         gridColumn: "auto",
//       },
//     },
//   },
// });
export const OrderCard = styled.article({
  display: "flex",
  flexDirection: "column",
  gap: "24px",

  width: "100%",
  padding: "20px 0",

  "& .order-banner": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",

    width: "100%",
    padding: "12px 20px",

    color: "#4A3425",
    backgroundColor: "#F5E9DF",

    fontWeight: 500,

    borderRadius: "999px",

    "& .order-date": {
      flexShrink: 0,
    },

    "& button.order-number": {
      minWidth: 0,

      color: "inherit",

      textDecoration: "underline",
      textUnderlineOffset: "3px",

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",

      transition: "color 0.15s ease, font-weight 0.15s ease",

      "&:hover": {
        color: "#2B180D",
        fontWeight: 700,
      },
    },
  },

  /*
   * 데스크톱 배치
   *
   * 주문 상품 정보 | 주문 상태 | 버튼
   */
  "& .order-content": {
    // display: "grid",
    // gridTemplateColumns: "minmax(0, 1fr) 120px 160px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // columnGap: "30px",

    width: "100%",
    minWidth: 0,

    padding: "5px 20px 24px",

    borderBottom: "1px solid var(--border)",
  },

  "& .order-product-summary": {
    display: "flex",
    alignItems: "center",
    gap: "28px",

    width: "40%",
    minWidth: 0,
  },

  "& .img-container": {
    flexShrink: 0,

    width: "110px",
    height: "110px",

    border: "1px solid var(--border)",
    borderRadius: "8px",

    overflow: "hidden",

    "& > *": {
      width: "100%",
      height: "100%",
    },

    "& article": {
      width: "100%",
      height: "100%",
    },

    "& img": {
      display: "block",

      width: "100%",
      height: "100%",

      objectFit: "cover",
      objectPosition: "center",
    },
  },

  "& .product-summary-info": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",

    flex: 1,
    minWidth: 0,

    "& > strong": {
      display: "block",

      width: "100%",

      color: "var(--text-primary)",

      fontSize: "18px",
      fontWeight: 600,
      lineHeight: 1.4,

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    "& > span": {
      color: "var(--text-secondary)",

      fontSize: "15px",
      lineHeight: 1.5,
    },

    "& > p": {
      display: "flex",
      alignItems: "center",
      gap: "6px",

      margin: 0,

      color: "var(--text-secondary)",

      fontSize: "16px",
      lineHeight: 1.5,

      "& strong": {
        color: "var(--text-primary)",

        fontSize: "18px",
        fontWeight: 700,
      },
    },
  },
  "& .payment-status-wrapper": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "50px",

    "& .payments": {
      whiteSpace: "nowrap",
      "& strong": { color: "var(--text-primary)" },
    },
    /*
     * 주문 상품 정보와 버튼 사이에 있는
     * 독립적인 주문 상태 영역
     */
    "& .order-status": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: "100%",
      minWidth: 0,
      minHeight: "44px",

      color: "var(--text-primary)",

      fontSize: "15px",
      fontWeight: 700,
      lineHeight: 1.4,
      textAlign: "center",

      whiteSpace: "nowrap",
    },
  },

  "& .button-container": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    gap: "12px",

    width: "160px",

    "& button": {
      width: "100%",
      minHeight: "44px",

      padding: "10px 16px",

      color: "var(--text-primary)",
      backgroundColor: "#fff",

      fontSize: "15px",
      fontWeight: 500,
      lineHeight: 1.4,

      border: "1px solid var(--text-primary)",
      borderRadius: "var(--radius-md)",

      whiteSpace: "nowrap",

      transition:
        "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",

      "&:hover": {
        color: "var(--text-button)",
        backgroundColor: "var(--bg-button)",
        borderColor: "var(--bg-button)",
      },
    },

    "& .confirm-button": {
      color: "#fff",
      backgroundColor: "var(--text-primary)",
    },
  },

  /*
   * 태블릿
   */
  "@media (max-width: 1023px)": {
    gap: "20px",

    "& .order-content": {
      gridTemplateColumns: "minmax(0, 1fr) 90px 140px",
      columnGap: "20px",

      padding: "5px 15px 22px",
    },

    "& .order-product-summary": {
      gap: "20px",
    },

    "& .img-container": {
      width: "96px",
      height: "96px",
    },

    "& .product-summary-info": {
      gap: "8px",

      "& > strong": {
        fontSize: "17px",
      },

      "& > span": {
        fontSize: "14px",
      },

      "& > p": {
        fontSize: "15px",

        "& strong": {
          fontSize: "17px",
        },
      },
    },

    "& .payment-status-wrapper": {
      flexDirection: "column",
      gap: "10px",

      "& .payments": {
        order: 1,
      },
    },
    "& .order-status": {
      minHeight: "42px",

      fontSize: "14px",
    },

    "& .button-container": {
      width: "140px",
      gap: "10px",

      "& button": {
        minHeight: "42px",

        padding: "9px 10px",

        fontSize: "14px",
      },
    },
  },

  /*
   * 모바일
   *
   * 주문 상품 정보
   * 주문 상태
   * 버튼
   */
  "@media (min-width: 320px) and (max-width: 767px)": {
    flexShrink: 0,

    width: "100%",
    minWidth: "290px",

    gap: "20px",
    padding: "15px 0",

    scrollSnapAlign: "start",

    "& .order-banner": {
      gap: "12px",

      padding: "10px 14px",

      fontSize: "13px",

      borderRadius: "16px",
    },

    "& .order-content": {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      gap: "20px",

      padding: "0 10px 22px",
    },

    "& .order-product-summary": {
      alignItems: "center",
      gap: "16px",

      width: "100%",
    },

    "& .img-container": {
      width: "88px",
      height: "88px",
    },

    "& .product-summary-info": {
      gap: "6px",

      "& > strong": {
        display: "-webkit-box",

        fontSize: "16px",
        whiteSpace: "normal",

        WebkitBoxOrient: "vertical",
        WebkitLineClamp: 2,

        overflow: "hidden",
      },

      "& > span": {
        fontSize: "13px",
      },

      "& > p": {
        flexWrap: "wrap",

        fontSize: "14px",

        "& strong": {
          fontSize: "16px",
        },
      },
    },
    "& .payment-status-wrapper": {
      // display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      // gap: "16px",
    },
    // "& .order-status": {
    //   justifyContent: "flex-start",

    //   width: "100%",
    //   minHeight: "auto",

    //   padding: "2px 0",

    //   fontSize: "14px",
    //   textAlign: "left",
    // },

    "& .button-container": {
      display: "grid",
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: "10px",

      width: "100%",

      "& button": {
        width: "100%",
        minWidth: 0,
        minHeight: "42px",

        padding: "9px 8px",

        fontSize: "13px",
      },

      "& button:only-child": {
        gridColumn: "1 / -1",
      },
    },
  },

  /*
   * 소형 모바일
   */
  "@media (max-width: 374px)": {
    "& .order-banner": {
      alignItems: "flex-start",

      "& button.order-number": {
        maxWidth: "160px",
      },
    },

    "& .order-content": {
      gap: "16px",
    },

    "& .order-product-summary": {
      alignItems: "flex-start",
      gap: "12px",
    },

    "& .img-container": {
      width: "76px",
      height: "76px",
    },

    "& .product-summary-info": {
      "& > strong": {
        fontSize: "15px",
      },

      "& > span": {
        fontSize: "12px",
      },

      "& > p": {
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "2px",

        fontSize: "13px",

        "& strong": {
          fontSize: "15px",
        },
      },
    },

    "& .order-status": {
      fontSize: "13px",
    },

    "& .button-container": {
      gridTemplateColumns: "1fr",

      "& button": {
        gridColumn: "auto",
      },

      "& button:only-child": {
        gridColumn: "auto",
      },
    },
  },
});

export const pageTitle = css({
  textAlign: "center",
  fontSize: "44px",
  fontWeight: 700,
  lineHeight: "1.35",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    fontSize: "36px",
    lineHeight: "1.35",
  },

  "@media (max-width: 767px)": {
    fontSize: "28px",
    lineHeight: "1.4",
  },
});

export const userCard = css({
  width: "100%",
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "50px 55px",
  boxSizing: "border-box",
  backgroundColor: "#fff",
  border: "1px solid var(--border)",
  borderRadius: "12px",
  "& .profile-wrapper": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "50px",

    width: "100%",
  },
  "& .profile-svg": {
    aspectRatio: "1 / 1",
    width: "100px",

    color: "var(--text-primary)",
  },

  "@media (max-width: 1023px)": {
    minHeight: "180px",
    padding: "40px 45px",

    "& .profile-wrapper": {
      gap: "40px",
    },
  },

  "@media (max-width: 767px)": {
    flexDirection: "column",
    minHeight: "155px",
    padding: "30px 25px",
    gap: "30px",
    "& .profile-wrapper": {
      position: "relative",
      // padding: "0 0 20px 0",
      gap: "25px",
    },
    // "& .profile-wrapper::after": {
    //   content: '""',

    //   position: "absolute",
    //   left: 0,
    //   bottom: "-5px",

    //   width: "100%",
    //   height: "1px",

    //   backgroundColor: "var(--border)",
    // },
  },

  "@media (max-width: 374px)": {
    gap: "30px",
  },
});

export const userInfo = css({
  minWidth: 0,
  flex: 1,

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",

  "& .info-wrapper": {
    display: "flex",
    alignItems: "center",
    gap: "20px",

    minWidth: 0,
    maxWidth: "100%",
  },

  "@media (max-width: 1023px)": {
    gap: "15px",

    "& .info-wrapper": {
      flexDirection: "column",
      gap: "15px",
      width: "100%",
    },
  },

  "@media (max-width: 767px)": {
    flex: 1,
    minWidth: 0,
    width: "100%",

    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
  },
});

export const userName = css({
  display: "block",
  flexShrink: 0,

  fontSize: "28px",
  fontWeight: 700,
  lineHeight: "1.4",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    fontSize: "24px",
  },

  "@media (max-width: 767px)": {
    fontSize: "20px",
    lineHeight: "28px",
  },

  "@media (max-width: 374px)": {
    transform: "translateY(8px)",
  },
});

export const userEmail = css({
  display: "block",
  flexShrink: 1,
  minWidth: 0,
  maxWidth: "100%",

  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",

  fontSize: "18px",
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",

  "&.pointDeco": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",

    width: "150px",
    minWidth: "150px",
    maxWidth: "150px",
    flexShrink: 0,
    boxSizing: "border-box",

    padding: "4px 12px",
    border: "1px solid transparent",
    borderRadius: "20px",
    backgroundColor: "#F7EFE5",

    color: "var(--text-primary)",
    whiteSpace: "nowrap",
    fontWeight: 600,

    transition: "border-color 0.3s",

    overflow: "hidden",
    textOverflow: "ellipsis",

    transform: "translateX(-60px)",
  },

  "&.pointDeco:hover": {
    borderColor: "var(--text-primary)",
  },

  "@media (max-width: 1023px)": {
    fontSize: "17px",
    lineHeight: "1.6",
  },

  "@media (max-width: 767px)": {
    fontSize: "16px",
    lineHeight: "26px",
  },

  "@media (max-width: 374px)": {
    lineHeight: "26px",
  },
});

// export const userPoint = css({
//   display: "block",
//   flexShrink: 0,

//   fontSize: "18px",
//   fontWeight: 600,
//   lineHeight: "1.6",
//   letterSpacing: "-0.01em",
//   color: "var(--text-secondary)",

//   "@media (max-width: 1023px)": {
//     fontSize: "17px",
//     lineHeight: "1.6",
//   },

//   "@media (max-width: 767px)": {
//     fontSize: "16px",
//     lineHeight: "26px",
//   },

//   "@media (max-width: 374px)": {
//     lineHeight: "26px",
//   },
// });

export const editButton = css({
  flexShrink: 0,
  minWidth: "100px",
  padding: "10px 20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "20px",

  border: "1px solid var(--border)",
  borderRadius: "var(--radius-md)",

  color: "var(--text-secondary)",
  fontSize: "20px",

  opacity: 0.8,

  transition: "border-color 0.3s",

  "& .quick-arrow": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "30px",
    height: "30px",

    transition: "transform 0.3s ease",
  },

  "&:hover": {
    borderColor: "var(--text-primary)",
  },
  "&:hover .quick-arrow": {
    transform: "translateX(8px)",
  },

  "@media (max-width: 1023px)": {
    fontSize: "18px",
    padding: "8px 10px",
    "& .quick-arrow": {
      width: "25px",
      height: "25px",
    },
  },

  "@media (max-width: 767px)": {
    "& .quick-arrow": {
      width: "20px",
      height: "20px",
    },
  },
});

export const summary = css({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",

  backgroundColor: "#fff",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-md)",
  overflow: "hidden",

  "@media (max-width: 767px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
});

export const titleWrapper = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "30px 50px",

  borderBottom: "1px solid var(--border)",

  "@media (max-width:767px)": {
    padding: "20px",
  },
});

export const summaryItem = css({
  position: "relative",

  minHeight: "180px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  padding: "60px 30px",

  borderRight: "1px solid var(--border)",

  "&:last-child": {
    borderRight: 0,
  },
  // 고양이
  "& .btn-hover-container": {
    position: "absolute",

    left: "50%",
    // top: "25px",
    // top: "0",

    top: "28%",

    width: "50px",
    aspectRatio: "1 / 1",

    opacity: 0,

    transform: "translate(-50%, 30px)",
    // transform: "translate(-50%, -20%)",
    pointerEvents: "none",
    transition:
      "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.2s ease",

    "& .btn-hover": {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  },
  "& .svg-container": {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "20px",

    width: "80px",
    aspectRatio: "1/1",
    color: "var(--text-primary)",
    backgroundColor: "#fff",

    border: "1px solid var(--text-primary)",
    borderRadius: "999px",

    boxShadow: "var(--shadow)",

    zIndex: 1,
    // transition: "transform 0.3s",
    transition: "background-color 0.5s, color 0.5s",
  },
  // 버튼에 hover했을 때
  "&:has(.svg-container:hover) .btn-hover-container": {
    opacity: 1,

    // 위로 65px 이동
    transform: "translate(-50%, calc(-20% - 65px))",
  },

  "& .svg-container:hover": {
    // transform: "scale(1.1)",
    backgroundColor: "var(--bg-button)",
    color: "var(--text-button)",
  },

  "@media (max-width: 1023px)": {
    minHeight: "165px",
    padding: "60px 18px",
    gap: "18px",
  },

  "@media (max-width: 767px)": {
    minHeight: "140px",
    padding: "60px 15px",
    gap: "15px",

    "&:nth-of-type(2)": {
      borderRight: 0,
    },

    "&:nth-of-type(-n + 2)": {
      borderBottom: "1px solid var(--border)",
    },
  },
});

export const summaryLabel = css({
  fontSize: "20px",
  fontWeight: 400,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",

  "@media (max-width: 1023px)": {
    fontSize: "20px",
    lineHeight: "1.6",
  },

  "@media (max-width: 767px)": {
    fontSize: "18px",
    lineHeight: "25px",
  },
});

export const summaryValue = css({
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "1.4",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    fontSize: "24px",
    lineHeight: "1.4",
  },

  "@media (max-width: 767px)": {
    fontSize: "20px",
    lineHeight: "28px",
  },
});

export const section = css({
  width: "100%",

  backgroundColor: "#fff",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-md)",

  "& .section-content": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",

    padding: "30px 50px 50px 50px",
    "& .guide-message": { display: "none" },
  },
  "@media (max-width: 1023px)": {
    "& .section-content": { padding: "30px" },
  },

  "@media (max-width: 735px)": {
    "& .section-content": {
      "&  .guide-message": {
        display: "flex",
        alignItems: "center",
        gap: "15px",

        fontSize: "18px",
        fontWeight: 600,
        color: "var(--text-secondary)",
      },
    },
  },
});

export const sectionTitle = css({
  fontSize: "28px",
  fontWeight: 600,

  letterSpacing: "-0.02em",
  color: "var(--text-primary)",

  "@media (max-width: 1023px)": {
    fontSize: "34px",
  },

  "@media (max-width: 767px)": {
    fontSize: "20px",
  },
});

export const orderCard = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",

  width: "100%",

  gap: "30px",

  "& .item-wrapper": {
    width: "250px",

    aspectRatio: "1 / 2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",

    flexShrink: 0,
  },
  "& .img-wrapper": {
    width: "100%",
    aspectRatio: "1/1",

    border: "1px solid var(--border)",
    borderRadius: "8px",
    overflow: "hidden",

    "& img": { objectFit: "cover" },
  },
  "& .desc-wrapper": {
    display: "flex",
    flexDirection: "column",

    gap: "10px",

    width: "100%",
    padding: "0 20px",
    fontSize: "20px",
    "& strong": { color: "var(--text-primary)" },
  },
  "& .btn-wrapper": {
    display: "flex",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",

    width: "100%",

    "& button": {
      padding: "10px 20px",
      flex: 1,
      fontSize: "17px",
      fontWeight: 500,
      // letterSpacing: "5px",

      color: "var(--text-primary)",
      border: "1px solid var(--text-primary)",
      borderRadius: "var(--radius-md)",

      transition: "background-color 0.3s, color 0.3s",
    },
    "& button:hover": {
      backgroundColor: "var(--bg-button)",
      color: "var(--text-button)",
    },
  },

  "@media (min-width: 736px) and (max-width: 1024px)": {
    gap: "15px",

    "& .item-wrapper": {
      width: "calc((100% - 30px) / 3)",
    },

    "& .item-wrapper:nth-of-type(n + 4)": {
      display: "none",
    },

    "& .desc-wrapper": {
      padding: "0 10px",
      gap: "8px",
      fontSize: "18px",
    },

    "& .btn-wrapper": {
      flexDirection: "column",
      gap: "10px",

      "& button": {
        width: "100%",
        fontSize: "17px",
      },
    },
  },

  "@media (max-width: 735px)": {
    justifyContent: "flex-start",
    gap: "30px",

    overflowX: "auto",
    overflowY: "hidden",

    scrollSnapType: "x mandatory",

    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const orderImage = css({
  width: "120px",
  height: "120px",
  flexShrink: 0,
  display: "block",
  objectFit: "cover",
  borderRadius: "8px",
  backgroundColor: "var(--bg-notice)",

  "@media (max-width: 1023px)": {
    width: "110px",
    height: "110px",
  },

  "@media (max-width: 767px)": {
    width: "84px",
    height: "84px",
  },

  "@media (min-width: 375px) and (max-width: 767px)": {
    width: "96px",
    height: "96px",
  },
});

export const orderInfo = css({
  flex: 1,

  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  marginLeft: "40px",
  gap: "12px",
  textAlign: "left",

  "@media (max-width: 1023px)": {
    marginLeft: "30px",
    gap: "10px",
  },

  "@media (max-width: 374px)": {
    minWidth: 0,
    marginLeft: "18px",
    gap: "6px",
  },

  "@media (min-width: 375px) and (max-width: 424px)": {
    minWidth: 0,
    marginLeft: "20px",
    gap: "7px",
  },

  "@media (min-width: 425px) and (max-width: 767px)": {
    minWidth: 0,
    marginLeft: "22px",
    gap: "7px",
  },
});

export const productName = css({
  display: "block",
  maxWidth: "100%",
  margin: 0,
  fontSize: "28px",
  fontWeight: 600,
  lineHeight: "1.4",
  letterSpacing: "-0.02em",
  color: "var(--text-primary)",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "@media (max-width: 1023px)": {
    fontSize: "24px",
    lineHeight: "1.4",
  },

  "@media (max-width: 767px)": {
    fontSize: "18px",
    lineHeight: "26px",
  },
});

export const orderDate = css({
  display: "block",
  width: "100%",
  margin: 0,
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",
  textAlign: "left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",

  "@media (max-width: 1023px)": {
    fontSize: "17px",
    lineHeight: "1.6",
  },

  "@media (max-width: 767px)": {
    fontSize: "14px",
    lineHeight: "21px",
  },
});

export const orderNumber = css({
  display: "block",
  width: "100%",
  minWidth: 0,
  margin: 0,
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "1.6",
  letterSpacing: "-0.01em",
  color: "var(--text-secondary)",
  textAlign: "left",

  ".order-number-label": {
    display: "inline",
  },

  ".order-number-value": {
    display: "inline",
  },

  "@media (max-width: 1023px)": {
    fontSize: "17px",
    lineHeight: "1.6",
  },

  "@media (max-width: 374px)": {
    fontSize: "14px",
    lineHeight: "21px",
    textAlign: "left",

    ".order-number-label": {
      display: "block",
    },

    ".order-number-value": {
      display: "block",
      width: "100%",
      minWidth: 0,
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      textAlign: "left",
    },
  },

  "@media (min-width: 375px) and (max-width: 424px)": {
    fontSize: "14px",
    lineHeight: "21px",
    whiteSpace: "nowrap",
    textAlign: "left",

    ".order-number-label": {
      display: "inline",
    },

    ".order-number-value": {
      display: "inline",
      width: "auto",
      minWidth: 0,
      overflow: "visible",
      textOverflow: "clip",
      whiteSpace: "nowrap",
      textAlign: "left",
    },
  },

  "@media (min-width: 425px) and (max-width: 767px)": {
    fontSize: "14px",
    lineHeight: "21px",
    whiteSpace: "nowrap",
    textAlign: "left",

    ".order-number-label": {
      display: "inline",
    },

    ".order-number-value": {
      display: "inline",
      width: "auto",
      minWidth: 0,
      overflow: "visible",
      textOverflow: "clip",
      whiteSpace: "nowrap",
      textAlign: "left",
    },
  },
});

export const orderStatus = css({
  marginLeft: "auto",
  flexShrink: 0,
  minWidth: "100px",
  padding: "13px 22px",
  borderRadius: "24px",
  backgroundColor: "var(--bg-notice)",
  color: "var(--text-primary)",
  fontSize: "14px",
  fontWeight: 500,
  lineHeight: "1.5",
  letterSpacing: "-0.01em",
  textAlign: "center",

  "@media (max-width: 1023px)": {
    minWidth: "110px",
    padding: "14px 24px",
    fontSize: "15px",
    borderRadius: "25px",
  },

  "@media (max-width: 767px)": {
    display: "block",
    position: "absolute",
    right: "20px",
    bottom: "18px",
    marginLeft: 0,
    minWidth: "100px",
    padding: "10px 18px",
    fontSize: "15px",
    lineHeight: "22px",
    borderRadius: "22px",
  },

  "@media (min-width: 375px) and (max-width: 767px)": {
    right: "25px",
    bottom: "20px",
    minWidth: "110px",
    padding: "11px 22px",
  },
});

export const quickMenu = css({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  gap: "40px",
  marginTop: "85px",

  "@media (max-width: 1023px)": {
    gap: "30px",
    marginTop: "70px",
  },

  "@media (max-width: 767px)": {
    padding: "0 20px",

    order: -1,
  },
});

export const quickCard = css({
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "40px 45px",
  boxSizing: "border-box",
  border: "1px solid var(--border)",

  borderRadius: "12px",

  textAlign: "left",

  "& .svg-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "20px",

    width: "60px",
    aspectRatio: "1/1",
    color: "var(--text-primary)",
    backgroundColor: "#fff",

    border: "1px solid var(--text-primary)",
    borderRadius: "999px",
  },

  "@media (max-width: 1023px)": {
    "& .desc-wrapper": {
      gap: "10px",
    },
    flexDirection: "column",
    justifyContent: "center",
    gap: "20px",

    padding: "35px 40px",
    "&:hover .quick-arrow": {
      transform: "translateX(20px) ",
    },
  },

  "@media (max-width: 767px)": {
    padding: "20px",

    border: "none",
  },
});

export const quickTitle = css({
  display: "block",

  fontSize: "18px",
  fontWeight: 600,

  color: "var(--text-secondary)",

  "@media (max-width: 1023px)": {
    fontSize: "17px",
  },

  "@media (max-width: 767px)": {
    fontSize: "16px",
  },
});

export const quickArrow = css({
  display: "inline-block",
  flexShrink: 0,
  width: "40px",
  height: "40px",

  color: "inherit",

  transition: "transform 0.2s ease",

  "&:hover": {
    transform: "translateX(10px)",
  },
});

export const buttonStyle = css({
  padding: "10px 20px",
  flex: 1,
  fontSize: "17px",
  fontWeight: 500,
  // letterSpacing: "5px",

  backgroundColor: "var(--bg-button)",
  color: "var(--text-button)",

  borderRadius: "var(--radius-md)",

  "@media (max-width:1023px)": {
    fontSize: "18px",
  },
});
