import styled from "@emotion/styled";

/* =========================
   전체 모달 배경
========================= */

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 20px;
  box-sizing: border-box;

  background: rgb(0 0 0 / 40%);

  z-index: 999;
`;

/* =========================
   모달
========================= */

export const Modal = styled.div`
  position: relative;

  width: 100%;
  max-width: 1040px;

  padding: 50px;
  box-sizing: border-box;

  background: var(--bg);

  @media (max-width: 1023px) {
    max-width: 668px;
    padding: 30px;
  }

  @media (max-width: 767px) {
    max-width: 280px;
    padding: 20px;
  }
`;

/* =========================
   전체 내용
========================= */

export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 40px;

  width: 100%;

  @media (max-width: 767px) {
    gap: 30px;
  }
`;

/* =========================
   헤더
========================= */

export const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;

  color: var(--text-color);

  font-size: 36px;
  font-weight: 500;
  line-height: 1.2;

  @media (max-width: 1023px) {
    font-size: 30px;
  }

  @media (max-width: 767px) {
    font-size: 24px;
  }
`;

/* =========================
   닫기 버튼
========================= */

export const CloseButton = styled.button`
  position: absolute;

  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  padding: 0;
  margin: 0;

  border: none;
  background: transparent;

  color: var(--text-secondary);

  cursor: pointer;

  svg {
    display: block;

    width: 100%;
    height: 100%;
  }

  /* 태블릿 */
  @media (min-width: 768px) and (max-width: 1023px) {
    top: 15px;
    right: 15px;
  }

  /* 모바일 */
  @media (max-width: 767px) {
    top: 20px;
    right: 20px;

    width: 20px;
    height: 20 그 즐거워놨네요.px;
  }
`;

/* =========================
   상품 + 별점 영역
========================= */

export const ProductRatingWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  padding: 0 100px;
  box-sizing: border-box;

  @media (max-width: 1023px) {
    justify-content: center;

    padding: 0 1px;

    gap: 80px;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    padding: 0;

    gap: 30px;
  }
`;

/* =========================
   상품 정보
========================= */

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;

  gap: 20px;

  @media (max-width: 1023px) {
    gap: 30px;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  flex-shrink: 0;
`;

export const ProductName = styled.p`
  margin: 0;

  color: var(--text-color);

  font-size: 28px;
  font-weight: 400;

  @media (max-width: 1023px) {
    font-size: 24px;
  }

  @media (max-width: 767px) {
    font-size: 20px;
  }
`;

/* =========================
   별점 영역
========================= */

export const RatingSection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  gap: 15px;
`;

export const RatingGuide = styled.p`
  margin: 0;

  color: var(--text-color);

  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;

  text-align: center;

  @media (max-width: 1023px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const RatingText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  margin: 0;

  color: var(--text-secondary);

  font-size: 18px;
  font-weight: 500;
`;

export const RatingValue = styled.span`
  color: var(--text-secondary);

  font-size: 17px;
  font-weight: 500;
`;

export const StarRating = styled.div`
  display: flex;
  align-items: center;

  gap: 12px;
`;

export const StarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 16px;
  height: 15px;

  padding: 0;
  margin: 0;

  border: none;
  background: transparent;

  color: var(--text-color);

  cursor: pointer;

  svg {
    display: block;

    width: 16px;
    height: 15px;
  }
`;

/* =========================
   리뷰 입력 영역
========================= */

export const ReviewInputSection = styled.div`
  display: flex;
  flex-direction: column;

  gap: 15px;

  width: 100%;
`;

export const ReviewLabel = styled.label`
  color: var(--text-color);

  font-size: 22px;
  font-weight: 500;

  @media (max-width: 1023px) {
    font-size: 20px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const ReviewTextarea = styled.textarea`
  box-sizing: border-box;

  width: 100%;
  height: 121px;

  padding: 18px 20px;

  border: 1px solid var(--border);
  border-radius: 20px;

  background: transparent;

  color: var(--text-color);

  font-size: 18px;

  resize: none;

  &::placeholder {
    color: var(--text-secondary);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 1023px) {
    font-size: 17px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

/* =========================
   사진 첨부 버튼
========================= */

export const AttachmentButton = styled.button`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 10px;

  width: 100%;
  height: 91px;

  border: none;
  border-radius: var(--radius-md);

  background: var(--bg-button);

  color: var(--text-button);

  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  svg {
    width: 27px;
    height: 20px;

    fill: currentColor;
  }

  @media (max-width: 1023px) {
    font-size: 17px;
  }

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

/* =========================
   하단 버튼 영역
========================= */

export const ActionButtons = styled.div`
  display: flex;

  gap: 11px;

  width: 100%;
`;

export const CancelButton = styled.button`
  flex: 1;

  height: 42px;

  border: none;
  border-radius: var(--radius-md);

  background: var(--acent-beidge);

  color: var(--text-primary);

  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  @media (max-width: 1023px) {
    height: 41px;
    font-size: 17px;
  }

  @media (max-width: 767px) {
    height: 39px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button`
  flex: 1;

  height: 42px;

  border: none;
  border-radius: var(--radius-md);

  background: var(--bg-button);

  color: var(--text-button);

  font-size: 18px;
  font-weight: 500;

  cursor: pointer;

  @media (max-width: 1023px) {
    height: 41px;
    font-size: 17px;
  }

  @media (max-width: 767px) {
    height: 39px;
    font-size: 16px;
  }
`;
