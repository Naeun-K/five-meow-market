import { css } from "@emotion/react";

export const categorySection = css({
  width: "100%",

  
  
  
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",
  padding: "0 50px",
  h2: {
    color: "var( --text-primary)",
    
    textAlign: "center",
    fontSize: "28px",
    fontWeight: 600,
  },

  ".section-title": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
  },
  ".paw-container": { aspectRatio: "1/1", width: "28px" },
  ".header": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
  },
  "& .guide-message": { display: "none" },

  "@media (max-width: 1023px)": {
    padding: "0 30px",
    h2: {
      fontSize: "24px",
    },
  },
  "@media (max-width: 767px)": {
    
    padding: 0,
    h2: {
      fontSize: "20px",
    },

    "&  .guide-message": {
      display: "flex",
      alignItems: "center",
      gap: "15px",

      fontSize: "18px",
      fontWeight: 600,
      color: "var(--text-secondary)",
    },
  },
});
export const titleWrapper = css({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  justifyContent: "center",
  alignItems: "center",
  "& span": { display: "none" },
  "@media (max-width:767px)": {
    "& span": {
      display: "flex",
      alignItems: "center",
      gap: "15px",

      fontSize: "18px",
      fontWeight: 600,
      color: "var(--text-secondary)",
    },
  },
});
export const categoryList = css({
  
  
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "40px",

  width: "100%",
  
  

  "@media (max-width: 1023px)": { gap: 0 },
  "@media (max-width: 767px)": {
    

    justifyContent: "flex-start",
    gap: "20px",

    overflowX: "auto",
    overflowY: "hidden",

    scrollSnapType: "x mandatory",

    padding: "0 20px",

    scrollbarWidth: "none",

    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const categoryItem = css({
  minWidth: "136px",
  width: "136px",
  
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",

  strong: {
    marginTop: "8px",
    fontSize: "22px",
    fontWeight: 600,
  },

  "@media (max-width: 767px)": {
    width: "128px",

    flexShrink: 0,

    scrollSnapAlign: "center",

    gap: "10px",

    
    
    
  },
});

export const imageBox = css({
  width: "130px",
  height: "130px",
  padding: "5px",
  border: "1px solid #b5b5b5",
  borderRadius: "50%",
  overflow: "hidden",
  backgroundColor: "#fbf0e0",
  cursor: "pointer",

  transition: "transform 0.2s ease, box-shadow 0.2s ease",

  "&:hover": {
    transform: "translateY(-3px)",
    backgroundColor: "#F2DFC6", 
    borderColor: "#9A806B", 
    boxShadow: "0 5px 12px rgba(0, 0, 0, 0.2)",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  "@media (max-width: 767px)": {
    width: "100%",
    
    height: "auto",
    aspectRatio: "1/1",
  },
});

export const tags = css({
  
  display: "flex",
  
  minWidth: 0,

  
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "5px",

  marginTop: "6px",

  span: {
    padding: "4px 8px",

    borderRadius: "20px",

    backgroundColor: "#F3E7DC",
    color: "var(--text-primary)",
    maxWidth: "100%",
    fontSize: "16px",
    fontWeight: 600,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  
  
  
  
  
});
