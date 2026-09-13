import styled from "@emotion/styled";

export const RelatedProductList = styled.div({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  gap: "30px",

  paddingTop: "30px",
  "@media (max-width: 767px)": {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  "@media (max-width: 400px)": {
    flexDirection: "column",
    // justifyContent: "space-between",
  },
});

export const RelatedProductCard = styled.article({
  display: "flex",
  alignItems: "center",

  width: "100%",

  padding: "24px",

  border: "1px solid var(--border)",
  borderRadius: "12px",

  backgroundColor: "var(--bg)",

  cursor: "pointer",

  "& .product-info": {
    display: "flex",
    flexDirection: "column",

    flex: 1,
    minWidth: 0,

    gap: "8px",

    marginLeft: "30px",
    marginRight: "30px",
  },

  "& .product-name": {
    margin: 0,

    overflow: "hidden",

    fontSize: "18px",
    fontWeight: 500,
    lineHeight: 1.5,

    color: "var(--text-primary)",

    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },

  "& .product-price": {
    fontSize: "18px",
    fontWeight: 700,

    color: "var(--text-primary)",
  },

  "& .button-wrapper": {
    display: "flex",
    flexDirection: "column",

    flexShrink: 0,

    gap: "10px",
  },

  /* Tablet */
  "@media (min-width: 768px) and (max-width: 1023px)": {
    padding: "20px",

    "& .product-info": {
      marginLeft: "20px",
      marginRight: "20px",
    },

    "& .product-name": {
      fontSize: "17px",
    },

    "& .product-price": {
      fontSize: "17px",
    },
  },

  /* Mobile */
  "@media (max-width: 767px)": {
    flexDirection: "column",
    alignItems: "stretch",

    padding: "16px",

    // maxWidth: "300px",
    "& .product-info": {
      flex: "none",

      width: "100%",

      gap: "6px",

      margin: "16px 0 0",
    },

    "& .product-name": {
      fontSize: "16px",

      whiteSpace: "normal",
    },

    "& .product-price": {
      fontSize: "16px",
    },

    "& .button-wrapper": {
      width: "100%",

      gap: "8px",

      marginTop: "20px",
    },
  },
});

export const ProductImageWrapper = styled.div({
  width: "200px",

  flexShrink: 0,

  "& > *": {
    width: "100%",
  },

  /* Tablet */
  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "160px",
  },

  /* Mobile */
  "@media (max-width: 767px)": {
    width: "100%",
    maxWidth: "300px",

    alignSelf: "center",
  },
});

const buttonStyle = {
  minWidth: "140px",
  height: "44px",

  padding: "0 20px",

  borderRadius: "8px",

  fontFamily: "inherit",
  fontSize: "18px",
  fontWeight: 500,

  whiteSpace: "nowrap",

  cursor: "pointer",

  transition: "background-color 0.2s ease, color 0.2s ease",

  /* Tablet */
  "@media (min-width: 768px) and (max-width: 1023px)": {
    fontSize: "17px",
  },

  /* Mobile */
  "@media (max-width: 767px)": {
    width: "100%",
    minWidth: 0,
    height: "46px",

    fontSize: "16px",
  },
};

export const CartButton = styled.button({
  ...buttonStyle,

  border: "1px solid var(--bg-button)",

  backgroundColor: "#fff",
  color: "var(--text-primary)",

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      backgroundColor: "var(--bg-notice)",
    },
  },
});

export const BuyButton = styled.button({
  ...buttonStyle,

  border: "1px solid var(--bg-button)",

  backgroundColor: "var(--bg-button)",
  color: "#fff",

  "@media (hover: hover) and (pointer: fine)": {
    "&:hover": {
      opacity: 0.85,
    },
  },
});
