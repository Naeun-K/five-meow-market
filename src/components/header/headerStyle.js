import styled from "@emotion/styled";

export const HeaderStyle = styled.header({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  gap: "50px",

  width: "100%",

  "& .logo-container": {
    width: "230px",
  },
  "& .svg-container": {
    width: "45px",
    aspectRatio: "1/1",
  },
  "& .menu-container": {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    gap: "50px",
  },
  "& .navigation-container": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",

    width: "100%",
    "& .navigation": {
      display: "flex",
      alignItems: "center",
      gap: "50px",

      fontSize: "20px",
    },
  },
  "& .svg-list": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  },
  "@media (max-width: 1250px)": {
    gap: "30px",
    "& .menu-container": {
      gap: "30px",
    },
    "& .navigation-container": {
      gap: "30px",
      "& .navigation": {
        gap: "20px",
      },
    },
    "& .svg-list": {
      gap: "20px",
    },
  },

  "@media (max-width: 1023px)": {
    "& .logo-container": {
      width: "170px",
    },
    "& .menu-container": {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    "& .navigation": {
      fontSize: "18px",
    },
    "& .svg-list": {
      order: -1,
      alignSelf: "flex-end",
    },
    "& .svg-container": { width: "30px" },
  },
  "@media (min-width: 320px) and (max-width: 767px)": {
    flexDirection: "column",
    gap: "20px",

    "& .logo-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .menu-container": {
      flexDirection: "row",
      justifyContent: "center",
      gap: "30px",
    },
    "& .navigation-container": {
      "& .navigation": {
        display: "none",
      },
    },
    "& .svg-list": {
      order: 1,
    },
  },
});
