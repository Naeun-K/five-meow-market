import styled from "@emotion/styled";

export const ToastContainer = styled.div(({ type }) => ({
  position: "fixed",
  bottom: "30px",
  left: "50%",
  transform: "translateX(-50%)",

  padding: "12px 20px",

  backgroundColor:
    type === "success"
      ? "#4CAF50"
      : type === "error"
        ? "#E74C3C"
        : type === "warning"
          ? "#F39C12"
          : "#333",

  color: "var(--bg)",

  borderRadius: "var( --radius-md)",

  boxShadow: "var(--shadow)",

  fontSize: "14px",
  fontWeight: 500,

  zIndex: 10,
}));
