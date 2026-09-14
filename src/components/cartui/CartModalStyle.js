import styled from "@emotion/styled";

export const Backdrop = styled.div({
  position: "fixed",
  inset: 0,
  zIndex: 1000,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  padding: "20px",

  backgroundColor: "rgba(0, 0, 0, 0.35)",
});

export const Modal = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",

  width: "100%",
  maxWidth: "420px",

  padding: "40px 30px 30px",

  backgroundColor: "#fff",
  borderRadius: "20px",

  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",

  "@media (max-width: 600px)": {
    maxWidth: "360px",
    padding: "32px 20px 20px",
    gap: "20px",
  },
});

export const IconWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "56px",
  height: "56px",

  borderRadius: "50%",

  backgroundColor: "var(--bg-notice)",
  color: "var(--text-primary)",

  fontSize: "28px",
  fontWeight: 700,
});

export const TextWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",

  textAlign: "center",
});

export const Title = styled.h3({
  margin: 0,

  color: "var(--text-primary)",

  fontSize: "20px",
  fontWeight: 700,
});

export const Description = styled.p({
  margin: 0,

  color: "#8A7665",

  fontSize: "15px",
});

export const ButtonWrapper = styled.div({
  display: "flex",
  gap: "10px",

  width: "100%",

  "@media (max-width: 600px)": {
    flexDirection: "column-reverse",
  },
});

const Button = styled.button({
  flex: 1,

  minHeight: "48px",
  padding: "0 16px",

  borderRadius: "12px",

  fontSize: "15px",
  fontWeight: 600,

  cursor: "pointer",

  transition: "background-color 0.2s, color 0.2s",

  "@media (max-width: 600px)": {
    width: "100%",
  },
});

export const ContinueButton = styled(Button)({
  border: "1px solid var(--border)",
  backgroundColor: "#fff",
  color: "var(--text-primary)",

  "&:hover": {
    backgroundColor: "var(--bg-notice)",
  },
});

export const CartButton = styled(Button)({
  border: "1px solid var(--bg-button)",
  backgroundColor: "var(--bg-button)",
  color: "#fff",

  "&:hover": {
    backgroundColor: "#4F3927",
  },
});
