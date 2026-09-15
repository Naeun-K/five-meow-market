import { css } from "@emotion/react";

export const page = css({
  width: "100%",
  maxWidth: "1300px",
  // boxSizing: "border-box",
  // margin: "0 auto",
  padding: "16px 24px 72px",
  display: "flex",
  flexDirection: "column",
  gap: "100px",
  color: "var(--text-primary)",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.38), rgba(255,255,255,0))",
  borderRadius: "28px",
  "@media (min-width: 768px) and (max-width: 1023px)": {
    padding: "24px 28px 64px",
    gap: "60px",
    borderRadius: "24px",
  },
  "@media (max-width: 767px)": {
    padding: "8px 16px 48px",
    gap: "50px",
    borderRadius: "0",
  },
});

export const pageHeader = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "8px",
  width: "100%",
  padding: "22px 0 4px",
  "@media (min-width: 768px) and (max-width: 1023px)": {
    padding: "12px 0 0",
  },
});

export const pageTitle = css({
  fontSize: "30px",
  fontWeight: 800,
  lineHeight: 1.3,
  color: "var(--text-primary)",
  letterSpacing: "-0.04em",
  "@media (min-width: 768px) and (max-width: 1023px)": {
    fontSize: "28px",
  },
  "@media (max-width: 767px)": {
    fontSize: "26px",
  },
});

export const pageSubtitle = css({
  fontSize: "15px",
  color: "var(--text-secondary)",
  letterSpacing: "-0.02em",
  "@media (max-width: 767px)": {
    fontSize: "15px",
  },
});

export const balanceCard = css({
  width: "100%",
  position: "relative",
  overflow: "hidden",
  background: "linear-gradient(135deg, #745a42 0%, #95765a 100%)",
  border: "none",
  borderRadius: "22px",
  padding: "26px 30px 28px",
  display: "grid",
  gridTemplateColumns: "1fr auto",
  gridTemplateRows: "auto auto",
  rowGap: "28px",
  alignItems: "end",
  boxShadow: "0 14px 30px rgba(97, 72, 50, 0.16)",
  "&::after": {
    content: '"P"',
    position: "absolute",
    right: "24px",
    top: "-24px",
    fontSize: "150px",
    lineHeight: 1,
    fontWeight: 900,
    color: "rgba(255,255,255,0.08)",
    pointerEvents: "none",
  },
  "@media (min-width: 768px) and (max-width: 1023px)": {
    padding: "24px 28px 26px",
    borderRadius: "20px",
    rowGap: "24px",
  },
  "@media (max-width: 767px)": {
    padding: "22px 22px 24px",
    borderRadius: "18px",
    rowGap: "24px",
  },
});

export const balanceLabel = css({
  gridColumn: "1 / -1",
  fontSize: "14px",
  color: "rgba(255,255,255,0.78)",
  fontWeight: 600,
  position: "relative",
  zIndex: 1,
  "@media (max-width: 767px)": {
    fontSize: "15px",
  },
});

export const balanceValue = css({
  gridColumn: "2",
  gridRow: "2",
  fontSize: "32px",
  fontWeight: 800,
  color: "#fff",
  lineHeight: 1.2,
  textAlign: "right",
  position: "relative",
  zIndex: 1,
  "@media (max-width: 767px)": {
    fontSize: "26px",
  },
});

export const balanceCaption = css({
  gridColumn: "1",
  gridRow: "2",
  fontSize: "14px",
  color: "rgba(255,255,255,0.84)",
  textAlign: "left",
  position: "relative",
  zIndex: 1,
  "@media (max-width: 767px)": {
    fontSize: "14px",
  },
});

export const historySection = css({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  "@media (min-width: 768px) and (max-width: 1023px)": {
    gap: "16px",
  },
});

export const sectionTitle = css({
  fontSize: "22px",
  fontWeight: 800,
  color: "var(--text-primary)",
  letterSpacing: "-0.04em",
  "@media (min-width: 768px) and (max-width: 1023px)": {
    fontSize: "21px",
  },
  "@media (max-width: 767px)": {
    fontSize: "22px",
  },
});

export const filterGroup = css({
  display: "flex",
  gap: "8px",
  width: "fit-content",
  padding: "4px",
  borderRadius: "999px",
  backgroundColor: "#eee6de",
  "@media (min-width: 768px) and (max-width: 1023px)": {
    padding: "3px",
  },
});

export const filterButton = (active) =>
  css({
    border: "none",
    padding: "9px 18px",
    borderRadius: "999px",
    backgroundColor: active ? "#fff" : "transparent",
    color: active ? "var(--text-primary)" : "var(--text-secondary)",
    fontWeight: active ? 700 : 500,
    fontSize: "14px",
    boxShadow: active ? "0 2px 8px rgba(97, 72, 50, 0.1)" : "none",
    transition: "all 0.2s ease",
    cursor: "pointer",
  });

export const historyContainer = css({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  width: "100%",
  "&.mobile-history": {
    display: "flex",
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  "&.tablet-history": {
    display: "none",
    border: "1px solid var(--border)",
    borderRadius: "16px",
    backgroundColor: "#fff",
    overflow: "hidden",
    "@media (min-width: 768px) and (max-width: 1023px)": {
      display: "flex",
    },
  },
});

export const historyCard = (variant = "mobile") =>
  css({
    backgroundColor: "#fff",
    border: "1px solid var(--border)",
    borderRadius: variant === "tablet" ? "0" : "16px",
    padding: variant === "tablet" ? "20px 20px 18px" : "20px 16px",
    display: "flex",
    flexDirection: "column",
    gap: variant === "tablet" ? "10px" : "14px",
    width: "100%",
    "@media (min-width: 768px) and (max-width: 1023px)": {
      border: "none",
      borderBottom: "1px solid var(--border)",
      borderRadius: "0",
      padding: "24px 28px",
      gap: "14px",
      "&:last-of-type": {
        borderBottom: "none",
      },
    },
    "@media (min-width: 1024px)": {
      display: "none",
    },
  });

export const historyRow = (variant = "mobile", alignRight = false) =>
  css({
    display: "flex",
    justifyContent: alignRight ? "space-between" : "space-between",
    alignItems: "flex-start",
    gap: "12px",
    width: "100%",
    "@media (min-width: 768px) and (max-width: 1023px)": {
      alignItems: "center",
      flexDirection: variant === "tablet" ? "row" : "column",
      minWidth: 0,
    },
  });

export const historyMeta = css({
  fontSize: "16px",
  lineHeight: 1.4,
  color: "var(--text-primary)",
  flex: 1,
  minWidth: 0,
  wordBreak: "break-word",
  "@media (min-width: 768px)": {
    fontSize: "17px",
  },
});

export const historyDate = css({
  fontSize: "14px",
  color: "var(--text-secondary)",
  lineHeight: 1.5,
  width: "100%",
  "@media (min-width: 768px)": {
    fontSize: "15px",
  },
  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "auto",
    flex: "1 1 auto",
    minWidth: 0,
  },
});

export const historyAmount = (kind) =>
  css({
    fontSize: "18px",
    fontWeight: 700,
    lineHeight: 1.3,
    textAlign: "right",
    whiteSpace: "nowrap",
    color: kind === "earn" ? "var(--text-primary)" : "#9a4b3d",
    "@media (min-width: 768px)": {
      fontSize: "18px",
    },
  });

export const historyLabel = css({
  fontSize: "14px",
  color: "var(--text-secondary)",
  flex: 1,
});

export const historyBalance = css({
  fontSize: "15px",
  color: "var(--text-primary)",
  fontWeight: 600,
  textAlign: "right",
  whiteSpace: "nowrap",
  "@media (min-width: 768px) and (max-width: 1023px)": {
    flex: "0 0 auto",
  },
});

export const historyTable = css({
  width: "100%",
  display: "none",
  border: "1px solid #e8e0d8",
  borderRadius: "18px",
  overflow: "hidden",
  backgroundColor: "rgba(255,255,255,0.7)",
  boxShadow: "0 8px 20px rgba(97, 72, 50, 0.05)",
  "@media (min-width: 1024px)": {
    display: "block",
  },
});

export const tableHeader = css({
  display: "none",
});

export const tableRow = css({
  display: "grid",
  gridTemplateColumns: "1fr 140px",
  gridTemplateRows: "auto auto",
  borderBottom: "1px solid #e8e0d8",
  minHeight: "112px",
  padding: "20px 24px",
  alignItems: "center",
  "&:last-of-type": {
    borderBottom: "none",
  },
  "&:hover": {
    backgroundColor: "rgba(255, 250, 245, 0.9)",
  },
});

export const tableInfo = css({
  gridColumn: "1",
  gridRow: "1",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
});

export const tableCell = (kind, align = "left") =>
  css({
    display: "flex",
    alignItems: "center",
    textAlign: align === "amount" || align === "balance" ? "right" : "left",
    justifyContent:
      align === "amount" || align === "balance" ? "flex-end" : "flex-start",
    color:
      kind === "earn"
        ? "var(--text-primary)"
        : kind === "use"
          ? "#9a4b3d"
          : "var(--text-primary)",
    fontWeight: kind === "date" ? 400 : 700,
    fontSize: kind === "date" ? "13px" : "16px",
    lineHeight: 1.5,
    wordBreak: "break-word",
    ...(kind === "balance"
      ? {
          gridColumn: "1 / -1",
          gridRow: "2",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "18px",
        }
      : {}),
  });

export const emptyState = css({
  width: "100%",
  backgroundColor: "#fff",
  border: "1px solid var(--border)",
  borderRadius: "16px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "56px 20px",
  gap: "16px",
  color: "var(--text-primary)",
  ".mobile-break": {
    display: "none",
  },

  "@media (max-width: 767px)": {
    ".mobile-break": {
      display: "block",
    },
  },
});

export const emptyIcon = css({
  width: "220px",
  height: "auto",
  objectFit: "contain",

  marginBottom: "24px",

  "@media (max-width: 1023px)": {
    width: "180px",
  },

  "@media (max-width: 767px)": {
    width: "140px",
  },
});

export const emptyTitle = css({
  fontSize: "26px",
  fontWeight: 700,
  "@media (max-width: 767px)": {
    fontSize: "23px",
  },
});

export const emptyText = css({
  fontSize: "16px",
  color: "var(--text-secondary)",
  lineHeight: 1.6,
  whiteSpace: "pre-line",
});

export const emptyButton = css({
  // 🔴 SIZE
  width: "260px",
  height: "60px",
  padding: 0,

  border: 0,
  borderRadius: "30px",

  backgroundColor: "var(--acent-beidge)",
  color: "var(--text-primary)",

  fontSize: "18px",
  fontWeight: 600,
  cursor: "pointer",

  transition: "background-color 0.2s ease, color 0.2s ease",

  "&:hover": {
    backgroundColor: "var(--bg-button)",
    color: "var(--text-button)",
  },

  "@media (max-width: 1023px)": {
    width: "230px",
    height: "54px",
    borderRadius: "27px",
    fontSize: "17px",
  },

  "@media (max-width: 767px)": {
    width: "220px",
    height: "48px",
    borderRadius: "24px",
    fontSize: "16px",
  },
});

export const loginNotice = css({
  width: "100%",
  maxWidth: "420px",
  margin: "80px auto",
  textAlign: "center",
  padding: "32px 20px",
  borderRadius: "16px",
  border: "1px solid var(--border)",
  backgroundColor: "#fff",
  color: "var(--text-primary)",
  fontWeight: 700,
  fontSize: "18px",
});
