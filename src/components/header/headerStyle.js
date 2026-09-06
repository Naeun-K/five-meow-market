import styled from "@emotion/styled";

export const HeaderStyle = styled.header({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  position: "relative", //추가

  gap: "50px",

  width: "100%",

  "& .logo-container": {
    width: "230px",
  },
  "& .svg-container": {
    width: "45px",
    aspectRatio: "1/1",

    cursor: "pointer",
  },
  //추가 시작부분
  "& .search-panel": {
    position: "absolute",
    top: "calc(100% + 42px)",
    left: "50%",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    width: "min(54vw, 1000px)",
    height: "58px",
    transform: "translateX(-50%)",
    borderBottom: "1px solid #333",
    backgroundColor: "rgba(255, 255, 255, 0.96)",
  },
  "& .search-input": {
    flex: 1,
    width: "100%",
    height: "100%",
    padding: "0 14px",
    border: 0,
    background: "transparent",
    fontSize: "20px",
    outline: "none",
  },
  "& .panel-search-button": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "54px",
    height: "54px",
    padding: 0,
    border: 0,
    background: "transparent",
    cursor: "pointer",
  }, //추가 끝부분
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
    //추가 시작
    "& .search-panel": {
      top: "calc(100% + 20px)",
      width: "calc(100% - 20px)",
    }, //추가 끝
  },
});
