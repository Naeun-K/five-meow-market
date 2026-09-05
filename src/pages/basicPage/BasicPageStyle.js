import styled from "@emotion/styled";

export const BasicPageStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px",

  alignSelf: "stretch",

  "@media  (max-width: 1023px)": {
    padding: "30px",
  },
  "@media (min-width: 320px) and (max-width: 767px)": {
    padding: "20px",
  },
});
