import styled from "@emotion/styled";

/* Footer 전체 */
export const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;

  background: var(--bg);
  border-top: 1px solid var(--border);
`;

/* Footer 내부 */
export const FooterInner = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 160px;

  padding: 32px 40px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  box-sizing: border-box;

  @media (max-width: 1023px) {
    max-width: 768px;
  }

  @media (max-width: 767px) {
    max-width: 320px;
    height: 208px;

    padding: 32px 40px;
  }
`;

/* 상단 영역 */
export const FooterMain = styled.div`
  width: 100%;
  height: 43px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767px) {
    height: 78px;

    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    gap: 10px;
  }
`;

/* 로고 */

export const FooterLogo = styled.div`
  width: 150px;
  height: auto;

  flex-shrink: 0;

  img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }

  @media (max-width: 1024px) {
    width: 140px;
  }

  @media (max-width: 767px) {
    width: 132px;
  }
`;

/* 오른쪽 영역 */
export const FooterTop = styled.div`
  width: 326px;
  height: 22px;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  gap: 8px;

  @media (max-width: 767px) {
    width: 228px;
    height: 15px;

    justify-content: center;
  }
`;

/* 고양이 그래픽 */
export const CatGraphic = styled.div`
  width: 54px;
  height: 22px;

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
  width: 272px;
  height: 15px;

  display: flex;
  align-items: center;

  gap: 16px;

  a {
    color: var(--text-secondary);

    font-family: "Pretendard", sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;

    white-space: nowrap;
  }

  @media (max-width: 767px) {
    width: 228px;

    justify-content: center;

    gap: 16px;
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

  margin: 0;

  color: var(--text-secondary);

  font-family: "Pretendard", sans-serif;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;

  @media (max-width: 767px) {
    line-height: 13px;
  }
`;
