import styled from "@emotion/styled";

export const HeaderStyle = styled.header({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative", //추가

  gap: "50px",

  width: "100%",

  "& .logo-container": {
    width: "230px",

    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  "& .svg-container": {
    width: "45px",
    aspectRatio: "1/1",

    cursor: "pointer",
  },
  "& .search-button": {
    display: "none",
  },

  "& .search-panel": {
    position: "absolute",
    top: "calc(100% + 42px)",
    left: "50%",
    zIndex: 11,
    display: "none",
    alignItems: "center",
    width: "min(54vw, 1000px)",
    transform: "translateX(-50%)",
    overflow: "hidden",
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
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  "& .navigation-container": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
  },
  "& .svg-list": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  },

  "& .navigation": {
    display: "flex",
    alignItems: "center",
    gap: "40px",

    fontSize: "20px",
    width: "100%",
  },
  "& .search-svg": {
    display: "none",
  },
  "& .search-form": {
    display: " flex",

    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",
    padding: "8px 10px",

    border: "1px solid var(--border)",
    borderRadius: "var(--radius-md)",

    backgroundColor: "#fff",
    color: "var(--text-color)",

    fontSize: "17px",
    fontWeight: 500,

    "&::placeholder": {
      color: "var(--text-secondary)",

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    "&:hover": {
      borderColor: "#bb9678",
    },

    "&:focus-within": {
      border: "1px solid #8a664a",
      boxShadow:
        "0 0 0 2px rgba(201, 143, 120, 0.22), 0 0 0 4px rgba(217, 184, 166, 0.12)",
    },
    "& .search-btn": {
      width: "30px",
      height: "30px",
    },
  },

  "@media (max-width: 1023px)": {
    "& .search-button": {
      display: "block",
    },
    "& .search-panel": {
      display: "flex",
      top: "calc(100% + 20px)",
      width: "min(80vw, 640px)",
      height: "58px",
      maxHeight: 0,
      opacity: 0,
      pointerEvents: "none",
      transition: "max-height 0.3s ease, opacity 0.2s ease",
      "&.is-open": {
        maxHeight: "58px",
        opacity: 1,
        pointerEvents: "auto",
      },
    },
    "& .search-backdrop": {
      position: "fixed",
      inset: 0,
      zIndex: 10,
      backgroundColor: "rgba(255, 255, 255, 0.82)",
      opacity: 0,
      pointerEvents: "none",
      transition: "opacity 0.3s ease",
      "&.is-open": {
        opacity: 1,
        pointerEvents: "auto",
      },
    },
    "& .logo-container": {
      width: "170px",
    },
    "& .menu-container": {
      gap: "10px",
    },
    "& .navigation": {
      fontSize: "18px",
      justifyContent: "center",
    },
    "& .svg-list": {
      gap: "30px",
    },
    "& .svg-container": { width: "30px" },
    "& .search-form": { display: "none" },
    "& .navigation-container": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      width: "100%",
    },
  },
  "@media (min-width: 320px) and (max-width: 767px)": {
    justifyContent: "space-between",
    gap: "20px",

    "& .logo-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    "& .menu-container": {
      gap: "30px",
    },

    "& .navigation": {
      display: "none",
    },
    "& .svg-list": {
      "& .cart, & .my-page": {
        display: "none",
      },
    },
    "& .search-panel": {
      top: "calc(100% + 20px)",
      width: "calc(100% - 20px)",
    }, //추가 끝
  },
});
