import styled from "@emotion/styled";

export const BasicPageStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  gap: "80px",

  width: "100%",

  "& main": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",

    gap: "80px",

    width: "100%",
  },

  "@media  (max-width: 1023px)": {
    gap: "40px",
  },
  "@media (min-width: 320px) and (max-width: 767px)": {
    gap: "30px",
  },
});
