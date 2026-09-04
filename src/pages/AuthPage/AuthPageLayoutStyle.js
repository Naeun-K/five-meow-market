import styled from "@emotion/styled";

export const AuthPageLayoutStyle = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",
  gap: 0,

  width: "100%",
  minHeight: "100vh",
  "& .brand-part": {
    width: "50%",
  },
  "& .form-part": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "50%",
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    flexDirection: "column",
    gap: "20px",
    padding: "30px 20px",
    "& .brand-part": {
      width: "100%",
    },
    "& .form-part": { width: "100%" },
  },
});
