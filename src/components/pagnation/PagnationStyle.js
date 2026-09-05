import styled from "@emotion/styled";

export const PaginationStyle = styled.nav({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",

  "& button": {
    width: "36px",
    height: "36px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    border: "none",
    borderRadius: "8px",
    backgroundColor: "transparent",

    fontSize: "17px",
    cursor: "pointer",
  },

  '& button[aria-current="page"]': {
    backgroundColor: "var(--bg-button)",
    color: "var(--text-button)",
    fontWeight: 600,
  },
  // hover가 가능한 기기에서만 적용
  "@media (hover: hover) and (pointer: fine)": {
    "& button:hover:not(:disabled)": {
      backgroundColor: "#F6F2ED",
      color: "var(--text-primary)",
    },
  },

  "& button:disabled": {
    opacity: 0.3,
    cursor: "default",
  },
  "@media (max-width:1023px)": {
    "& button": {
      width: "30px",
      height: "30px",

      fontSize: "16px",
    },
  },
  "@media (min-width:320px) and (max-width:767px)": {
    "& button": {
      width: "25px",
      height: "25px",
    },
  },
});
