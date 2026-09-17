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

  * {
    box-sizing: border-box;
  }

.return-page {
  width: 100%;
  max-width: 1300px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--bg);
  color: var(--text-color);
}

.return-main {
  width: 924px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

  

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

  

  .product-selection {
    width: 844px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .product-selection-header {
    width: 844px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

  .selection-title-area span {
    color: #a5a09d;
    font-size: 13px;
    line-height: 18px;
    white-space: nowrap;
  }

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
  }

  .select-all-checkbox {
    width: 14px;
    height: 14px;
    font-size: 10px;
  }

  .product-checkbox {
    width: 16px;
    height: 16px;
    margin-top: 2px;
    font-size: 10px;
  }

  .select-all-checkbox.checked,
  .product-checkbox.checked {
    border-color: var(--bg-button);
    background: var(--bg-button);
  }

  

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
  }

  .delete-button:hover {
    background: var(--bg-button);
    color: #fff;
  }

  .delete-cat-decoration {
    position: absolute;
    z-index: 3;
    right: 26px;
    bottom: 28px;
    width: 42px;
    height: 42px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transform: translateY(8px);
    transition:
      opacity 0.2s ease,
      transform 0.2s ease;
  }

  

  .delete-button:hover + .delete-cat-decoration {
    opacity: 1;
    transform: translateY(0);
  }

  .delete-cat-decoration img {
    display: block;
    width: 42px;
    height: 42px;
    object-fit: contain;
  }

  

  .product-list {
    width: 844px;
    display: flex;
    flex-direction: column;
  }

  

  .return-product-card {
    position: relative;
    z-index: 1;
    width: 844px;
    min-height: 129px;
    display: grid;
    grid-template-columns: 24px 328px 56px 340px;
    align-items: start;
    column-gap: 16px;
    padding: 16px 0;
    border-bottom: 1px solid var(--border);
    overflow: visible;
  }

  .return-product-card:has(.dropdown-menu) {
    z-index: 10;
  }

  

  .return-product-card > .product-checkbox {
    grid-column: 1;
    margin-top: 2px;
  }

  

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
    height: auto;
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

  

  .return-reason-area {
    grid-column: 4;
    width: 340px;
    min-height: 97px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin: 0;
    padding: 0;
  }

  

  .custom-dropdown {
    position: relative;
    z-index: 20;
    width: 340px;
    height: 32px;
  }

  .dropdown-trigger {
    width: 340px;
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
      box-shadow 0.2s ease;
  }

  .dropdown-trigger:hover {
    border-color: #b89a7a;
    background: #fff;
    box-shadow: 0 0 0 2px rgb(184 154 122 / 12%);
  }

  .dropdown-trigger:focus-visible {
    outline: none;
    border-color: #a9825d;
    box-shadow: 0 0 0 2px rgb(169 130 93 / 16%);
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

  .dropdown-trigger:hover .dropdown-arrow {
    color: #a9825d;
  }

  .dropdown-menu {
    position: absolute;
    z-index: 999;
    top: 36px;
    left: 0;
    width: 340px;
    max-height: 192px;
    overflow-y: auto;
    padding: 2px 0;
    border: 1px solid var(--border);
    border-radius: 3px;
    background: #fff;
    box-shadow: 0 4px 10px rgb(0 0 0 / 10%);
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

  

  .reason-textarea-wrapper {
    position: relative;
    width: 340px;
    height: 59px;
  }

  .reason-textarea-wrapper textarea {
    width: 340px;
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
      box-shadow 0.2s ease;
  }

  .reason-textarea-wrapper textarea::placeholder {
    color: #a5a09d;
  }

  .reason-textarea-wrapper textarea:hover {
    border-color: #b89a7a;
    box-shadow: 0 0 0 2px rgb(184 154 122 / 12%);
  }

  .reason-textarea-wrapper textarea:focus {
    outline: none;
    border-color: #a9825d;
    box-shadow: 0 0 0 2px rgb(169 130 93 / 16%);
  }

  .text-counter {
    position: absolute;
    right: 2px;
    bottom: 0;
    color: #a5a09d;
    font-size: 9px;
    line-height: 12px;
  }

  

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
    height: 90px;
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

  .notice-submit-area {
    position: relative;
    width: 804px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .return-submit-button {
    position: relative;
    z-index: 2;
    width: 196px;
    height: 52px;
    border: 0;
    border-radius: 12px;
    background: var(--bg-button);
    color: var(--text-button);
    font-size: 17px;
    line-height: 21px;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
  }

  .return-submit-button:hover {
    background: #614832;
  }

  

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

  

  .return-submit-button:hover + .cat-decoration {
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

  

  @media (max-width: 1023px) and (min-width: 768px) {
    .return-main {
      width: 100%;
      padding: 40px 32px 64px;
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
      grid-template-columns: 20px minmax(220px, 1fr) 45px minmax(220px, 340px);
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

  

  @media (max-width: 767px) {
    .return-main {
      width: 100%;
      padding: 32px 20px 48px;
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

    .selection-title-area strong {
      font-size: 18px;
    }

    .return-product-card {
      width: 100%;
      display: grid;
      grid-template-columns: 20px 1fr;
      column-gap: 12px;
      row-gap: 14px;
      padding: 16px 0;
    }

    .return-product-card > .product-checkbox {
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

    .notice-submit-area {
      justify-content: center;
    }

    .return-submit-button {
      width: 100%;
    }

    .cat-decoration {
      right: 50%;
      width: 100%;
      transform: translate(50%, 10px);
    }

    .return-submit-button:hover + .cat-decoration {
      transform: translate(50%, 0);
    }

    .cat-decoration .cat {
      width: 20%;
      max-width: 39px;
      height: 58px;
    }

    .delete-button {
      width: 96px;
      min-width: 96px;
      white-space: nowrap;
    }
  }
`;

export default styles;
