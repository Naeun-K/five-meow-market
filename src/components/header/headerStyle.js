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
  // top: 0

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  // zIndex: 20,

  gap: "60px",

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
      bottom: "calc(100% - 13px)",

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

  "& .login-link": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    flexShrink: 0,

    padding: "7px 14px",

    border: "1px solid var(--bg-button)",
    borderRadius: "12px",

    fontSize: "18px",

    textDecoration: "none",
    color: "inherit",
    whiteSpace: "nowrap",

    boxSizing: "border-box",

    transition: "background-color 0.2s ease, color 0.2s ease",

    "&:hover": {
      backgroundColor: "var(--bg-button)",
      color: "#fff",
    },
  },

  "& .user-area": {
    position: "relative",

    display: "flex",
    alignItems: "center",

    flexShrink: 0,
  },

  "& .user-menu-button": {
    display: "flex",
    alignItems: "center",

    gap: "4px",

    minWidth: 0,

    padding: 0,

    border: 0,
    background: "transparent",

    font: "inherit",
    color: "inherit",

    cursor: "pointer",
  },

  "& .user-nickname": {
    display: "block",

    maxWidth: "100px",

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    fontSize: "18px",
  },

  "& .user-nim": {
    flexShrink: 0,

    fontSize: "18px",
  },

  "& .user-icon": {
    width: "38px",

    flexShrink: 0,
    aspectRatio: "1/1",
    order: -1,
  },

  "& .user-dropdown": {
    top: "calc(100% + 10px)",
    right: 0,
    left: "auto",
  },

  "& .user-dropdown-info": {
    display: "flex",
    flexDirection: "column",

    gap: "5px",

    padding: "10px 20px",
  },

  "& .user-dropdown-info strong": {
    fontSize: "16px",
  },

  "& .user-dropdown-info span": {
    fontSize: "14px",
    color: "var(--text-secondary)",
  },

  "& .user-dropdown-divider": {
    width: "100%",
    height: "1px",

    margin: "5px 0",

    backgroundColor: "var(--border)",
  },

  "& .user-dropdown > a": {
    padding: "10px 20px",

    color: "var(--text-color)",
    textDecoration: "none",
    whiteSpace: "nowrap",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },

  "& .user-dropdown > button": {
    padding: "10px 20px",

    border: 0,
    background: "transparent",

    color: "var(--text-color)",
    font: "inherit",
    textAlign: "left",
    whiteSpace: "nowrap",

    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },

  "@media (max-width: 1023px)": {
    padding: "50px 30px 20px 30px",
    "& .user-icon": {
      width: "30px",
      // display: "none",
    },
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

      fontSize: "17px",
      gap: "28px",

      justifyContent: "center",

      overflow: "visible",

      width: "100%",

      padding: "4px 0",

      "& .nav-item": {
        flex: "0 0 auto",
      },
    },

    "& .svg-list": {
      gap: "24px",
    },

    "& .svg-container": {
      width: "27px",
    },

    "& .search-form": {
      display: "none",
    },

    "& .navigation-container": {
      display: "flex",

      justifyContent: "center",
      alignItems: "center",

      width: "100%",
    },

    "& .user-nickname": {
      maxWidth: "100px",
      fontSize: "17px",
    },

    "& .user-nim": {
      fontSize: "17px",
    },
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    justifyContent: "space-between",

    gap: "20px",

    padding: "40px 20px 20px 20px",

    // 모바일에서는 로그인 버튼 숨김
    "& .login-link": {
      display: "none",
    },

    // 모바일 헤더는 왼쪽 / 가운데 / 오른쪽 영역을 나눠서 겹치지 않게 함
    "& .menu-container": {
      position: "relative",

      display: "grid",

      gridTemplateColumns: "27px minmax(0, 1fr) auto",

      alignItems: "center",

      width: "100%",

      gap: 0,
    },

    "& .logo-container": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      position: "absolute",

      left: "50%",

      transform: "translateX(-50%)",

      width: "150px",
      maxWidth: "55vw",
    },

    "& .svg-list": {
      gridColumn: "3",

      display: "flex",

      alignItems: "center",

      justifyContent: "flex-end",

      gap: "12px",

      width: "100px",
      minWidth: "100px",

      flexShrink: 0,

      marginLeft: "auto",
    },

    "& .navigation": {
      display: "none",
    },

    "& .navigation-container": {
      display: "none",
    },

    // 모바일에서는 장바구니와 기존 마이페이지 아이콘을 숨김
    "& .svg-list .cart": {
      display: "none",
    },

    "& .svg-list .my-page": {
      display: "none",
    },

    "& .search-button": {
      display: "block",
    },

    "& .search-backdrop": {
      paddingTop: "15vh",
    },

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

    // 모바일 로그인 버튼은 숨김
    // "& .login-link": {
    //   display: "none",
    // },

    "& .user-nickname, & .user-nim": {
      display: "none",
    },

    "& .user-menu-button": {
      gap: 0,
    },

    "& .user-area": {
      flexShrink: 0,
    },

    "& .user-icon": {
      // width: "27px",
      display: "none",
    },

    "& .user-dropdown": {
      right: 0,
    },
  },
});

export const DropdownMenu = styled.div(({ $isOpen, $alignRight }) => ({
  position: "absolute",

  top: "calc(100% + 12px)",

  left: $alignRight ? "auto" : "50%",

  right: $alignRight ? 0 : "auto",

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

  transform: $alignRight
    ? $isOpen
      ? "translateY(0)"
      : "translateY(-50px)"
    : $isOpen
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

    border: 0,

    background: "transparent",

    font: "inherit",

    textAlign: "left",

    cursor: "pointer",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
}));
