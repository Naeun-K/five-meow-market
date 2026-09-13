import styled from "@emotion/styled";

export const PhotoWrapper = styled.div({
  maxWidth: " 500px",
  minWidth: " 300px",

  aspectRatio: "1/1",

  borderRadius: "8px",
  "& img": { objectFit: "cover" },
});

export const DescWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "stretch",

  gap: "80px",

  width: "50%",
  "& .desc-container": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "40px",
  },
  "& .product-info": {
    display: "flex",
    flexDirection: "column",
    justifyContent: " center",
    alignItems: "flex-start",
    gap: "35px",
  },
  "@media (max-width:1260px)": {
    justifyContent: "center",

    width: "100%",
    "& .desc-field": { whiteSpace: "nowrap" },
    "& .desc-container": {
      justifyContent: "center",
      alignItems: "start",
      gap: "100px",
    },
  },
  "@media (max-width:540px)": {
    "& .desc-container": {
      gap: "50px",
    },
  },
  "@media (max-width:490px)": {
    "& .desc-container": {
      gap: "30px",
    },
  },
});

export const SummaryStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  padding: "30px 0",

  "& .summary-wrapper": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .count-wrapper": {
    display: "flex",
    alignItems: "center",

    border: "1px solid var(--border)",
    borderRadius: "8px",
    overflow: "hidden",

    "& button": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: "45px",
      height: "45px",

      padding: 0,

      border: "none",
      backgroundColor: "#fff",

      fontSize: "20px",
      color: "var(--text-primary)",

      cursor: "pointer",
    },

    "& button:disabled": {
      opacity: 0.3,
      cursor: "default",
    },

    "& span": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: "45px",
      height: "45px",

      borderLeft: "1px solid var(--border)",
      borderRight: "1px solid var(--border)",

      fontSize: "16px",
      color: "var(--text-primary)",
    },
  },
  "@media (max-width:600px)": {
    display: "none",
  },
});

export const DetailProductStyle = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  maxWidth: "1300px",

  padding: "50px",

  "@media (max-width: 600px)": {
    padding: "20px",
  },

  width: "100%",

  fontSize: "18px",

  "@media (max-width:1260px)": {
    flexDirection: "column",
    justifyContent: "center",

    gap: "100px",
  },
});

export const DetailBanner = styled.nav({
  position: "sticky",
  top: "105px",
  zIndex: 30,

  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  width: "100%",
  maxWidth: "1300px",
  borderTop: "1px solid var(--border)",
  borderBottom: "1px solid var(--border)",
  backgroundColor: "var(--bg)",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
  marginTop: "105px",

  "& a": {
    padding: "20px 12px",
    color: "var(--text-secondary)",
    textAlign: "center",
    fontSize: "16px",
    transition: "background-color 0.2s ease, color 0.2s ease",
  },

  "& a + a": {
    borderLeft: "1px solid var(--border)",
  },

  "& a:hover": {
    backgroundColor: "var(--background-secondary)",
    color: "var(--text-primary)",
  },

  "@media (min-width: 601px) and (max-width: 1023px)": {
    top: "105px",
  },

  "@media (max-width: 600px)": {
    top: "80px",
    marginTop: "80px",

    "& a": {
      padding: "16px 6px",
      fontSize: "13px",
    },
  },
});

export const DetailSection = styled.section({
  width: "100%",
  maxWidth: "1300px",
  padding: "72px 50px 0",
  scrollMarginTop: "160px",

  "& .section-heading": {
    borderBottom: "2px solid var(--text-primary)",
    paddingBottom: "18px",
  },

  "& .section-heading p": {
    margin: 0,
    color: "var(--text-secondary)",
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.14em",
  },

  "& .section-heading h2": {
    margin: "10px 0 0",
    fontSize: "28px",
  },

  "& .information-content, & .guide-content": {
    padding: "28px 0",
    color: "var(--text-secondary)",
    lineHeight: 1.8,
  },

  "& .information-content > p": {
    margin: 0,
  },

  "& dl": {
    margin: "24px 0 0",
    borderTop: "1px solid var(--border)",
  },

  "& dl > div": {
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    padding: "14px 0",
    borderBottom: "1px solid var(--border)",
  },

  "& dt": {
    color: "var(--text-primary)",
    fontWeight: 700,
  },

  "& dd": {
    margin: 0,
  },

  "& .guide-content p": {
    margin: "0 0 12px",
  },

  "& .guide-content p:last-child": {
    marginBottom: 0,
  },

  "& .guide-content strong": {
    display: "inline-block",
    width: "110px",
    color: "var(--text-primary)",
  },

  "@media (max-width: 600px)": {
    padding: "48px 20px 0",
    scrollMarginTop: "120px",

    "& .section-heading h2": {
      fontSize: "22px",
    },

    "& dl > div": {
      gridTemplateColumns: "90px 1fr",
      fontSize: "14px",
    },

    "& .guide-content": {
      fontSize: "14px",
    },

    "& .guide-content strong": {
      display: "block",
      width: "auto",
      marginBottom: "2px",
    },
  },
});

export const RelatedGrid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: "20px",
  paddingTop: "28px",

  "@media (max-width: 800px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },
});

export const RelatedItem = styled.article({
  minWidth: 0,

  "& a": {
    display: "block",
    color: "var(--text-primary)",
  },

  "& article": {
    aspectRatio: "1 / 1",
  },

  "& strong, & span": {
    display: "block",
  },

  "& strong": {
    overflow: "hidden",
    marginTop: "12px",
    fontSize: "15px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },

  "& span": {
    marginTop: "5px",
    color: "var(--text-secondary)",
    fontSize: "14px",
  },
});

export const ButtonContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",

  width: "100%",

  "& .button-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",

    width: "100%",
  },

  "& .btn": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    padding: "15px 0",

    border: "1px solid var(--text-primary)",
    color: "var(--text-primary)",
    borderRadius: "var(--radius-md)",
  },

  "& .btn-buy-now": {
    backgroundColor: "var(--bg-button)",
    color: "var(--text-button)",
  },

  "& .button-text": {
    display: "inline",
  },

  "& .button-icon": {
    display: "none",
  },

  "& .btn-wishlist": {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    "& span": {
      width: "20px",
      height: "20px",
    },

    "& svg": {
      display: "block",
      width: "100%",
      height: "100%",
    },
  },

  // ★ JSX와 클래스명 통일
  "& .mobile-wishlist": {
    display: "none",
  },

  "@media (max-width: 490px)": {
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",

    // ★ 이거 유지
    "& .button-wrapper": {
      display: "contents",
    },

    "& .button-text": {
      display: "none",
    },

    "& .button-icon": {
      display: "inline",
    },

    // PC용 찜 버튼 숨김
    "& .btn-wishlist": {
      display: "none",
    },

    // // ★ 실제 JSX의 HeartButton
    // "& .mobile-wishlist": {
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",

    //   width: "57px",
    //   height: "57px",
    //   flex: "0 0 57px",

    //   // 가장 왼쪽
    //   order: 1,
    // },

    "& .mobile-wishlist": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: "57px",
      height: "57px",
      flex: "0 0 57px",

      // HeartButton의 absolute 스타일을
      // 이 위치에서만 덮어쓰기
      "& > button": {
        position: "static",

        width: "57px",
        height: "57px",

        transform: "none",
      },

      "& > button > svg": {
        width: "24px",
        height: "24px",
      },
    },

    // 가운데
    "& .btn-cart": {
      flex: 1,
      width: "auto",
      order: 1,
    },

    // 오른쪽
    "& .btn-buy-now": {
      flex: 1,
      width: "auto",
      order: 2,
    },
  },
});
