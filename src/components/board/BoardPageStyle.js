import styled from "@emotion/styled";

export const BoardContainer = styled.section`
  width: 100%;
  max-width: 1300px;
  min-height: 850px;
  margin: 0 auto;
  padding: 0 50px;
  box-sizing: border-box;

  h2 {
    margin: 0 0 70px;
    color: var(--text-primary, #3a3032);
    font-size: 44px;
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -1.5px;
  }

  .board-body {
    width: 100%;
  }

  @media (max-width: 1023px) {
    min-height: 750px;
    padding: 0 30px;

    h2 {
      margin-bottom: 50px;
      font-size: 36px;
    }
  }

  @media (max-width: 767px) {
    min-height: 650px;
    padding: 0 12px;

    h2 {
      margin-bottom: 35px;
      font-size: 28px;
      letter-spacing: -1px;
    }
  }
`;

export const BoardHeader = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  min-height: 72px;
  box-sizing: border-box;
  border-top: 1px solid var(--border, #ddd6cc);
  border-bottom: 1px solid var(--border, #ddd6cc);
  text-align: center;

  ${({ boardType }) =>
    boardType === "review"
      ? `
        grid-template-columns: 160px minmax(0, 1fr) 120px 160px 120px;
      `
      : `
        grid-template-columns: 80px minmax(0, 1fr) 120px 160px 80px;
      `}

  span {
    min-width: 0;
    color: var(--text-primary, #3a3032);
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
    white-space: nowrap;
  }

  @media (max-width: 1023px) {
    min-height: 70px;

    ${({ boardType }) =>
      boardType === "review"
        ? `
          grid-template-columns: 120px minmax(0, 1fr) 90px 120px 90px;
        `
        : `
          grid-template-columns: 60px minmax(0, 1fr) 90px 120px 60px;
        `}

    span {
      font-size: 17px;
    }
  }

  @media (max-width: 767px) {
    min-height: 55px;
    gap: 10px;
    padding: 0 8px;
    text-align: center;

    ${({ boardType }) =>
      boardType === "review"
        ? `
          grid-template-columns: 64px minmax(0, 1fr) 82px;
        `
        : `
          grid-template-columns: 42px minmax(0, 1fr) 60px;
        `}

    span {
      min-width: 0;
      font-size: 14px;
      line-height: 1;
      white-space: nowrap;
      word-break: keep-all;
    }

    ${({ boardType }) =>
      boardType === "review"
        ? `
          .number-header,
          .writer-header,
          .date-header {
            display: none;
          }

          .product-header,
          .title-header,
          .rating-header {
            display: block;
          }

          .product-header {
            white-space: nowrap;
            word-break: keep-all;
          }

          .title-header {
            text-align: left;
          }

          .rating-header {
            text-align: center;
          }
        `
        : `
          .writer-header,
          .date-header {
            display: none;
          }

          .number-header,
          .title-header,
          .views-header {
            display: block;
          }

          .title-header {
            text-align: left;
          }

          .views-header {
            text-align: center;
          }
        `}
  }
`;

export const BoardRow = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid var(--border, #ddd6cc);
  text-align: center;

  ${({ boardType }) =>
    boardType === "review"
      ? `
        grid-template-columns: 160px minmax(0, 1fr) 120px 160px 120px;
        min-height: 150px;
        padding: 20px;
      `
      : `
        grid-template-columns: 80px minmax(0, 1fr) 120px 160px 80px;
        min-height: 96px;
        padding: 18px 20px;
      `}

  & > span,
  & > div {
    min-width: 0;
    color: var(--text-primary, #3a3032);
    font-size: 18px;
    font-weight: 400;
  }

  .number-cell,
  .writer-cell,
  .date-cell,
  .views-cell {
    text-align: center;
  }

  .number-cell.notice-number {
    color: var(--bg-button, #614832);
    font-weight: 600;
  }

  .title-cell {
    min-width: 0;
    text-align: left;
  }

  .title-main {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    min-width: 0;
    gap: 10px;
  }

  .title-text {
    display: -webkit-box;
    min-width: 0;
    overflow: hidden;
    color: var(--text-primary, #3a3032);
    font-size: 18px;
    line-height: 1.7;
    text-overflow: ellipsis;
    word-break: break-word;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .new-badge {
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    padding: 4px 7px;
    border-radius: 3px;
    background: var(--bg-button, #614832);
    color: #fffdf9;
    font-size: 13px;
    font-weight: 600;
    line-height: 1;
  }

  .secret {
    display: inline-flex;
    flex-shrink: 0;
    width: 18px;
    height: 18px;
    color: var(--text-secondary, #99918a);
    order: -1;
  }

  .comment-count {
    flex-shrink: 0;
    color: var(--text-secondary, #99918a);
    font-size: 14px;
    white-space: nowrap;
  }

  .mobile-date {
    display: none;
  }

  .date-cell,
  .views-cell,
  .writer-cell {
    color: var(--text-secondary, #99918a);
    font-size: 16px;
  }

  .svg-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1023px) {
    ${({ boardType }) =>
      boardType === "review"
        ? `
          grid-template-columns: 120px minmax(0, 1fr) 90px 120px 90px;
          min-height: 145px;
          padding: 18px;
        `
        : `
          grid-template-columns: 60px minmax(0, 1fr) 90px 120px 60px;
          min-height: 100px;
          padding: 16px;
        `}

    & > span,
    & > div {
      font-size: 17px;
    }

    .title-text {
      font-size: 17px;
      line-height: 1.6;
    }

    .date-cell,
    .views-cell,
    .writer-cell {
      font-size: 15px;
    }

    .new-badge {
      font-size: 12px;
    }
  }

  @media (max-width: 767px) {
    gap: 15px;
    padding: 14px 8px;

    ${({ boardType }) =>
      boardType === "review"
        ? `
          grid-template-columns: 64px minmax(0, 1fr) 82px;
          min-height: 125px;
        `
        : `
          grid-template-columns: 42px minmax(0, 1fr) 60px;
          min-height: 88px;
        `}

    & > span,
    & > div {
      font-size: 16px;
    }

    .title-cell {
      min-width: 0;
      padding: 8px 0;
    }

    .title-main {
      display: flex;
      align-items: center;
      flex-wrap: nowrap;
      min-width: 0;
      gap: 7px;
      overflow: hidden;
    }

    /*
      모바일 제목:
      - 무조건 한 줄
      - 길면 ... 표시
      - 줄바꿈 방지
    */
    .title-text {
      display: block;
      min-width: 0;
      max-width: 100%;
      overflow: hidden;
      font-size: 16px;
      line-height: 1.55;
      text-align: left;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-break: keep-all;
    }

    .new-badge {
      flex-shrink: 0;
      padding: 3px 5px;
      font-size: 10px;
    }

    .secret {
      flex-shrink: 0;
      width: 16px;
      height: 16px;
    }

    .comment-count {
      flex-shrink: 0;
      font-size: 12px;
      white-space: nowrap;
    }

    .mobile-date {
      display: block;
      margin-top: 5px;
      color: var(--text-secondary, #99918a);
      font-size: 12px;
      line-height: 1.4;
    }

    .date-cell,
    .views-cell,
    .writer-cell {
      font-size: 13px;
    }

    ${({ boardType }) =>
      boardType === "review"
        ? `
          .product-cell {
            grid-column: 1;
            grid-row: 1;
            align-self: start;
            justify-content: center;
            align-items: center;
            width: 65px;
            height: 65px;
            aspect-ratio: 1 / 1;
            box-sizing: border-box;
          }

          .title-cell {
            grid-column: 2 / 4;
            grid-row: 1;
            align-self: stretch;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            min-width: 0;
            overflow: hidden;
          }

          .number-cell,
          .writer-cell,
          .date-cell {
            display: none;
          }

          .rating-cell {
            grid-column: 3;
            grid-row: 1;
            display: flex !important;
            align-self: end;
            justify-self: end;
            justify-content: center;
            align-items: center;
            width: 82px;
            margin-top: auto;
            margin-bottom: 2px;
            z-index: 2;
          }
        `
        : `
          .writer-cell,
          .date-cell {
            display: none;
          }
        `}
  }
`;

/*상품 이미지 영역*/
export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  width: 100%;
  aspect-ratio: 1 / 1;
  text-align: center;
  box-sizing: border-box;

  img {
    display: block;
    flex-shrink: 0;
    width: 100%;
    max-width: 112px;
    aspect-ratio: 1 / 1;
    height: auto;
    border-radius: 6px;
    object-fit: cover;
  }

  @media (max-width: 1023px) {
    width: 100%;
    aspect-ratio: 1 / 1;

    img {
      width: 100%;
      max-width: 90px;
      aspect-ratio: 1 / 1;
      height: auto;
    }
  }

  @media (max-width: 767px) {
    width: 65px;
    height: 65px;
    aspect-ratio: 1 / 1;

    img {
      width: 65px;
      height: 65px;
      max-width: 65px;
      aspect-ratio: 1 / 1;
      border-radius: 5px;
    }
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  color: var(--bg-button, #614832);
  white-space: nowrap;

  .svg-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1023px) {
    gap: 2px;

    .svg-container {
      width: 19px;
      height: 19px;
    }
  }

  @media (max-width: 767px) {
    display: flex !important;
    gap: 1px;
    justify-content: center;
    align-items: center;

    .svg-container {
      display: inline-flex !important;
      width: 14px;
      height: 14px;
    }

    svg {
      display: block !important;
      width: 100%;
      height: 100%;
    }
  }
`;
