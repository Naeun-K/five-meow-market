import styled from "@emotion/styled";

export const CardContainer = styled.div({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  gap: "30px",

  width: "100%",
  "& .labeling-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  "& .labeling": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",
    "& p": {
      color: "var(--text-primary)",
      fontSize: "28px",
      fontWeight: 600,
    },
  },
  " & .svg-container": {
    width: "25px",
    height: "25px",
    "& .paw-icon": {
      fill: "var(--acent-beidge)",
    },
    "& .bi-arrow-right-short": {
      fill: "var(--text-primary)",
    },
  },
  "& .card-wrapper": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  },
  "@media (max-width:1023px)": {
    "& .labeling": {
      "& p": {
        fontSize: "24px",
      },
    },
  },
  "@media (min-width:320px) and (max-width:767px)": {
    "& .labeling": {
      "& p": {
        fontSize: "20px",
      },
    },
  },
});
