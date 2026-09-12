import styled from "@emotion/styled";

export const PhotoWrapper = styled.div({
  maxWidth: " 500px",
  minWidth: " 300px",

  aspectRatio: "1/1",

  borderRadius: "8px",
  "& img": { objectFit: "cover" },
});

export const DescWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "stretch",

  gap: "80px",

  width: "50%",
  "& .desc-container": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "40px",
  },
  "& .product-info": {
    display: "flex",
    flexDirection: "column",
    justifyContent: " center",
    alignItems: "flex-start",
    gap: "35px",
  },
  "@media (max-width:1023px)": {
    justifyContent: "center",
    width: "100%",

    "& .desc-container": {
      justifyContent: "center",

      gap: "100px",
    },
  },
});

export const SummaryStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  padding: "30px 0",

  "& .summary-wrapper": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  "& .count-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    gap: "30px",
    padding: "8px 15px",

    backgroundColor: "#fff",
    border: "1px solid var(--border)",
    borderRadius: "4px",
  },
});

export const DetailProductStyle = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  maxWidth: "1300px",

  padding: "50px",

  width: "100%",

  fontSize: "18px",

  "@media (max-width:1024px)": {
    flexDirection: "column",

    gap: "100px",
  },
});

export const ButtonContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",

  width: "100%",

  "& .button-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "30px",

    width: "100%",
  },
  "& .btn": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 0",
    width: "100%",

    backgroundColor: "var(--acent-beidge)",
    color: "var(--text-primary)",

    borderRadius: "var(--radius-md)",
  },

  "& .btn-buy-now": {
    backgroundColor: "var(--bg-button)",
    color: "var(--text-button)",
  },
});
