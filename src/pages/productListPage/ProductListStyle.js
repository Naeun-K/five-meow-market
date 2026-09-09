import styled from "@emotion/styled";

export const ProductPage = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",

  width: "100%",

  "@media  (max-width:767px)": { gap: "40px" },
});

export const PageTitleContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  "& h2": {
    fontWeight: 700,
    fontSize: "44px",
  },
  "& p": {
    fontSize: "22px",
  },
  "@media (max-width:1023px)": {
    "& h2": {
      fontSize: "36px",
    },
    "& p": {
      fontSize: "20px",
    },
  },
  "@media (min-width:320px) and (max-width:767px)": {
    "& h2": {
      fontSize: "28px",
    },
    "& p": {
      fontSize: "18px",
    },
  },
});

export const CardContainer = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  alignItems: "start",
  gap: "35px",

  padding: "0 50px",
  minHeight: "1040px",

  "& .card-wrapper": {
    maxWidth: "380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",

    cursor: "pointer",
  },
  "& p": {
    width: "250px",
    textAlign: "center",
    fontSize: "20px",
  },
  "& strong": {
    fontSize: "18px",
  },

  "@media (max-width:1230px)": {
    gridTemplateColumns: "repeat(3,  minmax(0, 1fr))",

    padding: "0 30px",

    "& p": {
      fontSize: "18px",
    },
    "& strong": {
      fontSize: "17px",
    },
  },
  "@media  (max-width:900px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "20px",

    padding: "0 20px",

    "& strong": {
      fontSize: "16px",
    },
  },
  "@media (min-width:320px) and (max-width:575px)": {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",

    "& strong": {
      fontSize: "16px",
    },
  },
});
