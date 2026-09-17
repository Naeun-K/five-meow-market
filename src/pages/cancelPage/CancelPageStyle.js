const styles = `
  :root {
    --bg: #faf8f4;
    --bg-button: #745a42;
    --bg-notice: #f3ece6;
    --text-color: #000;
    --text-primary: #614832;
    --text-secondary: #66615e;
    --text-button: #fff;
    --border: #e8e3dd;
    --acent-beidge: #ebccb2;
    --paw-color: #d6a57f;
    --acent-error: #eb2d2d;
    --radius-md: 12px;
    --shadow: 0 4px 4px 0 rgb(0 0 0 / 25%);
  }


  .return-page {
    width: 100%;
    max-width: 1300px;
    margin: 0 auto;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: var(--bg);
    color: var(--text-color);
  }

  .return-main {
    width: 100%;
    max-width: 1300px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 32px;
    padding: 50px;
  }

  /* ========================================
     페이지 제목
  ======================================== */

  .return-page-header {
    width: 844px;

    display: flex;
    flex-direction: column;

    gap: 12px;
  }

  .return-page-header h1 {
    margin: 0;

    color: #2f231d;

    font-size: 44px;
    line-height: 53px;
    font-weight: 700;
  }

  .return-page-header p {
    margin: 0;

    color: var(--text-secondary);

    font-size: 22px;
    line-height: 27px;
  }

  /* ========================================
     상품 선택
  ======================================== */

  .product-selection {
    width: 844px;

    display: flex;
    flex-direction: column;

    gap: 16px;
  }

  .product-selection-header {
    width: 844px;
    min-height: 48px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    border-bottom: 1px solid var(--border);
  }

  .selection-title-area {
    display: flex;
    align-items: center;

    gap: 10px;
  }

  .selection-title-area strong {
    color: #2f231d;

    font-size: 18px;
    line-height: 22px;
    font-weight: 700;

    white-space: nowrap;
  }

  .selection-title-area > span:not(.cancel-scope-badge) {
    color: #a5a09d;

    font-size: 13px;
    line-height: 18px;

    white-space: nowrap;
  }

  /* ========================================
     전체취소 / 부분취소 배지
  ======================================== */

  .cancel-scope-badge {
    min-width: 68px;
    height: 28px;

    display: inline-flex;
    justify-content: center;
    align-items: center;

    padding: 0 10px;

    border-radius: 999px;

    font-size: 12px !important;
    line-height: 1 !important;
    font-weight: 700;

    white-space: nowrap;
  }

  .cancel-scope-badge.all {
    background: var(--bg-button);
    color: #fff !important;
  }

  .cancel-scope-badge.partial {
    background: var(--acent-beidge);
    color: #4f3927 !important;
  }

  /* ========================================
     체크박스
  ======================================== */

  .select-all-checkbox,
  .product-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-shrink: 0;

    padding: 0;

    border: 1px solid #a5a09d;
    border-radius: 3px;

    background: #fff;
    color: #fff;

    cursor: pointer;

    transition:
      border-color 0.2s ease,
      background-color 0.2s ease,
      opacity 0.2s ease;
  }

  .select-all-checkbox {
    width: 16px;
    height: 16px;

    font-size: 10px;
  }

  .product-checkbox {
    width: 18px;
    height: 18px;

    margin-top: 2px;

    font-size: 11px;
  }

  .select-all-checkbox:hover,
  .product-checkbox:hover {
    border-color: var(--bg-button);
  }

  .select-all-checkbox.checked,
  .product-checkbox.checked {
    border-color: var(--bg-button);
    background: var(--bg-button);
  }

  .select-all-checkbox:focus-visible,
  .product-checkbox:focus-visible {
    outline: 2px solid var(--acent-beidge);
    outline-offset: 2px;
  }

  /* ========================================
     선택 해제 버튼
  ======================================== */

  .delete-button-area {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .delete-button {
    position: relative;
    z-index: 2;

    width: 96px;
    min-width: 96px;
    height: 36px;

    padding: 6px 14px;

    border: 1px solid var(--border);
    border-radius: 4px;

    background: #fff;
    color: var(--text-secondary);

    font-size: 13px;
    line-height: 18px;

    white-space: nowrap;
    word-break: keep-all;
    text-align: center;

    cursor: pointer;

    transition:
      background-color 0.2s ease,
      color 0.2s ease,
      opacity 0.2s ease;
  }

  .delete-button:hover:not(:disabled) {
    background: var(--bg-button);
    color: #fff;
  }

  .delete-button:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  /* ========================================
     상품 목록
  ======================================== */

  .product-list {
    width: 844px;

    display: flex;
    flex-direction: column;
  }

  /*
    PC

    체크박스 | 상품정보 | 수량 | 취소사유
  */

  .return-product-card {
    position: relative;
    z-index: 1;

    width: 844px;
    min-height: 129px;

    display: grid;

    grid-template-columns:
      24px
      328px
      56px
      340px;

    align-items: start;

    column-gap: 16px;

    padding: 16px 0;

    border-bottom: 1px solid var(--border);

    overflow: visible;

    transition:
      opacity 0.2s ease,
      background-color 0.2s ease;
  }

  /*
    체크된 상품
  */

  .return-product-card.is-selected {
    opacity: 1;
  }

  /*
    체크 해제된 상품

    화면에서는 상품을 유지하지만
    취소 대상에서는 제외되었다는 것을 보여줌
  */

  .return-product-card.is-unselected {
    opacity: 0.5;
  }

  .return-product-card:has(.dropdown-menu) {
    z-index: 10;
  }

  /* 상품 체크박스 */

  .return-product-card > .product-checkbox {
    grid-column: 1;

    margin-top: 2px;
  }

  /* ========================================
     상품 이미지 + 상품정보
  ======================================== */

  .product-main-info {
    grid-column: 2;

    width: 328px;
    min-width: 328px;
    min-height: 80px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    gap: 12px;
  }

  .product-image {
    width: 80px;
    height: 80px;

    flex: 0 0 80px;

    object-fit: cover;

    border-radius: 3px;

    background: var(--bg-notice);
  }

  .product-info {
    width: 236px;
    min-width: 0;
    min-height: 80px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 2px;

    margin: 0;
    padding: 0;

    overflow: visible;
  }

  .product-order-number {
    margin: 0;

    color: #2a75d3;

    font-size: 11px;
    line-height: 14px;

    white-space: nowrap;
  }

  .product-info h2 {
    width: 100%;

    margin: 0;

    color: #1f1d1b;

    font-size: 16px;
    line-height: 20px;
    font-weight: 700;

    white-space: normal;
    word-break: keep-all;

    overflow: visible;
    text-overflow: clip;
  }

  .product-option {
    margin: 0;

    color: var(--text-secondary);

    font-size: 14px;
    line-height: 18px;

    white-space: normal;
  }

  .product-price {
    color: #2f231d;

    font-size: 17px;
    line-height: 21px;
    font-weight: 700;

    white-space: nowrap;
  }

  /* ========================================
     수량
  ======================================== */

  .product-quantity {
    grid-column: 3;

    width: 56px;

    margin: 2px 0 0;

    color: #1f1d1b;

    font-size: 14px;
    line-height: 18px;

    text-align: center;

    white-space: nowrap;
  }

  /* ========================================
     상품별 취소 사유
  ======================================== */

  .return-reason-area {
    grid-column: 4;

    width: 100%;
    min-height: 97px;

    display: flex;
    flex-direction: column;

    gap: 6px;

    margin: 0;
    padding: 0;

    transition: opacity 0.2s ease;
  }

  /*
    체크가 해제된 상품의 취소 사유는
    사용할 수 없다는 시각적 표시
  */

  .return-product-card.is-unselected .return-reason-area {
    opacity: 0.6;
  }

  .dropdown-trigger:disabled,
  .reason-textarea-wrapper textarea:disabled {
    background: #f3f1ef;
    color: #a5a09d;

    cursor: not-allowed;
  }

  .dropdown-trigger:disabled:hover,
  .reason-textarea-wrapper textarea:disabled:hover {
    border-color: var(--border);
    box-shadow: none;
  }

  /* ========================================
     커스텀 드롭다운
  ======================================== */

  .custom-dropdown {
    position: relative;
    z-index: 20;

    width: 100%;
    height: 32px;
  }

  .dropdown-trigger {
    width: 100%;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 8px;

    border: 1px solid var(--border);
    border-radius: 3px;

    background: #fff;
    color: #1f1d1b;

    font-size: 13px;
    line-height: 18px;

    text-align: left;
    white-space: nowrap;

    cursor: pointer;

    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;
  }

  .dropdown-trigger:hover:not(:disabled) {
    border-color: #b89a7a;

    background: #fff;

    box-shadow:
      0 0 0 2px
      rgb(184 154 122 / 12%);
  }

  .dropdown-trigger:focus-visible {
    outline: none;

    border-color: #a9825d;

    box-shadow:
      0 0 0 2px
      rgb(169 130 93 / 16%);
  }

  .dropdown-arrow {
    flex-shrink: 0;

    width: 12px;
    height: 12px;

    margin-left: auto;

    color: var(--text-secondary);

    font-size: 12px;
    line-height: 1;

    vertical-align: middle;

    transition: color 0.2s ease;
  }

  .dropdown-trigger:hover:not(:disabled)
    .dropdown-arrow {
    color: #a9825d;
  }

  .dropdown-menu {
    position: absolute;
    z-index: 999;

    top: 36px;
    left: 0;

    width: 100%;
    max-height: 192px;

    overflow-y: auto;

    padding: 2px 0;

    border: 1px solid var(--border);
    border-radius: 3px;

    background: #fff;

    box-shadow:
      0 4px 10px
      rgb(0 0 0 / 10%);
  }

  .dropdown-option {
    width: 100%;
    min-height: 30px;

    display: block;

    padding: 6px 8px;

    border: 0;

    background: #fff;
    color: #1f1d1b;

    font-size: 13px;
    line-height: 18px;

    text-align: left;
    white-space: nowrap;

    cursor: pointer;
  }

  .dropdown-option:hover {
    background: #f3f1ef;
  }

  /* ========================================
     상세 사유
  ======================================== */

  .reason-textarea-wrapper {
    position: relative;

    width: 100%;
    height: 59px;
  }

  .reason-textarea-wrapper textarea {
    width: 100%;
    height: 48px;

    display: block;

    resize: none;

    padding: 6px 8px;

    border: 1px solid var(--border);
    border-radius: 3px;

    outline: none;

    background: #fff;
    color: #1f1d1b;

    font-family: inherit;

    font-size: 13px;
    line-height: 18px;

    transition:
      border-color 0.2s ease,
      box-shadow 0.2s ease,
      background-color 0.2s ease;
  }

  .reason-textarea-wrapper textarea::placeholder {
    color: #a5a09d;
  }

  .reason-textarea-wrapper textarea:hover:not(:disabled) {
    border-color: #b89a7a;

    box-shadow:
      0 0 0 2px
      rgb(184 154 122 / 12%);
  }

  .reason-textarea-wrapper textarea:focus {
    outline: none;

    border-color: #a9825d;

    box-shadow:
      0 0 0 2px
      rgb(169 130 93 / 16%);
  }

  .text-counter {
    position: absolute;

    right: 2px;
    bottom: 0;

    color: #a5a09d;

    font-size: 9px;
    line-height: 12px;
  }

  /* ========================================
     취소 안내
  ======================================== */

  .return-notice {
    width: 844px;
    min-height: 269px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    gap: 30px;

    padding: 20px;

    border-radius: 6px;

    background: var(--bg-notice);
  }

  .notice-content {
    width: 804px;

    display: flex;
    flex-direction: column;

    gap: 16px;
  }

  .notice-title-area {
    display: flex;
    align-items: center;

    gap: 8px;
  }

  .notice-icon {
    color: var(--bg-button);

    font-size: 20px;
  }

  .notice-title-area h2 {
    margin: 0;

    color: #2f231d;

    font-size: 22px;
    line-height: 27px;
    font-weight: 700;
  }

  .notice-content ul {
    width: 804px;
    height: auto;

    display: flex;
    flex-direction: column;

    gap: 6px;

    margin: 0;
    padding-left: 20px;
  }

  .notice-content li {
    color: var(--text-secondary);

    font-size: 17px;
    line-height: 26px;
  }

  /* ========================================
     취소 버튼 영역
  ======================================== */

  .notice-submit-area {
    position: relative;

    width: 804px;
    min-height: 52px;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    gap: 16px;
  }

  .return-submit-button {
    position: relative;
    z-index: 2;

    min-width: 196px;
    height: 52px;

    padding: 0 24px;

    border: 0;
    border-radius: 12px;

    background: var(--bg-button);
    color: var(--text-button);

    font-size: 17px;
    line-height: 21px;
    font-weight: 600;

    white-space: nowrap;

    cursor: pointer;

    transition:
      background-color 0.2s ease,
      opacity 0.2s ease;
  }

  .return-submit-button:hover:not(:disabled) {
    background: #614832;
  }

  .return-submit-button:disabled {
    opacity: 0.45;

    cursor: not-allowed;
  }

  /* ========================================
     버튼 위 고양이
  ======================================== */

  .cat-decoration {
    position: absolute;
    z-index: 1;

    right: 0;
    bottom: 43px;

    width: 196px;
    height: 58px;

    display: flex;
    align-items: flex-end;
    justify-content: center;

    gap: 0;

    opacity: 0;

    pointer-events: none;

    transform: translateY(10px);

    transition:
      opacity 0.25s ease,
      transform 0.25s ease;
  }

  .return-submit-button:hover:not(:disabled)
    + .cat-decoration {
    opacity: 1;

    transform: translateY(0);
  }

  .cat-decoration .cat {
    display: block;

    width: 39px;
    height: 58px;

    flex: 0 0 39px;

    object-fit: contain;
    object-position: bottom center;

    align-self: flex-end;

    transform: none !important;
  }

  .cat-decoration .cat-1,
  .cat-decoration .cat-2,
  .cat-decoration .cat-3,
  .cat-decoration .cat-4,
  .cat-decoration .cat-5 {
    align-self: flex-end;

    transform: none !important;
  }

  /* ========================================
     태블릿
     768px ~ 1023px
  ======================================== */

  @media (max-width: 1023px) and (min-width: 768px) {
    .return-main {
      width: 100%;
      max-width: 1300px;

      padding: 30px;
    }

    .return-page-header,
    .product-selection,
    .product-selection-header,
    .product-list,
    .return-product-card,
    .return-notice {
      width: 100%;
    }

    .return-product-card {
      grid-template-columns:
        20px
        minmax(220px, 1fr)
        45px
        minmax(220px, 340px);

      column-gap: 12px;
    }

    .product-main-info {
      width: 100%;
      min-width: 0;

      gap: 10px;
    }

    .product-info {
      width: calc(100% - 90px);
      min-width: 0;

      overflow: visible;
    }

    .product-info h2 {
      white-space: normal;

      overflow: visible;
      text-overflow: clip;

      word-break: keep-all;
    }

    .product-quantity {
      width: 45px;
    }

    .return-reason-area,
    .custom-dropdown,
    .dropdown-trigger,
    .dropdown-menu,
    .reason-textarea-wrapper,
    .reason-textarea-wrapper textarea {
      width: 100%;
    }

    .notice-content,
    .notice-content ul,
    .notice-submit-area {
      width: 100%;
    }

    .delete-button {
      width: 96px;
      min-width: 96px;

      white-space: nowrap;
    }
  }

  /* ========================================
     모바일
     320px ~ 767px
  ======================================== */

  @media (max-width: 767px) {
    .return-main {
      width: 100%;
      max-width: 1300px;

      padding: 20px;

      gap: 24px;
    }

    .return-page-header,
    .product-selection,
    .product-selection-header,
    .product-list,
    .return-product-card,
    .return-notice {
      width: 100%;
    }

    .return-page-header h1 {
      font-size: 32px;
      line-height: 40px;
    }

    .return-page-header p {
      font-size: 17px;
      line-height: 24px;
    }

    /*
      상품 선택 헤더
    */

    .product-selection-header {
      height: auto;
      min-height: 48px;

      gap: 12px;

      padding-bottom: 8px;
    }

    .selection-title-area {
      flex-wrap: wrap;

      gap: 7px;
    }

    .selection-title-area strong {
      font-size: 18px;
    }

    .cancel-scope-badge {
      min-width: 60px;
      height: 26px;

      padding: 0 8px;

      font-size: 11px !important;
    }

    /*
      모바일 상품

      체크박스 | 상품정보
                   ↓
              취소사유
    */

    .return-product-card {
      width: 100%;

      display: grid;

      grid-template-columns:
        20px
        minmax(0, 1fr);

      column-gap: 12px;
      row-gap: 14px;

      padding: 16px 0;
    }

    .return-product-card >
      .product-checkbox {
      grid-column: 1;
      grid-row: 1;
    }

    .product-main-info {
      grid-column: 2;
      grid-row: 1;

      width: 100%;
      min-width: 0;
      height: 80px;
    }

    .product-info {
      width: calc(100% - 92px);
      min-width: 0;
    }

    .product-info h2 {
      white-space: normal;

      overflow: visible;
      text-overflow: clip;

      word-break: keep-all;
    }

    .product-quantity {
      display: none;
    }

    /*
      취소 사유는 체크박스 오른쪽에서 시작
    */

    .return-reason-area {
      grid-column: 2;
      grid-row: 2;

      width: 100%;
      height: auto;
    }

    .custom-dropdown,
    .dropdown-trigger,
    .dropdown-menu,
    .reason-textarea-wrapper,
    .reason-textarea-wrapper textarea {
      width: 100%;
    }

    /*
      체크 해제 상품은
      취소사유 비활성 상태가 더 잘 보이도록
    */

    .return-product-card.is-unselected {
      opacity: 0.45;
    }

    /*
      안내
    */

    .return-notice {
      width: 100%;

      min-height: 269px;
      height: auto;
    }

    .notice-content,
    .notice-content ul,
    .notice-submit-area {
      width: 100%;
    }

    .notice-content ul {
      height: auto;
    }

    .notice-content li {
      font-size: 15px;
      line-height: 23px;
    }

    /*
      취소 버튼
    */

    .notice-submit-area {
      justify-content: center;
    }

    .return-submit-button {
      width: 100%;
      min-width: 0;
    }

    .cat-decoration {
      right: 50%;

      width: 100%;

      transform: translate(
        50%,
        10px
      );
    }

    .return-submit-button:hover:not(:disabled)
      + .cat-decoration {
      transform: translate(
        50%,
        0
      );
    }

    .cat-decoration .cat {
      width: 20%;
      max-width: 39px;
      height: 58px;
    }

    .delete-button {
      width: 88px;
      min-width: 88px;

      padding: 6px 10px;

      white-space: nowrap;
    }
  }
`;

export default styles;
