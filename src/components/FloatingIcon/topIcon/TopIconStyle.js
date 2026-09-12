import styled from "@emotion/styled";

export const TopIconStyle = styled.button({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "80px",
  aspectRatio: "1 / 1",

  flexShrink: 0,

  padding: 0,

  border: "1px solid var(--border)",
  borderRadius: "50%",

  backgroundColor: "#fff",
  color: "var(--text-primary)",

  cursor: "pointer",

  transition:
    "transform 0.2s ease, border-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    transform: "scale(1.06)",

    borderColor: "var(--bg-button)",
    color: "var(--bg-button)",

    boxShadow: "0 3px 10px rgba(97, 72, 50, 0.15)",
  },

  "&:focus-visible": {
    outline: "2px solid var(--bg-button)",
    outlineOffset: "3px",
  },

  "& svg": {
    display: "block",

    width: "45%",
    height: "45%",
  },

  /* 모바일 */
  "@media (max-width: 767px)": {
    width: "50px",
  },

  /* 태블릿 */
  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "60px",
  },
});
