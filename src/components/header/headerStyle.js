import styled from "@emotion/styled";

export const WholeStyle = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",

  position: "sticky",
  top: 0,

  zIndex: 20,

  backgroundColor: "var(--bg)",
});

export const HeaderStyle = styled.header({
  // position: "sticky",
  // top: 0,

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  // zIndex: 20,

  gap: "80px",

  width: "100%",
  maxWidth: "1300px",

  padding: "80px 50px 20px 50px",

  // borderRadius: "var(--radius-md)",

  "& .logo-container": {
    width: "280px",

    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },
  "& .svg-container": {
    width: "35px",
    aspectRatio: "1/1",

    cursor: "pointer",
  },
  "& .search-button": {
    display: "none",
  },
  "& .search-backdrop": {
    position: "fixed",
    inset: 0,
    zIndex: 10,

    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",

    paddingTop: "20vh",

    backgroundColor: "rgba(255, 255, 255, 0.82)",

    opacity: 0,
    pointerEvents: "none",

    transition: "opacity 0.3s ease",

    "&.is-open": {
      opacity: 1,
      pointerEvents: "auto",
    },
  },

  "& .search-wrapper": {
    display: "flex",
    alignItems: "center",
    gap: "50px",

    width: "min(60vw, 1100px)",
    "& .close-icon": {
      width: "30px",
      height: "30px",

      cursor: "pointer",
    },
  },

  "& .search-panel": {
    display: "flex",
    alignItems: "center",
    flex: 1,

    borderBottom: "1px solid #333",
    backgroundColor: "rgba(255, 255, 255, 0.96)",

    opacity: 0,
    transform: "translateY(-10px)",

    transition: "opacity 0.3s ease, transform 0.3s ease",

    "&.is-open": {
      opacity: 1,
      transform: "translateY(0)",
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
    },
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
  "& .nav-item": {
    position: "relative",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // gap: "5px",
    gap: 0,

    "& > button": {
      padding: 0,
      border: 0,
      background: "none",
      color: "inherit",
      font: "inherit",
      textDecoration: "none",
      whiteSpace: "nowrap",
      cursor: "pointer",
    },
    "& .nav-cat-container": {
      width: "45px",
      aspectRatio: "1/1",

      position: "absolute",

      // width: "40px",
      // height: "40px",

      left: "50%",
      bottom: "calc(100% - 8px)",

      transform: "translateX(-50%)",

      objectFit: "contain",
      pointerEvents: "none",
    },
  },
  "& .navigation .nav-item > button": {
    position: "relative",

    "&::after": {
      content: '""',

      position: "absolute",
      left: 0,
      bottom: "-6px",

      width: "100%",
      height: "2px",

      backgroundColor: "var(--text-primary)",

      transform: "scaleX(0)",
      transformOrigin: "center",

      transition: "transform 0.3s ease",
    },

    "&:hover::after": {
      transform: "scaleX(1)",
    },
  },

  // "& .nav-item button": {
  //   position: "relative",

  //   "&::after": {
  //     content: '""',
  //     position: "absolute",

  //     left: 0,
  //     bottom: "-5px",

  //     width: "100%",
  //     height: "2px",

  //     backgroundColor: "var(--text-primary)",

  //     transform: "scaleX(0)",
  //     transformOrigin: "center",
  //     transition: "transform 0.2s ease",
  //   },
  // },

  // hover하면 밑줄
  "& .nav-item:hover > button::after": {
    transform: "scaleX(1)",
  },

  // 현재 페이지면 hover하지 않아도 밑줄
  "& .nav-item.active > button::after": {
    transform: "scaleX(1)",
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

    border: "1px solid var(--text-secondary)",
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
    padding: "50px 30px 20px 30px",

    gap: "70px",

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

    "& .logo-container": {
      width: "220px",
    },
    "& .menu-container": {
      gap: "10px",
    },
    "& .navigation": {
      display: "flex",
      fontSize: "18px",
      gap: "50px",
      justifyContent: "center",
      overflow: "visible",
      width: "100%",
      padding: "4px 0",
      "& .nav-item": {
        flex: "0 0 auto",
      },
    },
    "& .svg-list": {
      gap: "30px",
    },
    "& .svg-container": { width: "27px" },
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
    gap: " 20px 20px 30px 20px",

    padding: "40px 20px 20px 20px",

    "& .logo-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      width: "170px",
    },
    "& .menu-container": {
      gap: "30px",
    },

    "& .navigation": {
      display: "none",
    },
    "& .navigation-container": {
      display: "none",
    },
    "& .svg-list": {
      "& .cart, & .my-page": {
        display: "none",
      },
    },
    "& .search-backdrop": { paddingTop: "15vh" },
    "& .search-wrapper": {
      width: "100%",
      flexDirection: "column",
      gap: "15px",

      "& .close-icon": {
        order: -1,
        alignSelf: "flex-end",
        marginRight: "20px",
      },
      "& .search-input::placeholder": {
        fontSize: "15.5px",
      },
    },
  },
});

export const DropdownMenu = styled.div(({ $isOpen }) => ({
  position: "absolute",
  top: "calc(100% + 12px)",
  left: "50%",
  zIndex: 12,
  display: "flex",
  flexDirection: "column",
  minWidth: "170px",
  padding: "10px 0",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-md)",
  backgroundColor: "#fff",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",

  opacity: $isOpen ? 1 : 0,
  visibility: $isOpen ? "visible" : "hidden",
  pointerEvents: $isOpen ? "auto" : "none",

  transform: $isOpen
    ? "translateX(-50%) translateY(0)"
    : "translateX(-50%) translateY(-50px)",

  transition: $isOpen
    ? "opacity 0.3s ease, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)"
    : "opacity 0.2s ease, transform 0.25s ease",

  "& > button": {
    padding: "10px 20px",
    color: "var(--text-color)",
    textDecoration: "none",
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
}));
