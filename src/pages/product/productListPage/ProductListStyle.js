import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ProductPage = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "150px",

  width: "100%",

  minHeight: "100vh",
  maxWidth: "1300px",

  paddingBottom: "100px",

  "@media (max-width: 767px)": {
    gap: "80px",
    paddingBottom: "60px",
  },
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

  "@media (max-width: 1023px)": {
    "& h2": {
      fontSize: "36px",
    },

    "& p": {
      fontSize: "20px",
    },
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    gap: "12px",

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

  "@media (max-width: 1290px)": {
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  },

  "@media (max-width: 1030px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  },

  "@media (max-width: 1023px)": {
    padding: "0 30px",

    "& .card-wrapper": {
      minWidth: 0,
      width: "100%",
    },

    "& p": {
      fontSize: "18px",
      width: "100%",
    },

    "& strong": {
      fontSize: "17px",
    },
  },

  "@media (max-width: 710px)": {},

  "@media (min-width: 320px) and (max-width: 670px)": {
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "50px 12px",
    padding: "0 16px",

    "& .card-wrapper": {
      minWidth: 0,
      maxWidth: "none",
      width: "100%",
      gap: "10px",
    },

    "& p": {
      width: "100%",
      fontSize: "14px",
      lineHeight: 1.4,
      wordBreak: "keep-all",
    },

    "& strong": {
      fontSize: "15px",
    },
  },
});

/* 홈으로 이동 */
export const HomeButton = styled(Link)({
  display: "flex",
  alignItems: "center",
  alignSelf: "flex-start",

  margin: "25px 0 -180px 50px",

  color: "var(--text-color)",
  fontSize: "16px",
  fontWeight: 500,
  textDecoration: "none",

  transition: "color 0.2s ease",

  "&:hover": {
    color: "var(--bg-button)",
  },

  "&:active": {
    color: "var(--bg-button)",
  },

  "@media (max-width: 1023px)": {
    marginLeft: "30px",
  },

  "@media (max-width: 767px)": {
    margin: "20px 0 -80px 20px",
    fontSize: "14px",
  },
});
