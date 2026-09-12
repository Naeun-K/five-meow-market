import styled from "@emotion/styled";

export const UpdateStyle = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",

  gap: "50px",

  width: "100%",
  maxWidth: "600px",
  minWidth: 0,

  "& .top-nav": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",

    order: 1,

    width: "177px",
    height: "28px",

    fontSize: "16px",

    "& button": {
      color: "var( --text-secondary)",
      textDecoration: "underline",
    },
  },

  "& .header": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",

    "& h1": {
      fontSize: "44px",
    },

    "& .header-wrapper": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",

      "& p": {
        fontSize: "22px",
      },
    },
  },

  "& input::placeholder": {
    color: "var(--text-secondary)",
    fontSize: "17px",
  },

  "& .info-container": {
    display: "flex",
    gap: "20px",

    width: "100%",

    fontSize: "20px",
  },

  "& .main": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    gap: "25px",

    width: "100%",

    "& .form-style": {
      display: "flex",
      flexDirection: "column",

      gap: "25px",

      width: "100%",

      "& .input-container": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",

        gap: "10px",

        width: "100%",

        fontSize: "17px",

        "& input:not(.password-input)": {
          padding: "8px 20px",

          width: "100%",
          minWidth: 0,
          height: "47px",

          backgroundColor: "var(--text-button)",

          border: "1px solid var(--border)",
          borderRadius: "var(--radius-md)",

          fontSize: "17px",

          transition: "border 0.2s, box-shadow 0.2s",

          "&:hover": {
            border: "1px solid #bb9678",
          },

          "&:focus": {
            border: "1px solid #8a664a",
            boxShadow:
              "0 0 0 2px rgba(201, 143, 120, 0.22), 0 0 0 4px rgba(217, 184, 166, 0.12)",
          },
        },

        "& .phone-container, & .zip-container": {
          display: "flex",
          alignItems: "center",

          gap: "15px",

          width: "100%",

          "& input": {
            flex: 1,
            minWidth: 0,
          },

          "& button": {
            flexShrink: 0,

            padding: "10px",

            backgroundColor: "var(--acent-beidge)",

            borderRadius: "var(--radius-md)",

            textAlign: "center",
          },
        },
      },

      "& button": {
        flexShrink: 0,

        padding: "15px 10px",

        textAlign: "center",
      },
    },

    "& button[type='submit']": {
      width: "100%",

      backgroundColor: "var(--bg-button)",
      borderRadius: "var(--radius-md)",

      textAlign: "center",

      fontSize: "17px",
      color: "var(--text-button)",
    },
  },

  "& .svg-container": {
    width: "30px",
    height: "30px",

    flexShrink: 0,

    "& svg": {
      flexShrink: 0,
    },
  },
  "& .mobile-input-container": {
    "& .label-guide-container": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "30px",

      "& .password-guide": {
        height: "20px",
        lineHeight: "20px",

        flexShrink: 0,
      },
      "& .guide-hidden": {
        visibility: "hidden",
      },

      "& .password-error": {
        fontSize: "16px",
        color: "var(--acent-error)",
      },
      "& .password-check": {
        color: "#2E7D32",
        fontSize: "16px",
      },
    },
    "& .password-container": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      gap: "15px",

      padding: "8px 20px",

      width: "100%",
      minWidth: 0,

      backgroundColor: "var(--text-button)",

      border: "1px solid var(--border)",
      borderRadius: "var(--radius-md)",

      transition: "border 0.2s, box-shadow 0.2s",

      "&:hover": {
        border: "1px solid #bb9678",
      },

      "&:focus-within": {
        border: "1px solid #8a664a",
        boxShadow:
          "0 0 0 2px rgba(201, 143, 120, 0.22), 0 0 0 4px rgba(217, 184, 166, 0.12)",
      },

      "& .password-input": {
        flex: 1,
        minWidth: 0,

        padding: 0,

        border: "none",

        fontSize: "17px",

        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  },

  "& .show-password, & .showPasswordConfirm": {
    color: "var(--text-secondary)",

    cursor: "pointer",

    transition: "color 0.2s ease",

    "&:hover": {
      color: "#000",
    },

    "&.active": {
      color: "#000",
    },
  },

  "@media (max-width: 1023px)": {
    gap: "35px",
    "& .top-nav": {
      fontSize: "15px",
      // marginTop: "90px",
    },

    "& .svg-container": {
      width: "25px",
      height: "25px",
    },

    "& .input-container": {
      fontSize: "16px",
    },

    "& button[type='submit']": {
      fontSize: "16px",
    },

    "& .info-container": {
      fontSize: "16px",
    },

    "& .header": {
      gap: "20px",

      "& h1": {
        fontSize: "36px",
      },

      "& .header-wrapper p": {
        fontSize: "20px",
      },
    },

    "& input::placeholder": {
      fontSize: "16px",
    },

    "& .password-input": {
      width: "100%",
    },
    "& .mobile-input-container": {
      display: "flex",
      flexDirection: "column",

      "& .label-guide-container": {
        display: "contents",
        "& .password-guide": {
          order: 3,
        },
        "& .password-error": {
          fontSize: "15px",
        },
        "& .password-check": {
          fontSize: "15px",
        },
        "& label": {
          order: 1,
        },
      },

      "& .password-container": {
        order: 2,
      },
    },
  },

  "@media (min-width: 320px) and (max-width: 767px)": {
    gap: "35px",
    "& .top-nav": {
      order: 1,
      marginTop: "20px",
    },

    "& .header": {
      gap: "15px",

      "& h1": {
        fontSize: "28px",
      },
    },

    "& .svg-container": {
      width: "20px",
      height: "20px",
    },
    "& .mobile-input-container": {
      "& .label-guide-container": {
        "& .password-error": {
          fontSize: "13.5px",
        },
        "& .password-check": {
          fontSize: "13.5px",
        },
      },
    },
  },
});
