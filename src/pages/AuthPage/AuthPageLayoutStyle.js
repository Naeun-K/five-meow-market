import styled from "@emotion/styled";

export const AuthPageLayoutStyle = styled.div({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",

  width: "100%",
  minHeight: "100vh",

  "& .brand-part": {
    display: "flex",

    width: "100%",
    minWidth: 0,
  },

  "& .form-part": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    minWidth: 0,

    padding: "50px",
  },

  /* Tablet */
  "@media (min-width: 768px) and (max-width: 1023px)": {
    "& .form-part": {
      padding: "30px",
    },
  },

  /* Mobile */
  "@media (min-width: 320px) and (max-width: 767px)": {
    gridTemplateColumns: "1fr",

    "& .brand-part": {
      width: "100%",
    },

    "& .form-part": {
      width: "100%",
      padding: "20px",
    },
  },
});
