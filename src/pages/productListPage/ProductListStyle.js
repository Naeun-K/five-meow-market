import styled from "@emotion/styled";

export const PageTitleContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  //   justifyContent: "center",
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
  gap: "50px",
  "& .card-wrapper": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
  },
  "& p": {
    fontSize: "20px",
  },
  "& strong": {
    fontSize: "18px",
  },

  "@media (max-width:1023px)": {
    gridTemplateColumns: "repeat(3,  minmax(0, 1fr))",
    gap: "30px",

    "& p": {
      fontSize: "18px",
    },
    "& strong": {
      fontSize: "17px",
    },
  },
  "@media  (max-width:767px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "20px",
    "& strong": {
      fontSize: "16px",
    },
  },
  "@media (min-width:320px) and (max-width:530px)": {
    gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    gap: "20px",
    "& strong": {
      fontSize: "16px",
    },
  },
});
