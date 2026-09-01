const styles = `
  * {
    box-sizing: border-box;
  }

  .not-found {
    width: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 70px;

    background: #F7F1E6;
  }

  .not-found-content {
    width: 100%;
    max-width: 1300px;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 40px;
  }

  /* =========================
     404
  ========================= */

  .not-found-number {
    width: 100%;
    height: 65px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 44px;
    line-height: 66px;

    color: #3A3032;
  }

  /* =========================
     메인
  ========================= */

  .not-found-main {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;
  }

  .not-found-main h1 {
    margin: 0;

    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;

    text-align: center;

    color: #3A3430;
  }

  .not-found-image {
    width: 420px;
    height: 420px;

    display: block;

    object-fit: contain;
  }

  .not-found-main p {
    margin: 0;

    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 33px;

    text-align: center;

    color: #3A3032;
  }

  /* =========================
     고양이 + 버튼
  ========================= */

  .not-found-bottom {
    width: 257px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0;
    padding: 0;
  }

  /* =========================
     고양이 5마리
  ========================= */

  .not-found-cats {
    width: 257px;
    height: 43px;

    position: relative;

    margin: 0;
    padding: 0;

    overflow: visible;

    z-index: 5;
  }

  .cat {
    position: absolute;

    top: 0;

    width: 54px;
    height: 43px;

    overflow: visible;

    margin: 0;
    padding: 0;
  }

  .cat img {
    position: absolute;

    display: block;

    max-width: none;

    margin: 0;
    padding: 0;

    object-fit: fill;

    pointer-events: none;
  }

  /* =========================
     1번째 - CLEAN
  ========================= */

  .cat-clean {
    left: 30px;
    top: 5px;
  }

  .cat-clean img {
    width: 320px;
    height: 70px;

    left: -120px;
    top: -6px;
  }

  /* =========================
     2번째 - EAT
  ========================= */

  .cat-eat {
    left: 69px;
    top: 3px;
  }

  .cat-eat img {
    width: 280px;
    height: 71px;

    left: -79px;
    top: -7px;
  }

  /* =========================
     3번째 - HIGH
  ========================= */

  .cat-high {
    left: 108px;
    top: 2px;
  }

  .cat-high img {
    width: 204px;
    height: 69px;

    left: -80px;
    top: -6px;
  }

  /* =========================
     4번째 - PLAY
  ========================= */

  .cat-play {
    left: 147px;
    top: 2px;
  }

  .cat-play img {
    width: 280px;
    height: 71px;

    left: -79px;
    top: -8px;
  }

  /* =========================
     5번째 - rest
  ========================= */

  .cat-rest {
    left: 186px;
    top: 5px;
  }

  .cat-rest img {
    width: 202px;
    height: 72px;

    left: -82px;
    top: -6px;
  }

  /* =========================
     버튼
  ========================= */

  .not-found-button {
    width: 257px;
    height: 46px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: -1px 0 0 0;
    padding: 10px 20px;

    border: none;
    border-radius: 10px;

    background: #D7C1A7;

    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 17px;
    line-height: 26px;

    text-align: center;

    color: #3A3430;

    cursor: pointer;

    position: relative;
    z-index: 1;
  }

  /* =========================
     태블릿
  ========================= */

  @media (max-width: 1024px) {

    .not-found {
      padding: 50px;
    }

    .not-found-content {
      max-width: 668px;
      gap: 30px;
    }

    .not-found-number {
      height: 53px;

      font-size: 36px;
      line-height: 54px;
    }

    .not-found-main {
      gap: 20px;
    }

    .not-found-main h1 {
      font-size: 20px;
      line-height: 30px;
    }

    .not-found-image {
      width: 280px;
      height: 280px;
    }

    .not-found-main p {
      font-size: 20px;
      line-height: 30px;
    }

    .not-found-bottom {
      width: 257px;
    }

    .not-found-cats {
      width: 257px;
      height: 43px;
    }
  }

  /* =========================
     모바일
  ========================= */

  @media (max-width: 767px) {

    .not-found {
      min-height: 100svh;
      padding: 20px;
    }

    .not-found-content {
      width: 100%;
      max-width: 280px;

      gap: 30px;
    }

    .not-found-number {
      width: 280px;
      height: 42px;

      font-size: 28px;
      line-height: 42px;
    }

    .not-found-main {
      width: 280px;

      gap: 20px;
    }

    .not-found-main h1 {
      width: 280px;

      font-size: 18px;
      line-height: 27px;
    }

    .not-found-image {
      width: 280px;
      height: 280px;
    }

    .not-found-main p {
      width: 280px;

      font-size: 18px;
      line-height: 27px;
    }

    .not-found-bottom {
      width: 257px;
    }

    .not-found-cats {
      width: 257px;
      height: 43px;
    }

    .not-found-button {
      width: 257px;
      height: 50px;

      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export default styles;
