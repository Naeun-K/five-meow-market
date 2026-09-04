import styled from "@emotion/styled";

export const LoginStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100%",
  maxWidth: "520px",
  margin: "0 auto",
  minHeight: "1030px",

  padding: "10% 50px 50px",
  gap: "30px",

  "& .top-nav": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",

    order: 1,

    width: "177px",
    height: "28px",

    fontSize: "16px",

    "& a": {
      color: "var( --text-primary)",
      textDecoration: "underline",
    },
  },

  "& .header": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",

    "& h2": {
      fontSize: "44px",
      fontStyle: "normal",
      fontWeight: 600,
    },

    "& .greeting": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "12px",

      "& p": {
        fontSize: "22px",
      },
    },
  },
  "& .svg-container": {
    width: "30px",
    height: "30px",
  },
  "& .show-password": {
    width: "20px",
    height: "20px",
    flexShrink: 0,

    color: "var(--text-secondary)",
    cursor: "pointer",
    transition: "color 0.2s ease",

    "&:hover": {
      color: "#000",
    },

    "&.active": {
      color: "#000",
    },

    "& svg": {
      width: "100%",
      height: "100%",
      color: "currentColor",
      pointerEvents: "none",
    },
  },
  "@media (max-width: 1023px)": {
    minHeight: "800px",
    gap: "45px",
    "& .top-nav": {
      fontSize: "15px",
      marginTop: "90px",
    },
    "& .header": {
      "& h2": {
        fontSize: "36px",
      },
    },
    "& .greeting": {
      "& p": {
        fontSize: "20px",
      },
    },
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    minHeight: "auto",
    justifyContent: "flex-start",
    padding: "0",
    gap: "15px",

    "& .top-nav": {
      order: 1,
      marginTop: "20px",
    },
    "& .header": {
      "& h2": {
        fontSize: "28px",
      },
    },
    "& .greeting": {
      fontSize: "18px",
      marginBottom: "30px",
    },
  },
});

export const FormStyle = styled.form({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  width: "100%",
  height: "450px",

  "& .input-container": {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    gap: "20px",

    "& label": {
      fontSize: "17px",
    },
    "& .email-input": {
      width: "100%",
      padding: "12px 10px",

      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      fontSize: "17px",

      "&::placeholder": {
        color: "var(--text-secondary)",
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

    "& .password-container": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 10px",

      backgroundColor: "#fff",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",

      "&:hover": {
        borderColor: "#bb9678",
      },

      // 비밀번호 input 클릭했을 때
      "&:focus-within": {
        borderColor: "#8a664a",
        boxShadow:
          "0 0 0 2px rgba(201, 143, 120, 0.22), 0 0 0 4px rgba(217, 184, 166, 0.12)",
      },

      "& .password-input": {
        width: "100%",
        height: "100%",

        border: "none",
        outline: "none",
        background: "transparent",

        fontSize: "17px",
      },
    },
  },

  "& .options-container": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    width: "100%",

    fontSize: "16px",

    "& .save-info-container": {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      gap: "15px",
    },
  },

  "& .login-button": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "45px",

    backgroundColor: "var(--bg-button)",

    color: "var(--text-button)",
    fontSize: "17px",

    borderRadius: "var(--radius-md)",
  },

  "@media (min-width: 320px) and (max-width: 1023px)": {
    "& label": {
      fontSize: "16px",
    },
    "& .email-input": {
      fontSize: "16px",
    },

    "& .password-input": {
      fontSize: "16px",
    },

    "& .options-container": {
      fontSize: "15px",
    },

    "& .login-button": {
      fontSize: "16px",
    },
  },
});
