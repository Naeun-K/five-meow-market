import styled from "@emotion/styled";

// export const Backdrop = styled.div({
//   position: "fixed",
//   inset: 0,
//   zIndex: 1000,

//   display: "flex",
//   justifyContent: "center",
//   alignItems: "flex-end",

//   backgroundColor: "rgba(0, 0, 0, 0.4)",
// });

export const Backdrop = styled.div({
  position: "fixed",
  inset: 0,
  zIndex: 1000,

  display: "none",

  justifyContent: "center",
  alignItems: "flex-end",

  backgroundColor: "rgba(0, 0, 0, 0.4)",

  "@media (max-width: 600px)": {
    display: "flex",
  },
});

export const BottomSheet = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "30px",

  width: "100%",
  maxWidth: "600px",

  padding: "15px 30px 30px",

  backgroundColor: "#fff",
  borderRadius: "20px 20px 0 0",

  animation: "bottomSheetUp 0.3s ease-out",

  "@keyframes bottomSheetUp": {
    from: {
      transform: "translateY(100%)",
    },
    to: {
      transform: "translateY(0)",
    },
  },

  "@media (max-width: 490px)": {
    padding: "15px 20px 25px",
  },
});

export const Handle = styled.div({
  width: "45px",
  height: "5px",

  margin: "0 auto",

  backgroundColor: "var(--border)",
  borderRadius: "999px",
});

export const ProductInfo = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "30px",

  width: "100%",
});

export const ProductName = styled.strong({
  fontSize: "18px",
  fontWeight: 600,
  color: "var(--text-primary)",
});

export const ProductRow = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
});

export const Price = styled.strong({
  fontSize: "20px",
  fontWeight: 700,
  color: "var(--text-primary)",
});

export const QuantityControl = styled.div({
  display: "flex",
  alignItems: "center",

  border: "1px solid var(--border)",
  borderRadius: "8px",
  overflow: "hidden",

  "& button": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "45px",
    height: "45px",

    padding: 0,

    border: "none",
    backgroundColor: "#fff",

    fontSize: "20px",
    color: "var(--text-primary)",

    cursor: "pointer",
  },

  "& button:disabled": {
    opacity: 0.3,
    cursor: "default",
  },

  "& span": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "45px",
    height: "45px",

    borderLeft: "1px solid var(--border)",
    borderRight: "1px solid var(--border)",

    fontSize: "16px",
    color: "var(--text-primary)",
  },
});

export const SubmitButton = styled.button({
  width: "100%",

  padding: "17px",

  border: "none",
  borderRadius: "var(--radius-md)",

  backgroundColor: "var(--bg-button)",
  color: "var(--text-button)",

  fontSize: "16px",
  fontWeight: 600,

  cursor: "pointer",
});
