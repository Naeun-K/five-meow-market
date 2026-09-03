import styled from "@emotion/styled";

export const LogoStyle = styled.div({
  width: "300px",
  cursor: "pointer",
  "& img": { width: "100%", aspectRatio: " 5/2" },
  "@media (max-width: 1023px)": { width: "250px" },
  "@media (min-width: 320px) and (max-width: 767px)": { width: "200px" },
});
