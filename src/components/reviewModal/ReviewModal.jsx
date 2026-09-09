import { useState } from "react";

import {
  ModalOverlay,
  Modal,
  ReviewContent,
  ReviewHeader,
  Title,
  CloseButton,
  ProductRatingWrap,
  ProductInfo,
  ProductImage,
  ProductName,
  RatingSection,
  RatingGuide,
  RatingText,
  RatingValue,
  StarRating,
  StarButton,
  ReviewInputSection,
  ReviewLabel,
  ReviewTextarea,
  AttachmentButton,
  ActionButtons,
  CancelButton,
  SubmitButton,
} from "./ReviewModalStyle";

function ReviewModal() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const getRatingText = () => {
    if (rating === 0) return "평점을 선택해주세요";
    if (rating === 1) return "별로예요";
    if (rating === 2) return "아쉬워요";
    if (rating === 3) return "괜찮아요";
    if (rating === 4) return "좋아요!";
    return "최고예요!";
  };

  return (
    <ModalOverlay>
      <Modal>
        <ReviewContent>
          <ReviewHeader>
            <Title>리뷰 작성</Title>

            <CloseButton type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </CloseButton>
          </ReviewHeader>

          <ProductRatingWrap>
            <ProductInfo>
              <ProductImage />

              <ProductName>상품명 00000</ProductName>
            </ProductInfo>

            <RatingSection>
              <RatingGuide>
                상품에 만족하셨나요?
                <br />
                평점을 남겨주세요
              </RatingGuide>

              <RatingText>
                <RatingValue>{rating.toFixed(1)}</RatingValue>
                <span>{getRatingText()}</span>
              </RatingText>

              <StarRating>
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarButton
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                  >
                    {star <= rating ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792a.513.513 0 0 1 .927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                      </svg>
                    )}
                  </StarButton>
                ))}
              </StarRating>
            </RatingSection>
          </ProductRatingWrap>

          <ReviewInputSection>
            <ReviewLabel htmlFor="review">리뷰를 작성해주세요</ReviewLabel>

            <ReviewTextarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="상품에 대한 솔직한 리뷰를 작성해주세요."
            />
          </ReviewInputSection>

          <AttachmentButton type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
            >
              <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0" />
            </svg>
            사진 첨부하기
          </AttachmentButton>

          <ActionButtons>
            <CancelButton type="button">취소</CancelButton>

            <SubmitButton type="button">등록</SubmitButton>
          </ActionButtons>
        </ReviewContent>
      </Modal>
    </ModalOverlay>
  );
}

export default ReviewModal;
