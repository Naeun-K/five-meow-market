import styled from "@emotion/styled";

/* 전체 404 페이지 */

export const NotFoundPage = styled.main`
  width: 100%;
  max-width: none;
  min-height: 100svh;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 70px;

  background: var(--bg);
  color: var(--text-color);

  @media (max-width: 1024px) {
    padding: 50px;
  }

  @media (max-width: 767px) {
    padding: 20px;
  }
`;

/* 전체 콘텐츠 */

export const NotFoundContent = styled.div`
  width: 100%;
  max-width: 1300px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 40px;

  @media (max-width: 1024px) {
    max-width: 668px;
    gap: 30px;
  }

  @media (max-width: 767px) {
    max-width: 280px;
    gap: 30px;
  }
`;

/* 404 숫자 */

export const NotFoundNumber = styled.div`
  width: 100%;
  height: 65px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 44px;
  line-height: 66px;

  color: var(--text-primary);

  @media (max-width: 1024px) {
    height: 53px;

    font-size: 36px;
    line-height: 54px;
  }

  @media (max-width: 767px) {
    width: 280px;
    height: 42px;

    font-size: 28px;
    line-height: 42px;
  }
`;

/* 제목 + 이미지 + 설명 */

export const NotFoundMain = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  @media (max-width: 767px) {
    width: 280px;
  }
`;

/* 제목 */

export const NotFoundTitle = styled.h1`
  margin: 0;

  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;

  text-align: center;

  color: var(--text-primary);

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 767px) {
    width: 280px;

    font-size: 18px;
    line-height: 27px;
  }
`;

/* 404 고양이 이미지 */

export const NotFoundImage = styled.img`
  width: 420px;
  height: 420px;

  display: block;

  object-fit: contain;

  @media (max-width: 1024px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 767px) {
    width: 280px;
    height: 280px;
  }
`;

/* 안내 문구 */

export const NotFoundDescription = styled.p`
  margin: 0;

  font-family: "Pretendard", sans-serif;
  font-weight: 400;
  font-size: 22px;
  line-height: 33px;

  text-align: center;

  color: var(--text-secondary);

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }

  @media (max-width: 767px) {
    width: 280px;

    font-size: 18px;
    line-height: 27px;
  }
`;

/* 고양이 + 버튼 */

export const NotFoundBottom = styled.div`
  width: 257px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0;
  padding: 0;
`;

/* 고양이 5마리 전체 */

export const NotFoundCats = styled.div`
  width: 257px;
  height: 43px;

  position: relative;

  margin: 0;
  padding: 0;

  overflow: visible;
  z-index: 5;
`;

/* 각각의 고양이 공통 */

export const Cat = styled.div`
  position: absolute;

  width: 54px;
  height: 43px;

  overflow: visible;

  & img {
    position: absolute;

    display: block;

    max-width: none;

    margin: 0;
    padding: 0;

    object-fit: fill;

    pointer-events: none;
  }
`;

/* CLEAN */

export const CatClean = styled(Cat)`
  left: 30px;
  top: 5px;

  & img {
    width: 320px;
    height: 70px;

    left: -120px;
    top: -6px;
  }
`;

/* EAT */

export const CatEat = styled(Cat)`
  left: 69px;
  top: 3px;

  & img {
    width: 280px;
    height: 71px;

    left: -79px;
    top: -7px;
  }
`;

/* HIGH */

export const CatHigh = styled(Cat)`
  left: 108px;
  top: 2px;

  & img {
    width: 204px;
    height: 69px;

    left: -80px;
    top: -6px;
  }
`;

/* PLAY */

export const CatPlay = styled(Cat)`
  left: 147px;
  top: 2px;

  & img {
    width: 280px;
    height: 71px;

    left: -79px;
    top: -8px;
  }
`;

/* REST */

export const CatRest = styled(Cat)`
  left: 186px;
  top: 5px;

  & img {
    width: 202px;
    height: 72px;

    left: -82px;
    top: -6px;
  }
`;

/* 홈으로 돌아가기 버튼 */

export const NotFoundButton = styled.button`
  width: 257px;
  height: 46px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: -1px 0 0;
  padding: 10px 20px;

  border: none;
  border-radius: var(--radius-md);

  background: var(--bg-button);

  font-family: "Pretendard", sans-serif;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;

  text-align: center;

  color: var(--text-button);

  cursor: pointer;

  position: relative;
  z-index: 1;

  @media (max-width: 767px) {
    width: 257px;
    height: 50px;

    font-size: 16px;
    line-height: 24px;
  }
`;
