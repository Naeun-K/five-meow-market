import styled from "@emotion/styled";

export const PhotoWrapper = styled.div({
  width: "100%",
  minWidth: 0,

  "& .main-product-image": {
    width: "100%",
    aspectRatio: "1 / 1",
    overflow: "hidden",
    borderRadius: "8px",
  },

  "& .main-product-image img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "& .product-thumbnail-list": {
    display: "flex",
    gap: "8px",

    width: "100%",
    marginTop: "10px",
  },

  "& .product-thumbnail": {
    width: "80px",
    height: "80px",

    padding: 0,

    overflow: "hidden",

    border: "1px solid var(--border)",
    borderRadius: "4px",

    backgroundColor: "#fff",

    cursor: "pointer",
  },

  "& .product-thumbnail.is-active": {
    border: "2px solid var(--text-primary)",
  },

  "& .product-thumbnail img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "@media (max-width: 767px)": {
    "& .product-thumbnail": {
      width: "64px",
      height: "64px",
    },
  },
});
export const DescWrapper = styled.div({
  display: "flex",
  flexDirection: "column",

  width: "46%",

  gap: "40px",

  "& .desc-container": {
    display: "flex",
    alignItems: "flex-start",

    width: "100%",

    gap: "40px",
  },

  "& .product-info": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",

    gap: "24px",
  },

  "& .desc-field": {
    flexShrink: 0,

    whiteSpace: "nowrap",
  },

  "& .desc-info": {
    flex: 1,
    minWidth: 0,
  },

  "& .product-info strong, & .product-info p": {
    margin: 0,

    fontSize: "18px",
    lineHeight: 1.5,
  },

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "48%",

    gap: "30px",

    "& .desc-container": {
      gap: "24px",
    },

    "& .product-info": {
      gap: "20px",
    },

    "& .product-info strong, & .product-info p": {
      fontSize: "17px",
    },
  },

  "@media (max-width: 767px)": {
    width: "100%",

    gap: "30px",

    "& .desc-container": {
      gap: "30px",
    },

    "& .product-info": {
      gap: "18px",
    },

    "& .product-info strong, & .product-info p": {
      fontSize: "16px",
    },
  },

  "@media (max-width: 420px)": {
    "& .desc-container": {
      gap: "20px",
    },
  },
});

export const SummaryStyle = styled.div({
  display: "flex",
  flexDirection: "column",

  width: "100%",

  gap: "30px",

  padding: "30px 0",

  borderTop: "1px solid var(--border)",

  "& .summary-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",

    gap: "20px",
  },

  "& .summary-wrapper > strong, & .summary-wrapper > p": {
    margin: 0,

    fontSize: "18px",
  },

  "& .count-wrapper": {
    display: "flex",
    alignItems: "center",

    flexShrink: 0,

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

      fontSize: "18px",

      color: "var(--text-primary)",
    },
  },

  "@media (min-width: 768px) and (max-width: 1023px)": {
    gap: "24px",

    padding: "24px 0",

    "& .summary-wrapper > strong, & .summary-wrapper > p": {
      fontSize: "17px",
    },

    "& .count-wrapper span": {
      fontSize: "17px",
    },
  },

  "@media (max-width: 600px)": {
    display: "none",
  },
});

export const DetailProductStyle = styled.div({
  display: "flex",
  flexDirection: "row",

  justifyContent: "space-between",
  alignItems: "flex-start",

  width: "100%",
  maxWidth: "1300px",

  gap: "70px",

  padding: "0 50px 30px",

  "& strong": { color: "var(--text-primary)" },

  "@media (min-width: 768px) and (max-width: 1023px)": {
    gap: "40px",

    padding: "0 30px 20px",
  },

  "@media (max-width: 767px)": {
    flexDirection: "column",

    gap: "40px",

    padding: "0 20px",
  },
});

export const ButtonContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "12px",

  width: "100%",

  padding: "20px 0 10px",

  backgroundColor: "var(--bg)",

  "& .button-wrapper": {
    display: "flex",

    width: "100%",

    gap: "12px",
  },

  "& .btn": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    minHeight: "52px",

    padding: "12px 20px",

    border: "1px solid var(--text-primary)",
    borderRadius: "var(--radius-md)",

    backgroundColor: "#fff",

    color: "var(--text-primary)",

    fontSize: "18px",
    fontWeight: 500,

    cursor: "pointer",
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

  "& .mobile-wishlist": {
    display: "none",
  },

  "@media (min-width: 768px) and (max-width: 1023px)": {
    "& .btn": {
      minHeight: "48px",

      padding: "10px 14px",

      fontSize: "17px",
    },
  },

  "@media (max-width: 600px)": {
    flexDirection: "row",
    alignItems: "center",

    gap: "10px",

    position: "fixed",
    bottom: 0,
    left: 0,

    zIndex: 30,

    "& .button-wrapper": {
      display: "contents",
    },

    "& .btn": {
      minHeight: "50px",

      padding: "10px",

      fontSize: "16px",
    },

    "& .button-text": {
      display: "none",
    },

    "& .button-icon": {
      display: "inline",
    },

    "& .btn-wishlist": {
      display: "none",
    },

    "& .mobile-wishlist": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: "50px",
      height: "50px",

      flex: "0 0 50px",

      "& > button": {
        position: "static",

        width: "50px",
        height: "50px",

        transform: "none",
      },

      "& > button > svg": {
        width: "22px",
        height: "22px",
      },
    },

    "& .btn-cart": {
      flex: 1,

      width: "auto",

      order: 1,
    },

    "& .btn-buy-now": {
      flex: 1,

      width: "auto",

      order: 2,
    },
  },
});

export const DetailBanner = styled.nav({
  display: "flex",

  width: "100%",
  maxWidth: "1300px",

  // margin: "0 auto",

  borderTop: "1px solid var(--border)",
  borderBottom: "1px solid var(--border)",

  backgroundColor: "var(--bg)",

  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",

  margin: "50px 0",

  "& a": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    flex: 1,

    padding: "20px 12px",

    color: "var(--text-secondary)",

    textAlign: "center",

    fontSize: "18px",

    transition: "background-color 0.2s ease, color 0.2s ease",
  },

  "& a + a": {
    borderLeft: "1px solid var(--border)",
  },

  "@media (hover: hover) and (pointer: fine)": {
    "& a:hover": {
      backgroundColor: "var(--background-secondary)",

      color: "var(--text-primary)",
    },
  },

  "@media (min-width: 768px) and (max-width: 1023px)": {
    "& a": {
      padding: "18px 10px",

      fontSize: "17px",
    },
  },

  "@media (max-width: 767px)": {
    "& a": {
      padding: "16px 6px",

      fontSize: "16px",
    },
  },
});

export const DetailSection = styled.section({
  width: "100%",
  maxWidth: "1300px",

  padding: "0 50px ",
  // paddingTop: "50px",

  scrollMarginTop: "160px",

  "& .section-heading": {
    paddingBottom: "18px",

    borderBottom: "2px solid var(--text-primary)",
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

    fontSize: "36px",
  },

  "& .information-content, & .guide-content": {
    padding: "28px 0",

    color: "var(--text-secondary)",

    fontSize: "18px",
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
    display: "flex",
    alignItems: "center",

    padding: "14px 0",

    borderBottom: "1px solid var(--border)",
  },

  "& dt": {
    width: "140px",

    flexShrink: 0,

    color: "var(--text-primary)",

    fontWeight: 700,
  },

  "& dd": {
    margin: 0,
  },

  "& .detail-image-container": {
    position: "relative",

    width: "100%",
    maxWidth: "700px",

    maxHeight: "1800px",

    margin: "80px auto 0",

    overflow: "hidden",
  },

  "& .detail-image-container.is-expanded": {
    maxHeight: "none",

    overflow: "visible",
  },

  "& .detail-image-content": {
    display: "flex",
    flexDirection: "column",

    width: "100%",
  },

  "& .detail-image-content img": {
    display: "block",

    width: "100%",
    height: "auto",
  },

  "& .detail-image-blur": {
    position: "absolute",

    left: 0,
    right: 0,
    bottom: 0,

    height: "240px",

    pointerEvents: "none",

    background:
      "linear-gradient(to bottom, rgba(250, 248, 244, 0) 0%, rgba(250, 248, 244, 0.35) 35%, rgba(250, 248, 244, 0.85) 72%, rgba(250, 248, 244, 1) 100%)",

    backdropFilter: "blur(2px)",
  },

  "& .detail-more-button": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    maxWidth: "700px",
    height: "56px",

    gap: "10px",

    // margin: "0 auto",

    padding: "0 20px",

    border: "1px solid var(--border)",
    borderRadius: "0 0 8px 8px",

    backgroundColor: "#fff",

    color: "var(--text-primary)",

    fontSize: "18px",
    fontWeight: 500,

    cursor: "pointer",

    transition: "background-color 0.2s ease, border-color 0.2s ease",
  },

  "@media (hover: hover) and (pointer: fine)": {
    "& .detail-more-button:hover": {
      borderColor: "var(--bg-button)",

      backgroundColor: "var(--bg-notice)",
    },
  },

  "& .detail-more-arrow": {
    display: "inline-block",

    transition: "transform 0.3s ease",
  },

  "& .detail-more-arrow.is-expanded": {
    transform: "rotate(180deg)",
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

  "@media (min-width: 768px) and (max-width: 1023px)": {
    padding: "0 30px ",

    "& .section-heading h2": {
      fontSize: "30px",
    },

    "& .information-content, & .guide-content": {
      fontSize: "17px",
    },

    "& .detail-image-container": {
      maxWidth: "600px",
      maxHeight: "1500px",

      marginTop: "70px",
    },

    "& .detail-image-blur": {
      height: "200px",
    },

    "& .detail-more-button": {
      maxWidth: "600px",
      height: "54px",

      fontSize: "17px",
    },
  },

  "@media (max-width: 767px)": {
    // padding: "20px 20px 0",
    padding: "0 20px ",

    scrollMarginTop: "120px",

    "& .section-heading": {
      paddingBottom: "14px",
    },

    "& .section-heading h2": {
      marginTop: "8px",

      fontSize: "24px",
    },

    "& .information-content, & .guide-content": {
      padding: "22px 0",

      fontSize: "16px",
    },

    "& dl > div": {
      alignItems: "flex-start",

      padding: "12px 0",
    },

    "& dt": {
      width: "90px",
    },

    "& .detail-image-container": {
      maxWidth: "100%",
      maxHeight: "1200px",

      marginTop: "50px",
    },

    "& .detail-image-blur": {
      height: "160px",
    },

    "& .detail-more-button": {
      maxWidth: "100%",
      height: "50px",

      padding: "0 16px",

      fontSize: "16px",
    },

    "& .guide-content strong": {
      display: "block",

      width: "auto",

      marginBottom: "2px",
    },
  },
});
