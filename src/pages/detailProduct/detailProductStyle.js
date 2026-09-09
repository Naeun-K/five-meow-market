import styled from "@emotion/styled";

export const DetailProductStyle = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",

  width: "100%",
  "& .desc-container": {
    display: "flex",

    justifyContent: "center",
    alignItems: " flex-start",
    gap: "40px",
    width: "100%",

    "& .desc-info": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "50px",
    },
  },

  "& .button-container": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "18px",

    width: "100%",

    "& .button-wrapper": {
      display: "flex",
      alignItems: "center",
      gap: "18px",
      "& .btn-buy-now": {},
      "& .btn": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "var(--acent-beidge)",
        color: "var(--text-primary)",
      },
    },
  },
});
