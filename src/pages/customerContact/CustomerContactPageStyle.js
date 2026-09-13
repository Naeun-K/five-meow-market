const styles = ` 
  /* 전체 페이지 */ 
  .customer-contact-page { 
    min-height: calc(100vh - 160px); 
    background: #faf8f4; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
  } 
 
  .customer-contact-container { 
    width: 100%; 
    max-width: 1300px; 
    margin: 0 auto; 
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    min-height: calc(100vh - 160px); 
    box-sizing: border-box; 
    padding: 80px 80px; 
    position: relative; 
  } 
 
  /* 왼쪽 영역 */ 
  .contact-heading { 
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
  } 
 
  /* CONTACT 텍스트 */ 
  .contact-label { 
    margin: 0 0 72px; 
    color: var(--text-primary, #614832); 
    font-size: 22px; 
    font-weight: 700; 
    letter-spacing: 0.08em; 
  } 
 
  /* 메인 문구 */ 
  .contact-heading h1 { 
    margin: 0; 
    color: var(--text-primary, #614832); 
    font-size: clamp(42px, 5vw, 76px); 
    font-weight: 500; 
    line-height: 1.18; 
    letter-spacing: -0.06em; 
  } 
 
  /* 문의 버튼 전체 영역 */ 
  .inquiry-button-wrapper { 
    position: relative; 
    width: 280px; 
    margin-top: 90px; 
  } 
 
  /* 버튼 위에 나타나는 고양이 영역 */ 
  .inquiry-cats { 
    position: absolute; 
    left: 50%; 
    right: auto; 
    bottom: 55px; 
 
    z-index: 3; 
 
    display: flex; 
    align-items: flex-end; 
    justify-content: center; 
 
    width: 250px; 
    height: 52px; 
 
    transform: translate(-50%, 14px); 
 
    pointer-events: none; 
    opacity: 0; 
 
    transition: 
      opacity 0.25s ease, 
      transform 0.35s ease; 
  } 
 
  /* 고양이 이미지 */ 
  .inquiry-cats img { 
    display: block; 
    flex: 0 0 auto; 
    width: 48px; 
    height: 48px; 
    object-fit: contain; 
    margin: 0 -2px; 
    transform: none; 
  } 
 
  /* 고객 문의 버튼 */ 
  .contact-inquiry-link { 
    position: relative; 
    z-index: 2; 
 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
 
    width: 100%; 
    min-height: 68px; 
    box-sizing: border-box; 
    padding: 0 24px; 
 
    border: 1px solid var(--text-primary, #614832); 
    border-radius: 14px; 
 
    background: transparent; 
    color: var(--text-primary, #614832); 
 
    font-size: 18px; 
    font-weight: 500; 
    text-decoration: none; 
 
    transition: 
      background-color 0.25s ease, 
      border-color 0.25s ease, 
      color 0.25s ease; 
  } 
 
  /* 버튼 오른쪽 화살표 */ 
  .contact-arrow { 
    font-size: 22px; 
    line-height: 1; 
    transition: transform 0.25s ease; 
  } 
 
  /* 버튼 hover */ 
  .inquiry-button-wrapper:hover .contact-inquiry-link { 
    border-color: var(--bg-button, #745a42); 
    background: var(--bg-button, #745a42); 
    color: var(--text-button, #fff); 
  } 
 
  /* 화살표 hover */ 
  .inquiry-button-wrapper:hover .contact-arrow { 
    transform: translate(3px, -3px); 
  } 
 
  /* 고양이 hover */ 
  .inquiry-button-wrapper:hover .inquiry-cats { 
    opacity: 1; 
    transform: translate(-50%, 0); 
  } 
 
  /* 오른쪽 연락처 정보 */ 
  .contact-information { 
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; 
    gap: 16px; 
    padding-top: 0; 
 
    position: absolute; 
    right: 50px; 
    top: 44%; 
    transform: translateY(-50%); 
  } 
 
  /* 이메일 */ 
  .contact-email { 
    color: var(--text-primary, #614832); 
    font-size: 21px; 
    font-weight: 500; 
    text-decoration: none; 
    transition: opacity 0.2s ease; 
  } 
 
  .contact-email:hover { 
    opacity: 0.6; 
  } 
 
  /* 운영시간 / 전화번호 */ 
  .contact-hours { 
    margin: 0; 
    color: var(--text-secondary, #66615e); 
    font-size: 18px; 
    line-height: 1.6; 
  } 
 
  /* 태블릿 */ 
  @media (max-width: 1023px) { 
    .customer-contact-container { 
      min-height: calc(100vh - 150px); 
      padding: 36px 50px;
    } 
 
    .contact-label { 
      margin-bottom: 60px; 
      font-size: 20px; 
      font-weight: 700; 
    } 
 
    .contact-heading h1 { 
      font-size: clamp(35px, 5vw, 64px);
    } 
 
    .inquiry-button-wrapper { 
      margin-top: 78px; 
    } 
 
    .contact-information { 
      right: 30px; 
      top: 44%; 
      padding-top: 0; 
    } 
 
    .contact-email { 
      font-size: 19px; 
    } 
 
    .contact-hours { 
      font-size: 17px; 
    } 
  } 
 
  /* 모바일 */ 
  @media (max-width: 767px) { 
    .customer-contact-page { 
      min-height: auto; 
      display: block; 
    } 
 
    .customer-contact-container { 
      display: flex; 
      flex-direction: column; 
      justify-content: center; 
      align-items: center; 
      min-height: auto; 
      padding: 70px 20px 80px; 
      text-align: center; 
    } 
 
    .contact-heading { 
      width: 100%; 
      align-items: center; 
    } 
 
    .contact-label { 
      margin-bottom: 56px; 
      font-size: 20Spx; 
      font-weight: 700; 
    } 
 
    .contact-heading h1 { 
      font-size: clamp(42px, 10vw, 48px); 
      line-height: 1.2; 
      text-align: center; 
    } 
 
    /* 모바일에서는 제목 아래로 배치 */ 
    .contact-information { 
      position: static; 
      width: 100%; 
      align-items: center; 
      gap: 12px; 
      margin-top: 36px; 
      padding-top: 0; 
      transform: none; 
      text-align: center; 
    } 
 
    .inquiry-button-wrapper { 
      width: min(280px, 100%); 
      margin-top: 60px; 
    } 
 
    .contact-inquiry-link { 
      position: relative; 
      min-height: 62px; 
      padding: 0 20px; 
      border-radius: 12px; 
      font-size: 16px; 
      justify-content: center; 
      text-align: center; 
    } 

    /* 모바일에서도 화살표는 버튼 오른쪽에 고정 */ 
    .contact-arrow { 
      position: absolute; 
      right: 20px; 
    }
 
    /* 모바일 고양이 위치 */ 
    .inquiry-cats { 
      left: 50%; 
      right: auto; 
      bottom: 55px; 
 
      width: 230px; 
      height: 46px; 
 
      transform: translate(-50%, 14px); 
    } 
 
    .inquiry-cats img { 
      width: 43px; 
      height: 43px; 
      margin: 0 -2px; 
    } 
 
    .inquiry-button-wrapper:hover .inquiry-cats { 
      transform: translate(-50%, 0); 
    } 
 
    .contact-email { 
      font-size: 16px; 
    } 
 
    .contact-hours { 
      font-size: 15px; 
      line-height: 1.6; 
    } 
  } 
 
  /* 682px 이하 화면 */ 
  @media (max-width: 683px) { 
    .inquiry-cats { 
      bottom: 48px; 
    } 
  } 
 
  /* 작은 모바일 */ 
  @media (max-width: 374px) { 
    .customer-contact-container { 
      padding-right: 20px; 
      padding-left: 20px; 
    } 
 
    .contact-heading h1 { 
      font-size: 35px; 
    } 
 
    .inquiry-button-wrapper { 
      width: 100%; 
      margin-top: 54px; 
    } 
 
    /* 작은 모바일에서는 고양이를 조금 위로 조정 */ 
    .inquiry-cats { 
      left: 50%; 
      bottom: 52px; 
      width: 220px; 
 
      transform: translate(-50%, 14px) scale(0.9); 
      transform-origin: bottom center; 
    } 
 
    .inquiry-button-wrapper:hover .inquiry-cats { 
      transform: translate(-50%, 0) scale(0.9); 
    } 
 
    .contact-information { 
      margin-top: 30px; 
      gap: 10px; 
    } 
 
    .contact-email { 
      font-size: 15px; 
    } 
 
    .contact-hours { 
      font-size: 14px; 
    } 
  } 
 
  /* 터치 환경 */ 
  @media (hover: none) { 
    .inquiry-button-wrapper:focus-within .inquiry-cats { 
      opacity: 1; 
      transform: translate(-50%, 0); 
    } 
 
    .inquiry-button-wrapper:focus-within .contact-inquiry-link { 
      border-color: var(--bg-button, #745a42); 
      background: var(--bg-button, #745a42); 
      color: var(--text-button, #fff); 
    } 
  } 
`;

export default styles;
