import styled from "@emotion/styled";

export const LoginStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",

  padding: "50px",
  gap: "60px",

  "& .top-nav": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",

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
  "@media (max-width: 1023px)": {
    gap: "50px",
    "& .top-nav": {
      fontSize: "15px",
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
    padding: "28px 0",
    gap: "35px",
    "& .top-nav": {
      order: 1,
    },
    "& .header": {
      "& h2": {
        fontSize: "28px",
      },
    },
    "& .greeting": {
      "& p": {
        fontSize: "18px",
      },
    },
  },
});

export const FormStyle = styled.form({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "60px",

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
    },
    "& .password-container": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 10px",

      backgroundColor: "var(--text-button)",

      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",

      "& .password-input": {
        width: "100%",
        height: "100%",
        border: "none",
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
