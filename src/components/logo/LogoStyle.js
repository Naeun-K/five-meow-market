import styled from "@emotion/styled";

export const LogoStyle = styled.div({
  width: "100%",
  cursor: "pointer",
  /* 🔴 Mobile */
  "@media (min-width: 320px) and (max-width: 767px)": {
    width: "220px",
  },
});
