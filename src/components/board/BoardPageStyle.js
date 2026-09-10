import styled from "@emotion/styled";

/* =========================
   Grid
========================= */

const getGridColumns = (type) => {
  switch (type) {
    case "review":
      return "80px 300px minmax(0, 1fr) 120px 160px 120px";

    case "notice":
    case "qna":
    default:
      return "80px minmax(0, 1fr) 120px 160px 80px";
  }
};

const getTabletGridColumns = (type) => {
  switch (type) {
    case "review":
      return "60px 190px minmax(0, 1fr) 90px 120px 90px";

    case "notice":
    case "qna":
    default:
      return "60px minmax(0, 1fr) 90px 120px 60px";
  }
};

const getMobileGridColumns = (type) => {
  switch (type) {
    case "review":
      return "90px minmax(0, 1fr)";

    case "notice":
    case "qna":
    default:
      return "42px minmax(0, 1fr) 60px";
  }
};

/* =========================
   Board Container
========================= */

export const BoardContainer = styled.section({
  display: "flex",
  flexDirection: "column",

  width: "100%",
  maxWidth: "1300px",
  minWidth: 0,
  minHeight: "850px",

  padding: "0 50px",

  "& > h2": {
    width: "100%",
    minWidth: 0,

    margin: "0 0 70px",

    // Page Title - PC
    fontSize: "44px",
    fontWeight: 600,
    textAlign: "center",

    // color: "var(--text-primary)",
  },

  /* Tablet */
  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "100%",
    minWidth: 0,
    minHeight: "750px",

    padding: "0 30px",

    "& > h2": {
      width: "100%",

      marginBottom: "60px",

      // Page Title - Tablet
      fontSize: "36px",
    },
  },

  /* Mobile */
  "@media (min-width: 320px) and (max-width: 767px)": {
    width: "100%",
    minWidth: 0,
    minHeight: "650px",

    padding: "0 12px",

    "& > h2": {
      width: "100%",

      marginBottom: "40px",

      // Page Title - Mobile
      fontSize: "28px",
    },
  },
});

/* =========================
   Board Header
========================= */

export const BoardHeader = styled.div(({ boardType }) => ({
  display: "grid",
  gridTemplateColumns: getGridColumns(boardType),
  alignItems: "center",

  width: "100%",
  minWidth: 0,
  minHeight: "65px",

  borderTop: "1px solid var(--border)",
  borderBottom: "1px solid var(--border)",

  /* 컬럼명 = Body */
  "& > span": {
    width: "100%",
    minWidth: 0,

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    // Body - PC
    fontSize: "18px",

    textAlign: "center",
  },

  "& .title-header": {
    textAlign: boardType === "review" ? "center" : "left",
  },

  /* =========================
     Tablet
  ========================= */

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "100%",
    minWidth: 0,

    gridTemplateColumns: getTabletGridColumns(boardType),

    "& > span": {
      width: "100%",
      minWidth: 0,

      // Body - Tablet
      fontSize: "17px",
    },
  },

  /* =========================
     Mobile
  ========================= */

  "@media (min-width: 320px) and (max-width: 767px)": {
    width: "100%",
    minWidth: 0,

    gridTemplateColumns: getMobileGridColumns(boardType),

    columnGap: "15px",

    minHeight: "55px",

    "& > span": {
      width: "100%",
      minWidth: 0,

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",

      // Body - Mobile
      fontSize: "16px",
    },

    ...(boardType !== "review" && {
      "& .date-header, & .views-header": {
        display: "none",
      },

      "& .title-header": {
        textAlign: "left",
      },
    }),

    ...(boardType === "review" && {
      "& .number-header, & .writer-header, & .date-header, & .rating-header": {
        display: "none",
      },

      "& .product-header, & .title-header": {
        textAlign: "left",
      },
    }),
  },
}));

/* =========================
   Board Row
========================= */

export const BoardRow = styled.div(({ boardType }) => ({
  display: "grid",
  gridTemplateColumns: getGridColumns(boardType),
  alignItems: "center",

  width: "100%",
  minWidth: 0,

  minHeight: boardType === "review" ? "130px" : "70px",

  borderBottom: "1px solid var(--border)",

  /* =========================
     기본 게시판 글자
     번호 / 제목 / 작성자 등
     = Body
  ========================= */

  "& > *": {
    width: "100%",
    minWidth: 0,

    // Body - PC
    fontSize: "18px",

    textAlign: "center",
  },

  /* 번호 = Body */

  "& .number-cell": {
    width: "100%",
    minWidth: 0,

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    // Body - PC
    fontSize: "18px",
  },

  "& .notice-number": {
    fontWeight: 600,
  },

  /* =========================
     제목 = Body
  ========================= */

  "& .title": {
    width: "100%",
    minWidth: 0,

    overflow: "hidden",

    // Body - PC
    fontSize: "18px",

    textAlign: "left",
  },

  "& .title-main": {
    display: "flex",
    alignItems: "center",
    gap: "15px",

    width: "100%",
    minWidth: 0,

    overflow: "hidden",

    // Body - PC
    fontSize: "18px",
  },

  "& .title-text": {
    display: "block",

    width: "100%",
    minWidth: 0,

    flex: "1 1 0",

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    // Body - PC
    fontSize: "18px",
  },

  /* =========================
     작성자 = Body
  ========================= */

  "& .writer-cell": {
    width: "100%",
    minWidth: 0,

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    // Body - PC
    fontSize: "18px",
  },

  /* =========================
     모바일용 날짜
  ========================= */

  "& .mobile-date": {
    display: "none",
  },

  /* =========================
     NEW = Badge
  ========================= */

  "& .new-badge": {
    width: "auto",
    minWidth: "auto",

    flexShrink: 0,

    padding: "2px 5px",

    backgroundColor: "var(--bg-button)",
    color: "#fffdf9",

    // Badge - PC
    fontSize: "14px",
    fontWeight: 500,
  },

  /* =========================
     자물쇠
  ========================= */

  "& .secret": {
    width: "20px",
    minWidth: "20px",

    flexShrink: 0,
  },

  /* =========================
     댓글 수 = Secondary
  ========================= */

  "& .comment-count": {
    width: "auto",
    minWidth: "auto",

    flexShrink: 0,

    // Secondary - PC
    fontSize: "16px",

    color: "var(--text-secondary)",
  },

  /* =========================
     작성일 / 조회 = Secondary
  ========================= */

  "& .date, & .views": {
    width: "100%",
    minWidth: 0,

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    // Secondary - PC
    fontSize: "16px",

    color: "var(--text-secondary)",
  },

  /* =========================
     SVG
  ========================= */

  "& .svg-container": {
    display: "flex",
    alignItems: "center",

    width: "20px",
    minWidth: "20px",
    aspectRatio: "1 / 1",

    flexShrink: 0,

    color: "var(--text-secondary)",
  },

  /* ==================================================
     Tablet 768px ~ 1023px
  ================================================== */

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "100%",
    minWidth: 0,

    gridTemplateColumns: getTabletGridColumns(boardType),

    /* 기본 = Body 17px */

    "& > *": {
      width: "100%",
      minWidth: 0,

      fontSize: "17px",
    },

    "& .number-cell": {
      width: "100%",
      minWidth: 0,

      fontSize: "17px",
    },

    "& .title": {
      width: "100%",
      minWidth: 0,

      fontSize: "17px",
    },

    "& .title-main": {
      width: "100%",
      minWidth: 0,

      gap: "10px",

      fontSize: "17px",
    },

    "& .title-text": {
      width: "100%",
      minWidth: 0,

      fontSize: "17px",
    },

    "& .writer-cell": {
      width: "100%",
      minWidth: 0,

      fontSize: "17px",
    },

    /* Secondary = 16px */

    "& .date, & .views, & .comment-count": {
      fontSize: "16px",
    },

    /* Badge = 14px */

    "& .new-badge": {
      width: "auto",
      minWidth: "auto",

      fontSize: "14px",
    },

    "& .secret, & .svg-container": {
      width: "20px",
      minWidth: "20px",
    },
  },

  /* ==================================================
     Mobile 320px ~ 767px
  ================================================== */

  "@media (min-width: 320px) and (max-width: 767px)": {
    width: "100%",
    minWidth: 0,

    gridTemplateColumns: getMobileGridColumns(boardType),

    columnGap: "15px",

    minHeight: boardType === "review" ? "105px" : "80px",

    /* =========================
       기본 = Body 16px
    ========================= */

    "& > *": {
      width: "100%",
      minWidth: 0,

      fontSize: "16px",
    },

    /* 번호 = Body */

    "& .number-cell": {
      width: "100%",
      minWidth: 0,

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",

      fontSize: "16px",
    },

    /* 제목 = Body */

    "& .title-cell": {
      width: "100%",
      minWidth: 0,

      padding: "10px 0",

      overflow: "hidden",

      fontSize: "16px",
    },

    "& .title-main": {
      display: "flex",
      alignItems: "center",
      gap: "6px",

      width: "100%",
      minWidth: 0,

      overflow: "hidden",

      fontSize: "16px",
    },

    "& .title-text": {
      display: "block",

      width: "100%",
      minWidth: 0,

      flex: "1 1 0",

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",

      fontSize: "16px",
    },

    /* 작성자 = Body */

    "& .writer-cell": {
      width: "100%",
      minWidth: 0,

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",

      fontSize: "16px",
    },

    /* =========================
       Secondary = 15px
    ========================= */

    "& .mobile-date": {
      display: "block",

      width: "100%",
      minWidth: 0,

      marginTop: "5px",

      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",

      fontSize: "15px",

      color: "var(--text-secondary)",
    },

    "& .date, & .views, & .comment-count": {
      fontSize: "15px",

      color: "var(--text-secondary)",
    },

    /* =========================
       Badge = 13px
    ========================= */

    "& .new-badge": {
      width: "auto",
      minWidth: "auto",

      flexShrink: 0,

      fontSize: "13px",
    },

    /* 아이콘 */

    "& .secret, & .svg-container": {
      width: "18px",
      minWidth: "18px",

      flexShrink: 0,
    },

    /* =========================
       공지사항 / Q&A
    ========================= */

    ...(boardType !== "review" && {
      "& .date-cell, & .views-cell": {
        display: "none",
      },

      "& .number-cell": {
        alignSelf: "start",

        paddingTop: "12px",
      },

      "& .writer-cell": {
        alignSelf: "start",

        paddingTop: "12px",
      },
    }),

    /* =========================
       리뷰
    ========================= */

    ...(boardType === "review" && {
      "& .number-cell, & .writer-cell, & .date-cell, & .rating-cell": {
        display: "none",
      },
    }),
  },
}));

/* =========================
   Product Info
   상품명 = Body
========================= */

export const ProductInfo = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "15px",

  width: "100%",
  minWidth: 0,

  // Body - PC
  fontSize: "18px",

  "& img": {
    width: "85px",
    maxWidth: "85px",
    aspectRatio: "1 / 1",

    objectFit: "cover",
    borderRadius: "8px",

    flexShrink: 0,
  },

  "& span": {
    display: "block",

    width: "100%",
    minWidth: 0,

    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",

    // Body - PC
    fontSize: "18px",

    textAlign: "left",
  },

  /* Tablet */

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "100%",
    minWidth: 0,

    gap: "10px",

    // Body - Tablet
    fontSize: "17px",

    "& img": {
      width: "65px",
      maxWidth: "65px",
    },

    "& span": {
      width: "100%",
      minWidth: 0,

      // Body - Tablet
      fontSize: "17px",
    },
  },

  /* Mobile */

  "@media (min-width: 320px) and (max-width: 767px)": {
    width: "100%",
    minWidth: 0,

    gap: "6px",

    paddingRight: "8px",

    // Body - Mobile
    fontSize: "16px",

    "& img": {
      width: "50px",
      maxWidth: "50px",

      borderRadius: "6px",
    },

    "& span": {
      width: "100%",
      minWidth: 0,

      display: "none",

      // Body - Mobile
      fontSize: "16px",
    },
  },
});

/* =========================
   Rating
========================= */

export const Rating = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  minWidth: 0,

  "& .svg-container": {
    width: "30px",
    minWidth: 0,
    aspectRatio: "1 / 1",

    flexShrink: 1,

    color: "var(--bg-button)",
  },

  /* Tablet */

  "@media (min-width: 768px) and (max-width: 1023px)": {
    width: "100%",
    minWidth: 0,

    "& .svg-container": {
      width: "24px",
    },
  },

  /* Mobile */

  "@media (min-width: 320px) and (max-width: 767px)": {
    width: "100%",
    minWidth: 0,

    "& .svg-container": {
      width: "20px",
    },
  },
});
