import styled from "@emotion/styled";

export const ChatIconStyle = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;

  width: 88px;
  height: 88px;

  padding: 0;
  border: none;
  background: transparent;

  cursor: pointer;
  z-index: 9;

  svg {
    display: block;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    width: 70px;
    height: 70px;
  }

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    width: 80px;
    height: 80px;
  }

  /* 와이드 */
  @media (min-width: 1024px) {
    width: 88px;
    height: 88px;
  }
`;
