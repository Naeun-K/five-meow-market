import styled from "@emotion/styled";

// 전체 감싸는 Wrapper
export const Wrapper = styled.div({
  display: "flex",

  padding: "0 24px 24px",
  flexDirection: "column",
  alignItems: "center",
  gap: "100px",

  width: "100%",
  maxWidth: "1300px",

  "@media (max-width: 1023px)": {
    gap: "80px",
  },

  "@media (max-width: 767px)": {
    gap: "40px",
  },
});

// 타이틀(장바구니 / 0개상품) 묶는 Wrapper
export const TitleWrapper = styled.div({
  display: "flex",
  width: "100%",
  paddingBottom: "24px",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "8px",
  flex: "1 0 0",

  "@media (max-width: 767px)": {
    padding: "0 20px",
    alignItems: "center",
    flex: "none",
  },
});

export const Title = styled.h1({
  color: "var(--text-color)",
  fontFamily: "Inter",
  fontSize: "48px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",

  "@media (max-width: 1023px)": {
    fontSize: "36px",
  },

  "@media (max-width: 767px)": {
    fontSize: "32px",
  },
});

export const Subtitle = styled.p({
  color: "var(--text-color)",
  fontFamily: "Inter",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",

  "@media (max-width: 1023px)": {
    fontSize: "18px",
  },

  "@media (max-width: 767px)": {
    display: "none",
  },
});

// 아이콘 + 메시지/버튼 묶는 Wrapper
export const EmptyStateWrapper = styled.div({
  display: "flex",
  height: "543px",
  flexDirection: "column",
  alignItems: "center",
  gap: "116px",

  "@media (max-width: 767px)": {
    height: "auto",
    gap: "60px",
  },
});

export const IconWrap = styled.svg({
  width: "140px",
  height: "140px",
  flexShrink: 0,
  aspectRatio: "1 / 1",
  color: " #A8A7A7;",

  "@media (max-width: 1023px)": {
    width: "120px",
    height: "120px",
  },

  "@media (max-width: 767px)": {
    width: "100px",
    height: "100px",
  },
});

// 메시지 + 버튼 묶는 Wrapper
export const MessageWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",

  width: "100%",

  "@media (max-width: 767px)": {
    gap: "30px",
  },
});

// 텍스트 두 줄 묶는 Wrapper
export const TextWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "10px",
});

export const EmptyMessage = styled.p({
  width: "100%",
  color: "var(--text-color)",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "28px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",

  "@media (max-width: 1023px)": {
    fontSize: "22px",
  },

  "@media (max-width: 767px)": {
    fontSize: "18px",
    lineHeight: "1.6",
    margin: 0,
    textAlign: "center",
  },
});

export const NewProductMessage = styled.p({
  color: "var(--text-color)",
  textAlign: "center",
  fontFamily: "Inter",
  fontSize: "28px",
  fontStyle: "normal",
  lineHeight: "normal",

  "@media (max-width: 1023px)": {
    fontSize: "22px",
  },

  "@media (max-width: 767px)": {
    fontSize: "18px",
  },
});

export const GoShopButton = styled.button({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "var(--bg-button)",

  width: "100%",
  // height: "75px",

  padding: "20px 30px",

  color: "var(--text-button)",
  border: "none",
  borderRadius: "var(--radius-md)",
  fontSize: "24px",
  fontWeight: 600,

  textWrap: "nowrap",

  cursor: "pointer",

  "@media (max-width: 1023px)": {
    fontSize: "20px",
  },

  "@media (max-width: 767px)": {
    height: "44px",
    padding: 0,
    justifyContent: "center",
    fontSize: "15px",
  },
});

export const ButtonWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "30px",

  width: "100%",

  "@media (max-width: 767px)": {
    flexDirection: "column",
    "& .login-btn": { order: -1 },
  },
});
