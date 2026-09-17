import styled from "@emotion/styled";

export const FindPasswordStyle = styled.div({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "min(100%, 520px)",
  maxHeight: "calc(100vh - 40px)",
  overflowY: "auto",
  padding: "40px",
  boxSizing: "border-box",
  backgroundColor: "var(--bg, #fffaf6)",
  border: "1px solid var(--border, #dfd2c9)",
  borderRadius: "16px",
  boxShadow: "0 20px 60px rgb(44 28 18 / 20%)",
  gap: "30px",

  "& .close-button": {
    position: "absolute",
    top: "16px",
    right: "16px",
    display: "grid",
    placeItems: "center",
    width: "32px",
    height: "32px",
    padding: 0,
    color: "var(--text-secondary)",
    border: 0,
    background: "transparent",
    fontSize: "28px",
    lineHeight: 1,
    cursor: "pointer",
  },

  "& .top-nav": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    order: 1,
    fontSize: "16px",

    "& button": {
      color: "var(--text-primary)",
      textDecoration: "underline",
    },
  },

  "& .header": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",

    "& h2": {
      fontSize: "40px",
      fontWeight: 600,
      textAlign: "center",
    },

    "& .greeting": {
      display: "flex",
      alignItems: "center",
      gap: "12px",

      "& p": {
        fontSize: "20px",
      },
    },
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    maxHeight: "calc(100vh - 24px)",
    padding: "32px 20px 24px",
    gap: "20px",

    "& .top-nav": {
      fontSize: "15px",
    },

    "& .header": {
      width: "100%",
      gap: "12px",

      "& h2": {
        fontSize: "28px",
      },

      "& .greeting": {
        justifyContent: "center",
        textAlign: "center",
        whiteSpace: "nowrap",

        "& p": {
          fontSize: "13px",
          lineHeight: 1.3,
        },
      },
    },
  },
});

export const FindPasswordModalOverlay = styled.div({
  position: "fixed",
  inset: 0,
  zIndex: 1000,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: "rgb(28 19 14 / 52%)",

  "@media (min-width: 320px) and (max-width: 767px)": {
    padding: "12px",
  },
});

export const FindPasswordFormStyle = styled.form({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "24px",

  "& .input-container": {
    display: "flex",
    flexDirection: "column",
    gap: "20px",

    "& label": {
      fontSize: "17px",
    },

    "& input": {
      width: "100%",
      padding: "12px 10px",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",
      fontSize: "17px",
      transition: "border 0.2s, box-shadow 0.2s",

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

    "& .phone-input-row": {
      display: "flex",
      alignItems: "center",
      gap: "16px",

      "& input": {
        flex: 1,
        minWidth: 0,
      },
    },

    "& .password-input": {
      position: "relative",
      width: "100%",

      "& input": {
        paddingRight: "50px",
      },
    },

    "& .password-guide": {
      margin: 0,
      fontSize: "14px",
    },

    "& .guide-hidden": {
      visibility: "hidden",
    },

    "& .password-error": {
      color: "var(--acent-error, #eb2d2d)",
    },

    "& .password-check": {
      color: "#2e7d32",
    },

    "& .eye-button": {
      position: "absolute",
      top: "50%",
      right: "12px",
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
      transform: "translateY(-50%)",

      "&:hover, &.active": {
        color: "#000",
        backgroundColor: "transparent",
      },
    },

    "& .eye-icon": {
      display: "block",
      width: "16px",
      height: "16px",
      pointerEvents: "none",
    },

    "& .verify-phone-button": {
      flexShrink: 0,
      height: "48px",
      padding: "0 13px",
      color: "#5c351f",
      backgroundColor: "#f1cfad",
      borderRadius: "var(--radius-md)",
      fontSize: "16px",
      whiteSpace: "nowrap",
      transition: "background-color 0.2s, transform 0.2s",

      "&:hover": {
        backgroundColor: "#e9bd92",
      },

      "&:active": {
        transform: "translateY(1px)",
      },
    },
  },

  "& .find-button": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "45px",
    marginTop: "15px",
    backgroundColor: "var(--bg-button)",
    color: "var(--text-button)",
    fontSize: "17px",
    borderRadius: "var(--radius-md)",
  },

  "@media (max-width: 1023px)": {
    "& label, & input, & .find-button": {
      fontSize: "16px",
    },

    "& .verify-phone-button": {
      fontSize: "16px",
    },
  },

  "@media (max-width: 480px)": {
    gap: "20px",

    "& .input-container": {
      gap: "10px",

      "& label": {
        fontSize: "15px",
      },

      "& input": {
        fontSize: "14px",
        whiteSpace: "nowrap",
      },
    },

    "& .phone-input-row": {
      alignItems: "stretch",
      gap: "10px",

      "& input": {
        minWidth: 0,
      },
    },

    "& .label-guide-container": {
      alignItems: "flex-start",
      flexDirection: "column",
      gap: "6px",

      "& .guide-hidden": {
        display: "none",
      },

      "& .password-guide": {
        fontSize: "12px",
      },
    },

    "& .eye-button": {
      right: "8px",
      width: "28px",
      height: "28px",
    },

    "& .eye-icon": {
      width: "14px",
      height: "14px",
    },

    "& .verify-phone-button": {
      height: "42px",
      padding: "0 7px",
      fontSize: "12px",
    },

    "& .find-button": {
      fontSize: "15px",
    },
  },
});
