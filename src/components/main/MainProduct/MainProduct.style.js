/** @jsxImportSource @emotion/react */
export const productList = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "24px",

  "@media (max-width: 1023px)": {
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
    justifyItems: "center",
  },

  "@media (max-width: 767px)": {
    gridTemplateColumns: "1fr",
    gap: "24px",
    justifyItems: "center",
  },
};

export const productItem = {
  minWidth: 0,
  width: "100%",

  "& > article": {
    width: "100%",
    maxWidth: "220px",
  },

  "@media (max-width: 1023px)": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const productInfo = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginTop: "10px",

  "@media (min-width: 320px) and (max-width: 767px)": {
    width: "100%",
    maxWidth: "220px",
    alignItems: "center",
    textAlign: "center",
  },
};

export const productName = {
  fontSize: "18px",
  fontWeight: 600,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

export const productPrice = {
  fontSize: "16px",
  fontWeight: 400,
};
