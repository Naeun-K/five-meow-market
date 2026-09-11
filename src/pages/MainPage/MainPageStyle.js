import styled from "@emotion/styled";

export const MainPageSytle = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "180px",

  width: "100%",

  // padding: "80px 0",

  minHeight: "100vh",
  maxWidth: "1300px",
  // margin: " 0 auto",

  margin: "100px 0",

  "@media (max-width:1023px)": { gap: "150px", margin: "80px 0" },
  "@media (min-width:320px) and (max-width:767px)": {
    gap: "100px",
    margin: "50px 0",
  },
});

export const BannerBackground = styled.div({
  position: "relative",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  overflow: "hidden",

  // 기본 바탕은 이미지 벽지색
  backgroundColor: "#F7EEE5",

  "&::before": {
    content: '""',

    position: "absolute",

    // 실제 배너보다 좌우로만 조금 크게
    width: "1300px",
    height: "100%",

    left: "50%",
    top: 0,
    transform: "translateX(-50%)",

    backgroundImage: "var(--desktop-banner)",
    // backgroundPosition: "center",
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",

    // ★ cover 절대 사용하지 않음
    backgroundSize: "2560px 100%",

    filter: "blur(35px)",
  },

  "@media (max-width: 1023px)": {
    // "&::before": {
    //   display: "none",
    // },
    "&::before": {
      content: '""',

      position: "absolute",
      width: "1300px",
      height: "100%",

      left: "50%",
      bottom: 0,
      transform: "translateX(-50%)",

      backgroundImage: "var(--desktop-banner)",
      backgroundPosition: "center bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: "1200px auto",

      filter: "blur(35px)",
    },
  },
});

export const BannerContainer = styled.picture({
  position: "relative",
  zIndex: 1,

  display: "block",

  width: "100%",
  maxWidth: "1500px",

  "& img": {
    display: "block",
    width: "100%",
    height: "auto",

    WebkitMaskImage:
      "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",

    maskImage:
      "linear-gradient(to right, transparent 0%, black 3%, black 97%, transparent 100%)",
  },

  "@media (max-width: 1023px)": {
    "& img": {
      WebkitMaskImage: "none",
      maskImage: "none",
    },
  },
});

export const CardContainer = styled.div({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  gap: "30px",

  width: "100%",
  // minWidth: 0,

  padding: "0 50px",

  "& .labeling-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  "& .labeling": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",

    "& p": {
      color: "var(--text-primary)",
      fontSize: "28px",
      fontWeight: 600,
    },
  },
  "& .see-more": {
    cursor: "pointer",
    "& p": {
      fontSize: "20px",
    },
  },

  "& .paw-container": {
    width: "30px",
    height: "30px",
    color: "var(--acent-beidge)",
  },

  "& .arrow-container": {
    width: "18px",
    height: "18px",
    color: "var(--text-primary)",

    // "& .bi-arrow-right-short": {
    //   fill:
    // },
  },

  "& .card-wrapper": {
    width: "100%",
  },

  // 🔴 ADD - 기본적으로 더보기 버튼 숨김
  "& .mobile-more-button": {
    display: "none",
  },

  // 태블릿
  "@media (max-width:1023px)": {
    padding: "0 30px",

    "& .labeling": {
      "& p": {
        fontSize: "24px",
      },
    },

    "& .see-more": {
      "& p": {
        fontSize: "18px",
      },
    },
  },

  // 모바일
  "@media (min-width:320px) and (max-width:767px)": {
    padding: "0 20px",

    "& .labeling-wrapper": {
      justifyContent: "center",
    },
    "& .labeling": {
      "& p": {
        fontSize: "20px",
      },
    },
    "& .labeling-wrapper > .labeling:last-child": {
      display: "none",
    },

    // 🔴 ADD - 모바일에서만 더보기 버튼 표시
    "& .mobile-more-button": {
      width: "100%",
      maxWidth: "400px",
      height: "57px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",

      border: "none",
      borderRadius: "12px",

      backgroundColor: "var(--bg-button)",
      color: "var(--text-button)",

      fontSize: "16px",
      fontWeight: 600,

      cursor: "pointer",
    },
  },
});

export const ProductListStyle = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(4,  minmax(0, 1fr))",
  gap: "60px",

  width: "100%",
  // minWidth: 0,

  cursor: "pointer",
  "& .product-item": {
    display: "flex",
    flexDirection: "column",
    justifyContents: "center",
    alignItems: "center",
    gap: "5px",

    // minWidth: 0,
  },

  "& .product-info": {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginTop: "10px",

    width: "100%",

    textAlign: "center",
  },
  "& .product-name": {
    fontSize: "18px",
    fontWeight: 600,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  "& .product-price": {
    fontSize: "16px",
  },

  "@media (max-width: 1023px)": {
    gridTemplateColumns: "repeat(2,  minmax(0, 1fr))",
    // gap: "30px",
    justifyItems: "center",
    "& .product-item": {
      // maxWidth: "300px",
    },
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "1fr",
    gap: "24px",
    justifyItems: "center",

    "& .product-item": {
      maxWidth: "400px",
    },

    // "& .product-info": {

    //   // maxWidth: "220px",
    //   alignItems: "center",
    // },
  },
});
