import styled from "@emotion/styled";

export const ForwardBtnStyle = styled.button({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  alignSelf: "flex-start",
  paddingLeft: "70px",

  fontSize: "17px",
  color: "var(--text-secondary)",
  opacity: 0.8,
  fontWeight: 600,

  transition: "color 0.2s, opacity 0.2s",
  "& span": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    font: "inherit",
  },

  "& .forward-svg": {
    aspectRatio: "1/1",
    width: "20px",
    transition: "transform 0.2s",
  },
  "&:hover": { color: "var(--text-primary)", opacity: 1 },
  "&:hover .forward-svg": { transform: "translateX(-10px)" },

  "@media (max-width:767px)": {
    fontSize: "16px",
  },
});
