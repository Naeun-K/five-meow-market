import styled from "@emotion/styled";

/* 채팅 아이콘 + 툴팁 기준 영역 */
export const TooltipWrapper = styled.div({
  position: "relative",

  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
});

/* 채팅 아이콘 */
export const ChatIconStyle = styled.button({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  /* 기존 크기 유지 */
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

    /* 버튼 전체가 아니라 내부 아이콘 크기 */
    width: "45%",
    height: "45%",

    overflow: "visible",
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

/* 툴팁 */
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
