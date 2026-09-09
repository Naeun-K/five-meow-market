import styled from "@emotion/styled";

export const CardContainer = styled.div({
  display: "flex",
  flexDirection: "column",

  alignItems: "center",
  gap: "30px",

  width: "100%",

  "& .labeling-wrapper": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },

  "& .labeling": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "15px",

    "& p": {
      color: "var(--text-primary)",
      fontSize: "28px",
      fontWeight: 600,
    },
  },

  "& .svg-container": {
    width: "25px",
    height: "25px",

    "& .paw-icon": {
      fill: "var(--acent-beidge)",
    },

    "& .bi-arrow-right-short": {
      fill: "var(--text-primary)",
    },
  },

  "& .card-wrapper": {
    width: "100%",
  },

  // 🔴 ADD - 기본적으로 더보기 버튼 숨김
  "& .mobile-more-button": {
    display: "none",
  },

  // 태블릿
  "@media (max-width:1023px)": {
    "& .labeling": {
      "& p": {
        fontSize: "24px",
      },
    },
  },

  // 모바일
  "@media (min-width:320px) and (max-width:767px)": {
    "& .labeling-wrapper": {
      justifyContent: "center",
    },
    "& .labeling": {
      "& p": {
        fontSize: "20px",
      },
    },
    "& .labeling-wrapper > .labeling:last-child": {
      display: "none",
    },

    // 🔴 ADD - 모바일에서만 더보기 버튼 표시
    "& .mobile-more-button": {
      width: "220px",
      height: "57px",

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "6px",

      border: "none",
      borderRadius: "12px",

      backgroundColor: "var(--bg-button)",
      color: "var(--text-button)",

      fontSize: "16px",
      fontWeight: 600,

      cursor: "pointer",
    },
  },
});
