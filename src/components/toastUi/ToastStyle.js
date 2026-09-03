import styled from "@emotion/styled";

export const ToastContainer = styled.div(({ $success }) => ({
  // =========================
  // PC : 1024px 이상 (기본)
  // =========================

  position: "fixed",
  top: "24px",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 99,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "480px",
  minHeight: "52px",
  padding: "14px 24px",

  backgroundColor: $success ? "#4CAF50" : "#E74C3C",
  color: "var(--bg)",

  borderRadius: "var(--radius-md)",

  boxShadow: "var(--shadow)",

  fontSize: "16px",
  fontWeight: 500,

  textAlign: "center",

  overflowWrap: "break-word",

  // =========================
  // Tablet : 768px ~ 1023px
  // =========================

  "@media (min-width: 768px) and (max-width: 1023px)": {
    top: "20px",

    width: "420px",
    minHeight: "48px",

    padding: "12px 20px",

    fontSize: "15px",
  },

  // =========================
  // Mobile : 320px ~ 767px
  // =========================

  "@media (min-width: 320px) and (max-width: 767px)": {
    top: "16px",

    width: "calc(100% - 32px)",
    minHeight: "44px",

    padding: "10px 16px",

    borderRadius: "10px",

    fontSize: "14px",
  },
}));
