import styled from "@emotion/styled";

export const BrandStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "60px",

  width: "100%",
  height: "100%",

  padding: "50px",
  boxSizing: "border-box",

  backgroundColor: "#F7F1E6",

  "& .brand-desc": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",

    "& .phrase-wrapper": {
      color: "var(--text-primary)",
      fontFamily: "Poppins",
      whiteSpace: "pre-wrap",
      textAlign: "center",
      fontSize: "20px",
    },
  },

  "& .svg-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "37.5px",
    height: "37.5px",
  },

  "& .brand-deco": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "25px",

    width: "100%",
    height: "38px",

    fontFamily: "Poppins",
    fontWeight: 600,

    "& .message-container": {
      color: "var(--text-primary)",
      fontSize: "22px",
    },
  },

  "& .cat-image": {
    width: "420px",
    aspectRatio: "15 / 17",
  },

  "@media (min-width: 768px) and (max-width: 1023px)": {
    padding: "30px",

    "& .brand-desc .phrase-wrapper": {
      fontSize: "18px",
    },

    "& .svg-container": {
      width: "25px",
      height: "25px",
    },

    "& .brand-deco .message-container": {
      fontSize: "20px",
    },

    "& .cat-image": {
      width: "300px",
    },
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    height: "auto",
    gap: "20px",
    padding: 0,

    backgroundColor: "var(--bg)",

    "& .brand-desc": {
      display: "none",
    },

    "& .brand-deco .message-container": {
      fontSize: "18px",
    },

    "& .cat-image": {
      width: "250px",
    },
  },
});
