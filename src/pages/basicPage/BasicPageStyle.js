import styled from "@emotion/styled";

export const BasicPageStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  gap: "80px",

  padding: "50px",

  width: "100%",

  "@media  (max-width: 1023px)": {
    padding: "30px",
    gap: "50px",
  },
  "@media (min-width: 320px) and (max-width: 767px)": {
    padding: "20px",
    gap: "40px",
  },
});
