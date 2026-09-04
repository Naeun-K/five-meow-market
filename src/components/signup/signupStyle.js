import styled from "@emotion/styled";

/* ========================================
   회원가입 전체 Layout
======================================== */

export const SignupLayout = styled.div({
  display: "flex",
  justifyContent: "center",

  width: "100%",

  backgroundColor: "var(--bg)",
});

/* ========================================
   회원가입 Container
======================================== */

export const SignupContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",

  width: "100%",
  maxWidth: "600px",

  padding: "50px",

  boxSizing: "border-box",

  backgroundColor: "var(--bg)",
  color: "var(--text-color)",

  /* ----------------------------------------
     Title
  ---------------------------------------- */

  "& h1": {
    margin: 0,

    color: "var(--text-color)",

    fontFamily: '"Pretendard", sans-serif',
    fontSize: "44px",
    fontWeight: 600,
  },

  /* ----------------------------------------
     Subtitle
  ---------------------------------------- */

  "& .subtitle": {
    display: "flex",
    alignItems: "center",
    gap: "10px",

    color: "var(--text-color)",

    fontFamily: '"Pretendard", sans-serif',
    fontSize: "22px",
    fontWeight: 400,
  },

  "& .paw-icon": {
    width: "28px",
    height: "28px",

    color: "var(--acent-beidge)",

    flexShrink: 0,
  },

  /* ----------------------------------------
     Form
  ---------------------------------------- */

  "& form": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    width: "100%",
  },

  "& label": {
    color: "var(--text-color)",

    fontFamily: '"Pretendard", sans-serif',
    fontSize: "17px",
    fontWeight: 500,
  },

  /* checkbox를 제외한 input */
  '& input:not([type="checkbox"])': {
    width: "100%",
    height: "54px",

    padding: "19px 10px",

    boxSizing: "border-box",

    border: "1px solid var(--border)",
    borderRadius: "var(--radius-md)",

    backgroundColor: "#fff",
    color: "var(--text-color)",

    fontFamily: '"Pretendard", sans-serif',
    fontSize: "17px",
    fontWeight: 500,

    outline: "none",

    "&::placeholder": {
      color: "var(--text-secondary)",

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },

    "&:hover": {
      borderColor: "#bb9678",
    },

    "&:focus": {
      borderColor: "#8a664a",

      boxShadow:
        "0 0 0 2px rgba(201, 143, 120, 0.22), 0 0 0 4px rgba(217, 184, 166, 0.12)",
    },
  },

  /* ----------------------------------------
     Password
  ---------------------------------------- */

  "& .password-input": {
    position: "relative",

    width: "100%",

    "& input": {
      paddingRight: "50px",
    },
  },

  "& .eye-button": {
    position: "absolute",

    top: "50%",
    right: "12px",

    transform: "translateY(-50%)",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "32px",
    height: "32px",

    padding: 0,

    border: "none",
    borderRadius: "50%",

    backgroundColor: "transparent",
    color: "var(--text-secondary)",

    cursor: "pointer",

    zIndex: 2,

    transition: "color 0.2s ease",

    "&:hover": {
      color: "#000",
      backgroundColor: "transparent",
    },

    "&.active": {
      color: "#000",
      backgroundColor: "transparent",
    },
  },

  "& .eye-icon": {
    display: "block",

    width: "16px",
    height: "16px",

    color: "currentColor",

    pointerEvents: "none",
  },

  /* ----------------------------------------
     Password Error
  ---------------------------------------- */

  "& .password-error-input": {
    borderColor: "#eb2d2d",
  },

  "& .password-error": {
    margin: 0,

    color: "#ee2f2f",

    fontFamily: '"Pretendard", sans-serif',
    fontSize: "14px",
    fontWeight: 400,
  },

  /* ========================================
     Tablet
     768px ~ 1023px
  ======================================== */

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "100%",
    maxWidth: "384px",

    padding: "20px 30px",

    gap: "15px",

    "& h1": {
      fontSize: "28px",
    },

    "& .subtitle": {
      gap: "10px",

      fontSize: "16px",
    },

    "& .paw-icon": {
      width: "20px",
      height: "20px",
    },

    "& form": {
      gap: "15px",
    },

    "& label": {
      fontSize: "14px",
    },

    '& input:not([type="checkbox"])': {
      height: "54px",

      padding: "10px",

      fontSize: "14px",
    },

    "& .eye-icon": {
      width: "16px",
      height: "16px",
    },
  },

  /* ========================================
     Mobile
     320px ~ 767px
  ======================================== */

  "@media (min-width: 320px) and (max-width: 767px)": {
    width: "100%",
    maxWidth: "320px",

    padding: "20px",

    gap: "15px",

    "& h1": {
      fontSize: "24px",
    },

    "& .subtitle": {
      gap: "10px",

      fontSize: "16px",
    },

    "& .paw-icon": {
      width: "20px",
      height: "20px",
    },

    "& form": {
      gap: "15px",
    },

    "& label": {
      fontSize: "12px",
    },

    '& input:not([type="checkbox"])': {
      height: "33px",

      padding: "8px 10px",

      fontSize: "12px",
    },

    "& button": {
      height: "33px",

      padding: "8px 10px",

      fontSize: "12px",
    },

    '& input[type="checkbox"]': {
      width: "14px",
      height: "16px",

      flexShrink: 0,
    },

    "& span": {
      fontSize: "15px",
      whiteSpace: "nowrap",
    },

    "& .signup-button": {
      width: "100%",
      height: "35px",

      margin: "0 auto",
      padding: 0,

      fontSize: "16px",
    },

    "& .eye-button": {
      width: "28px",
      height: "28px",

      right: "8px",

      padding: 0,
    },

    "& .eye-icon": {
      width: "14px",
      height: "14px",
    },
  },
});

/* ========================================
   Form Group
======================================== */

export const FormGroup = styled.div({
  display: "flex",
  flexDirection: "column",
  gap: "10px",

  width: "100%",
});

/* ========================================
   Input + Button Row
======================================== */

export const Row = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",

  width: "100%",

  "& input": {
    flex: 1,
    minWidth: 0,
  },

  "& button": {
    flexShrink: 0,

    height: "54px",

    padding: "16px 24px",

    borderRadius: "var(--radius-md)",

    backgroundColor: "var(--acent-beidge)",
    color: "var(--text-primary)",

    fontFamily: '"Pretendard", sans-serif',
    fontSize: "17px",
    fontWeight: 500,
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    "& button": {
      height: "33px",

      padding: "8px 10px",

      fontSize: "12px",
    },
  },
});

/* ========================================
   Agreement
======================================== */

export const Agreement = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "10px",

  width: "100%",

  "& input": {
    width: "14px",
    height: "16px",

    flexShrink: 0,
  },

  "& span": {
    color: "var(--text-color)",

    fontFamily: '"Pretendard", sans-serif',
    fontSize: "16px",
    fontWeight: 400,
  },

  "& strong": {
    color: "var(--text-primary)",

    fontWeight: 600,
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    "& span": {
      fontSize: "12px",
      whiteSpace: "normal",
    },
  },
});

/* ========================================
   Bottom Area
======================================== */

export const BottomArea = styled.div({
  width: "100%",

  "& .signup-button": {
    width: "100%",
    height: "52px",

    borderRadius: "var(--radius-md)",

    backgroundColor: "var(--bg-button)",
    color: "var(--text-button)",

    fontFamily: '"Pretendard", sans-serif',
    fontSize: "17px",
    fontWeight: 600,
  },

  "& .login-area": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",

    marginTop: "20px",

    color: "var(--text-secondary)",

    fontFamily: '"Pretendard", sans-serif',
    fontSize: "16px",

    "& a": {
      color: "var(--text-primary)",

      fontWeight: 500,

      textDecoration: "underline",
      textUnderlineOffset: "6px",
    },
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    "& .signup-button": {
      width: "100%",
      height: "35px",

      fontSize: "16px",
    },

    "& .login-area": {
      marginTop: "15px",

      gap: "10px",

      fontSize: "12px",
    },
  },
});
