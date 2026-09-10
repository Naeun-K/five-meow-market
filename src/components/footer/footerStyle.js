import styled from "@emotion/styled";

/* Footer 전체 */
export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
  padding: 50px;

  @media (max-width: 1023px) {
    padding: 30px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    justify-content: center;
    padding: 20px;
  }
`;

/* Footer 내부 */
export const FooterInner = styled.div({
  width: "100%",

  display: " flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "10px",

  "@media (max-width: 1023px)": {
    maxWidth: "768px",
  },

  " @media (max-width: 767px) ": {
    maxWidth: "320px",
  },
});

/* 상단 영역 */
export const FooterMain = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 10px;
  }
`;

/* 로고 */

export const FooterLogo = styled.div({
  width: "150px",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "&, & *": {
    cursor: "default",
  },

  "@media (max-width: 1023px)": {
    width: "140px",
  },

  " @media (max-width: 767px)": {
    width: " 132px",
  },
});

/* 오른쪽 영역 */
export const FooterTop = styled.div`
  width: 326px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 8px;

  @media (max-width: 767px) {
    width: 228px;

    justify-content: center;
  }
`;

/* 고양이 그래픽 */
export const CatGraphic = styled.div`
  width: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

/* Footer 링크 */
export const FooterLinks = styled.nav`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 16px;

  button {
    color: var(--text-secondary);
    font-size: 16px;
    white-space: nowrap;
  }

  desktop-text {
    display: inline;
  }

  .mobile-text {
    display: none;
  }

  @media (max-width: 767px) {
    width: 228px;

    justify-content: center;
    font-size: 15px;
    gap: 16px;
  }
  @media (max-width: 374px) {
    .desktop-text {
      display: none;
    }

    .mobile-text {
      display: inline;
    }
  }
`;

/* 구분선 */
export const FooterLine = styled.div`
  width: 100%;
  height: 1px;

  background: var(--border);

  flex-shrink: 0;
`;

/* Copyright */
export const FooterCopyright = styled.p`
  width: 100%;

  color: var(--text-secondary);

  font-size: 16px;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;
