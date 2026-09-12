import styled from "@emotion/styled";

export const ProductPage = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "150px",

  width: "100%",

  minHeight: "100vh",
  maxWidth: "1300px",

  "@media  (max-width:767px)": { gap: "80px" },
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
  // alignItems: "start",
  alignItems: "start",
  alignContent: "start",
  gap: "150px 40px",

  padding: "0 50px",
  minHeight: "600px",

  "& .card-wrapper": {
    maxWidth: "300px",
    minWidth: "280px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "13px",

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

  "@media (max-width:1290px)": {
    // gap: "60px",
    gridTemplateColumns: "repeat(3,  minmax(0, 1fr))",
  },
  // "@media (max-width:1280px)": { gap: "60px" },
  "@media (max-width:1030px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  "@media (max-width:1023px)": {
    padding: "0 30px",

    "& p": {
      fontSize: "18px",
    },
    "& strong": {
      fontSize: "17px",
    },
  },
  "@media  (max-width:710px)": {
    // gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    // gap: "50px",
    // "& strong": {
    //   fontSize: "16px",
    // },
  },
  "@media (min-width:320px) and (max-width:670px)": {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    gap: "80px",
    padding: "0 20px",
    "& strong": {
      fontSize: "16px",
    },
  },
});
