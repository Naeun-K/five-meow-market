import styled from "@emotion/styled";

export const PaginationStyle = styled.nav({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",

  "& button": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    border: "none",
    borderRadius: "8px",
    backgroundColor: "transparent",

    fontSize: "17px",
    cursor: "pointer",
  },

  "& button:not(.page-button)": { width: "20px", height: "20px" },
  "& button.page-button": { width: "36px", height: "36px" },
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
    // gap: "25px",
    "& button.page-button": {
      width: "30px",
      height: "30px",

      fontSize: "16px",
    },
    // "& button:not(.page-button)": { width: "18px", height: "18px" },
    // "& button.page-button": { width: "36px", height: "36px" },
  },
  "@media (min-width:320px) and (max-width:767px)": {
    gap: "10px",
    "& button.page-button": {
      width: "25px",
      height: "25px",
    },
    "& button:not(.page-button)": { width: "15px", height: "15px" },
  },
});
