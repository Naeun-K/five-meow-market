const styles = ` 
  .customer-inquiry-layout { 
    width: 100%; 
    min-height: 100vh; 
  } 
 
  .customer-inquiry-page { 
    width: 100%; 
    padding: 80px 20px 120px; 
  } 
 
  .customer-inquiry-inner { 
    width: 100%; 
    max-width: 900px; 
    margin: 0 auto; 
  } 
 
  .page-heading { 
    margin-bottom: 36px; 
    text-align: center; 
  } 
 
  .page-heading h1 { 
    margin: 0; 
    color: #3a3032; 
    font-size: 32px; 
    font-weight: 700; 
    letter-spacing: -1px; 
  } 
 
  .page-description { 
    margin: 14px 0 0; 
    color: #88817b; 
    font-size: 14px; 
    line-height: 1.6; 
  } 
 
  .inquiry-form { 
    display: flex; 
    flex-direction: column; 
    gap: 28px; 
    padding: 42px 44px; 
    border: 1px solid #e8dfd3; 
    border-radius: 12px; 
    background: #fff; 
    box-shadow: 0 8px 25px rgba(97, 72, 50, 0.04); 
  } 
 
  .form-field { 
    display: flex; 
    flex-direction: column; 
    gap: 12px; 
  } 
 
  .form-field label { 
    color: #3a3032; 
    font-size: 15px; 
    font-weight: 600; 
  } 
 
  .form-field input, 
  .form-field textarea, 
  .select-wrapper select { 
    width: 100%; 
    box-sizing: border-box; 
    border: 1px solid #ded7cf; 
    border-radius: 7px; 
    background: #fff; 
    color: #3a3032; 
    font-family: inherit; 
    font-size: 14px; 
    outline: none; 
    transition: 
      border-color 0.2s ease, 
      box-shadow 0.2s ease; 
  } 
 
  .form-field input, 
  .select-wrapper select { 
    height: 50px; 
    padding: 0 16px; 
  } 
 
  .form-field textarea { 
    min-height: 220px; 
    padding: 16px; 
    resize: vertical; 
    line-height: 1.7; 
  } 
 
  .form-field input::placeholder, 
  .form-field textarea::placeholder { 
    color: #b4ada6; 
  } 
 
  /* 제목·문의내용 호버 */ 
  .form-field input:hover, 
  .form-field textarea:hover { 
    border-color: #a98b70; 
  } 
 
  /* 제목·문의내용 포커스 */ 
  .form-field input:focus, 
  .form-field textarea:focus { 
    border-color: #8b6849; 
    box-shadow: 0 0 0 3px rgba(139, 104, 73, 0.1); 
  } 
 
  /* 문의 유형 */ 
  .select-wrapper { 
    position: relative; 
    width: 100%; 
  } 

  .custom-select-button { 
    position: relative; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    width: 100%; 
    height: 50px; 
    box-sizing: border-box; 
    padding: 0 16px; 
    border: 1px solid #ded7cf; 
    border-radius: 7px; 
    background: #fff; 
    color: #3a3032; 
    font-family: inherit; 
    font-size: 14px; 
    text-align: left; 
    cursor: pointer; 
    outline: none; 
    transition: 
      border-color 0.2s ease, 
      box-shadow 0.2s ease; 
  } 

  .custom-select-button:hover { 
    border-color: #a98b70; 
  } 

  .custom-select-button.is-open { 
    border-color: #8b6849; 
    box-shadow: 0 0 0 3px rgba(139, 104, 73, 0.1); 
  } 

  .custom-select-button .placeholder { 
    color: #b4ada6; 
  } 

  .custom-select-button .selected-value { 
    color: #3a3032; 
  } 

  .select-arrow { 
    position: absolute; 
    top: 50%; 
    right: 17px; 
    width: 20px; 
    height: 20px; 
    fill: #9e958d; 
    pointer-events: none; 
    transform: translateY(-50%); 
    transition: 
      fill 0.2s ease, 
      transform 0.2s ease; 
  } 

  .custom-select-button:hover .select-arrow, 
  .custom-select-button.is-open .select-arrow { 
    fill: #8b6849; 
  } 

  .select-arrow.is-open { 
    transform: translateY(-50%) rotate(180deg); 
  } 

  /* 커스텀 드롭다운 옵션 영역 */ 
  .custom-select-options { 
    position: absolute; 
    top: calc(100% + 6px); 
    left: 0; 
    z-index: 20; 
    width: 100%; 
    margin: 0; 
    padding: 6px 0; 
    box-sizing: border-box; 
    border: 1px solid #ded7cf; 
    border-radius: 7px; 
    background: #fff; 
    box-shadow: 0 8px 20px rgba(97, 72, 50, 0.1); 
    list-style: none; 
  } 

  .custom-select-option { 
    display: block; 
    width: 100%; 
    padding: 13px 16px; 
    border: 0; 
    background: #fff; 
    color: #3a3032; 
    font-family: inherit; 
    font-size: 14px; 
    text-align: left; 
    cursor: pointer; 
    transition: 
      background-color 0.15s ease, 
      color 0.15s ease; 
  } 

  /* 옵션 호버 색상 - 연한 회색 */ 
  .custom-select-option:hover { 
    background: #eeeeee; 
    color: #3a3032; 
  } 

  .custom-select-option.is-selected { 
    background: #f5f5f5; 
    color: #614832; 
    font-weight: 600; 
  } 

  .custom-select-option.is-selected:hover { 
    background: #eeeeee; 
  } 
 
  /* 비밀글 */ 
  .secret-check { 
    display: inline-flex; 
    align-items: center; 
    align-self: flex-start; 
    gap: 8px; 
    color: #716961; 
    font-size: 13px; 
    cursor: pointer; 
    user-select: none; 
  } 
 
  .secret-check input { 
    position: absolute; 
    width: 1px; 
    height: 1px; 
    opacity: 0; 
    pointer-events: none; 
  } 
 
  .custom-checkbox { 
    display: inline-flex; 
    align-items: center; 
    justify-content: center; 
    width: 17px; 
    height: 17px; 
    box-sizing: border-box; 
    border: 1px solid #cfc5ba; 
    border-radius: 4px; 
    color: #fff; 
    background: #fff; 
    font-size: 12px; 
    font-weight: 700; 
    transition: 
      border-color 0.2s ease, 
      background 0.2s ease; 
  } 
 
  .secret-check input:checked + .custom-checkbox { 
    border-color: #8b6849; 
    background: #8b6849; 
  } 
 
  /* 자물쇠 SVG */ 
  .lock-icon { 
    width: 14px; 
    height: 14px; 
    fill: #8c837b; 
    flex-shrink: 0; 
  } 
 
  .secret-check:hover { 
    color: #614832; 
  } 
 
  /* 버튼 */ 
  .form-buttons { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    gap: 12px; 
    margin-top: 8px; 
  } 
 
  .form-buttons button { 
    height: 54px; 
    min-width: 130px; 
    padding: 0 36px; 
    border-radius: 7px; 
    font-family: inherit; 
    font-size: 15px; 
    font-weight: 600; 
    cursor: pointer; 
    transition: 
      background 0.2s ease, 
      border-color 0.2s ease, 
      color 0.2s ease; 
  } 
 
  .cancel-button { 
    border: 1px solid #ded7cf; 
    background: #fff; 
    color: #716961; 
  } 
 
  .cancel-button:hover { 
    border-color: #b9a99a; 
    background: #faf7f3; 
  } 
 
  .submit-button-wrapper { 
    position: relative; 
    display: inline-flex; 
  } 
 
  .submit-button { 
    position: relative; 
    z-index: 3; 
    border: 1px solid #8b6849; 
    background: #8b6849; 
    color: #fff; 
  } 
 
  .submit-button:hover { 
    border-color: #614832; 
    background: #614832; 
  } 
 
  /* 등록 버튼 위 고양이 */ 
  .hover-cats { 
    position: absolute; 
    left: 50%; 
    bottom: calc(100% - 2px); 
    z-index: 2; 
    display: flex; 
    align-items: flex-end; 
    justify-content: center; 
    width: 155px; 
    height: 38px; 
    gap: 0; 
    opacity: 0; 
    pointer-events: none; 
    transform: translate(-50%, 10px); 
    transition: 
      opacity 0.25s ease, 
      transform 0.25s ease; 
  } 
 
  .hover-cats img { 
    display: block; 
    width: 31px; 
    height: 31px; 
    object-fit: contain; 
    flex-shrink: 0; 
  } 
 
  .submit-button-wrapper:hover .hover-cats { 
    opacity: 1; 
    transform: translate(-50%, 0); 
  } 
 
  @media (max-width: 767px) { 
    .customer-inquiry-page { 
      padding: 55px 16px 80px; 
    } 
 
    .page-heading { 
      margin-bottom: 26px; 
    } 
 
    .page-heading h1 { 
      font-size: 27px; 
    } 
 
    .page-description { 
      font-size: 13px; 
    } 
 
    .inquiry-form { 
      gap: 24px; 
      padding: 28px 20px; 
      border-radius: 10px; 
    } 
 
    .form-field { 
      gap: 10px; 
    } 
 
    .form-field label { 
      font-size: 14px; 
    } 
 
    .custom-select-button { 
      height: 46px; 
      padding: 0 13px; 
      font-size: 13px; 
    } 

    .custom-select-options { 
      top: calc(100% + 5px); 
    } 

    .custom-select-option { 
      padding: 12px 13px; 
      font-size: 13px; 
    } 
 
    .form-field input { 
      height: 46px; 
      padding: 0 13px; 
      font-size: 13px; 
    } 
 
    .form-field textarea { 
      min-height: 180px; 
      padding: 13px; 
      font-size: 13px; 
    } 
 
    .form-buttons { 
      gap: 8px; 
    } 
 
    .form-buttons button { 
      height: 50px; 
      min-width: 115px; 
      padding: 0 28px; 
      font-size: 14px; 
    } 
 
    .hover-cats { 
      width: 135px; 
      height: 34px; 
    } 
 
    .hover-cats img { 
      width: 27px; 
      height: 27px; 
    } 
  } 
`;

export default styles;
