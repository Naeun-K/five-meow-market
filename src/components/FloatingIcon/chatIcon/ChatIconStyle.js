import styled from "@emotion/styled";

export const TooltipWrapper = styled.div({
  position: "relative",

  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
});

export const ChatIconStyle = styled.button({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "55px",
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

    overflow: "visible",
  },

  // "@media (max-width: 767px)": {
  //   width: "40px",
  // },

  "@media  (max-width: 1023px)": {
    width: "50px",
  },
});

export const Tooltip = styled.div(({ $show }) => ({
  position: "absolute",

  left: "50%",
  bottom: "calc(100% + 10px)",

  padding: "6px 10px",
  borderRadius: "6px",

  backgroundColor: "var(--bg-button)",

  color: "#fff",
  fontSize: "16px",
  whiteSpace: "nowrap",

  opacity: $show ? 1 : 0,
  visibility: $show ? "visible" : "hidden",

  transform: $show
    ? "translateX(-50%) translateY(0)"
    : "translateX(-50%) translateY(5px)",

  transition: "opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease",

  pointerEvents: "none",

  "&::after": {
    content: '""',

    position: "absolute",
    top: "100%",
    left: "50%",

    transform: "translateX(-50%)",

    border: "5px solid transparent",
    borderTopColor: "var(--bg-button)",
  },
}));
