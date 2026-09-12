import styled from "@emotion/styled";

export const FloatingIconStyle = styled.div(({ $isVisible }) => ({
  position: "fixed",
  right: "80px",
  bottom: "60px",
  zIndex: 9,

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",

  opacity: $isVisible ? 1 : 0,
  visibility: $isVisible ? "visible" : "hidden",

  transform: $isVisible ? "translateY(0)" : "translateY(20px)",

  pointerEvents: $isVisible ? "auto" : "none",

  transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",

  /* 모바일 */
  "@media (max-width: 767px)": {
    right: "20px",
    bottom: "20px",

    gap: "8px",
  },

  /* 태블릿 */
  "@media (min-width: 768px) and (max-width: 1023px)": {
    right: "30px",
    bottom: "30px",

    gap: "8px",
  },
}));
