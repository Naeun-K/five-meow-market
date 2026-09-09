import styled from "@emotion/styled";

/* 채팅 버튼 + 툴팁 전체 위치 */
export const TooltipWrapper = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  z-index: 9;

  /* 모바일 */
  @media (max-width: 767px) {
    right: 20px;
    bottom: 20px;
  }

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    right: 30px;
    bottom: 30px;
  }
`;

/* 채팅 아이콘 */
export const ChatIconStyle = styled.button`
  width: 88px;
  height: 88px;

  padding: 0;
  border: none;

  background: transparent;

  cursor: pointer;

  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

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
`;

/* 툴팁 */
export const Tooltip = styled.div`
  position: absolute;

  left: 50%;
  bottom: calc(100% + 10px);

  transform: translateX(-50%);

  padding: 6px 10px;
  border-radius: 6px;

  background: var(--bg-button);

  color: #fff;
  font-size: 16px;
  white-space: nowrap;

  /* 처음 상태 */
  opacity: 0;
  visibility: hidden;

  transform: translateX(-50%) translateY(5px);

  /* 아이콘과 동일하게 0.2초 */
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s;

  /* 보여지는 상태 */
  ${({ $show }) =>
    $show &&
    `
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) translateY(0);
    `}

  pointer-events: none;

  &::after {
    content: "";

    position: absolute;
    top: 100%;
    left: 50%;

    transform: translateX(-50%);

    border: 5px solid transparent;
    border-top-color: var(--bg-button);
  }
`;
// import styled from "@emotion/styled";

// export const ChatIconStyle = styled.button`
//   position: fixed;
//   right: 50px;
//   bottom: 50px;

//   width: 88px;
//   height: 88px;

//   padding: 0;
//   border: none;
//   background: transparent;

//   cursor: pointer;
//   z-index: 9;

//   svg {
//     display: block;
//     width: 100%;
//     height: 100%;
//     overflow: visible;
//   }

//   /* 모바일 */
//   @media (max-width: 767px) {
//     width: 70px;
//     height: 70px;
//   }

//   /* 태블릿 */
//   @media (min-width: 768px) and (max-width: 1023px) {
//     width: 80px;
//     height: 80px;
//   }

//   /* 와이드 */
//   @media (min-width: 1024px) {
//     width: 88px;
//     height: 88px;
//   }
// `;

// export const TooltipWrapper = styled.div`
//   position: relative;
//   display: inline-flex;
//   align-items: center;
// `;
// export const Tooltip = styled.div`
//   position: absolute;

//   left: 50%;
//   transform: translateX(-50%);

//   padding: 6px 10px;
//   border-radius: 6px;

//   background: #1b2432;
//   color: #fff;
//   font-size: 12px;
//   white-space: nowrap;

//   &::after {
//     content: "";
//     position: absolute;
//     top: 100%;
//     left: 50%;
//     transform: translateX(-50%);

//     border: 5px solid transparent;
//     border-top-color: #1b2432;
//   }
// `;
