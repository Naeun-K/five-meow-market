// import { useState } from "react";

// import {
//   ModalOverlay,
//   Modal,
//   ReviewContent,
//   ReviewHeader,
//   Title,
//   CloseButton,
//   ProductRatingWrap,
//   ProductInfo,
//   ProductImage,
//   ProductName,
//   RatingSection,
//   RatingGuide,
//   RatingText,
//   RatingValue,
//   StarRating,
//   StarButton,
//   ReviewInputSection,
//   ReviewLabel,
//   ReviewTextarea,
//   ActionButtons,
//   CancelButton,
//   SubmitButton,
// } from "./ReviewModalStyle";

// import useAuth from "../../hooks/useAuth";
// import useToast from "../../hooks/useToast";

// import { createReview } from "../../services/reviewService";

// function ReviewModal({ orderId, productId, product, onClose, onSuccess }) {
//   const [rating, setRating] = useState(0);
//   const [review, setReview] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const { accessToken } = useAuth();
//   const { showToast } = useToast();

//   const getRatingText = () => {
//     if (rating === 0) return "평점을 선택해주세요";
//     if (rating === 1) return "별로예요";
//     if (rating === 2) return "아쉬워요";
//     if (rating === 3) return "괜찮아요";
//     if (rating === 4) return "좋아요!";
//     return "최고예요!";
//   };

//   const handleSubmit = async () => {
//     if (isSubmitting) {
//       return;
//     }

//     if (!accessToken) {
//       showToast("로그인이 필요합니다.", false);
//       return;
//     }

//     if (!orderId) {
//       showToast("주문 정보를 확인할 수 없습니다.", false);
//       return;
//     }

//     if (!productId) {
//       showToast("상품 정보를 확인할 수 없습니다.", false);
//       return;
//     }

//     if (rating < 1 || rating > 5) {
//       showToast("별점을 선택해주세요.", false);
//       return;
//     }

//     const trimmedReview = review.trim();

//     if (!trimmedReview) {
//       showToast("리뷰 내용을 작성해주세요.", false);
//       return;
//     }

//     setIsSubmitting(true);

//     try {
//       const result = await createReview(
//         {
//           orderId,
//           productId,
//           rating,
//           content: trimmedReview,
//           images: [],
//         },
//         accessToken,
//       );

//       if (!result.success) {
//         throw new Error(result.message || "리뷰 등록에 실패했습니다.");
//       }

//       showToast(result.message || "리뷰가 등록되었습니다.", true);

//       if (onSuccess) {
//         onSuccess({
//           reviewId: result.reviewId,
//           orderId: result.orderId ?? orderId,
//           productId: result.productId ?? productId,
//           createdAt: result.createdAt,
//         });
//       }

//       onClose();
//     } catch (error) {
//       console.error("리뷰 등록 실패:", error);

//       showToast(error?.message || "리뷰 등록 중 오류가 발생했습니다.", false);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <ModalOverlay>
//       <Modal>
//         <ReviewContent>
//           <ReviewHeader>
//             <Title>리뷰 작성</Title>

//             <CloseButton
//               type="button"
//               onClick={onClose}
//               disabled={isSubmitting}
//               aria-label="리뷰 작성 닫기"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 fill="currentColor"
//               >
//                 <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
//               </svg>
//             </CloseButton>
//           </ReviewHeader>

//           <ProductRatingWrap>
//             <ProductInfo>
//               <ProductImage>
//                 {product?.thumbnail && (
//                   <img
//                     src={product.thumbnail}
//                     alt={product?.name ?? "상품 이미지"}
//                   />
//                 )}
//               </ProductImage>

//               <ProductName>{product?.name ?? "상품 정보 없음"}</ProductName>
//             </ProductInfo>

//             <RatingSection>
//               <RatingGuide>
//                 상품에 만족하셨나요?
//                 <br />
//                 평점을 남겨주세요
//               </RatingGuide>

//               <RatingText>
//                 <RatingValue>{rating.toFixed(1)}</RatingValue>

//                 <span>{getRatingText()}</span>
//               </RatingText>

//               <StarRating>
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <StarButton
//                     key={star}
//                     type="button"
//                     onClick={() => setRating(star)}
//                     disabled={isSubmitting}
//                     aria-label={`${star}점`}
//                   >
//                     {star <= rating ? (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 16 16"
//                         fill="currentColor"
//                       >
//                         <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792a.513.513 0 0 1 .927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
//                       </svg>
//                     ) : (
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         viewBox="0 0 16 16"
//                         fill="currentColor"
//                       >
//                         <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
//                       </svg>
//                     )}
//                   </StarButton>
//                 ))}
//               </StarRating>
//             </RatingSection>
//           </ProductRatingWrap>

//           <ReviewInputSection>
//             <ReviewLabel htmlFor="review">리뷰를 작성해주세요</ReviewLabel>

//             <ReviewTextarea
//               id="review"
//               value={review}
//               onChange={(event) => setReview(event.target.value)}
//               placeholder="상품에 대한 솔직한 리뷰를 작성해주세요."
//               disabled={isSubmitting}
//             />
//           </ReviewInputSection>

//           <ActionButtons>
//             <CancelButton
//               type="button"
//               onClick={onClose}
//               disabled={isSubmitting}
//             >
//               취소
//             </CancelButton>

//             <SubmitButton
//               type="button"
//               onClick={handleSubmit}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "등록 중..." : "등록"}
//             </SubmitButton>
//           </ActionButtons>
//         </ReviewContent>
//       </Modal>
//     </ModalOverlay>
//   );
// }

// export default ReviewModal;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  ActionButtons,
  CancelButton,
  SubmitButton,
} from "./ReviewModalStyle";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

import { createReview } from "../../services/reviewService";

function ReviewModal({ orderId, productId, product, onClose, onSuccess }) {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const { accessToken } = useAuth();
  const { showToast } = useToast();

  const getRatingText = () => {
    if (rating === 0) return "평점을 선택해주세요";
    if (rating === 1) return "별로예요";
    if (rating === 2) return "아쉬워요";
    if (rating === 3) return "괜찮아요";
    if (rating === 4) return "좋아요!";
    return "최고예요!";
  };

  const handleSubmit = async () => {
    if (isSubmitting) {
      return;
    }

    if (!accessToken) {
      showToast("로그인이 필요합니다.", false);
      return;
    }

    if (!orderId) {
      showToast("주문 정보를 확인할 수 없습니다.", false);
      return;
    }

    if (!productId) {
      showToast("상품 정보를 확인할 수 없습니다.", false);
      return;
    }

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      showToast("별점을 선택해주세요.", false);
      return;
    }

    const trimmedReview = review.trim();

    if (!trimmedReview) {
      showToast("리뷰 내용을 작성해주세요.", false);
      return;
    }

    setIsSubmitting(true);

    try {
      /*
       * 리뷰 등록
       *
       * POST /reviews
       */
      const result = await createReview(
        {
          orderId,
          productId,
          rating,
          content: trimmedReview,
          images: [],
        },
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "리뷰 등록에 실패했습니다.");
      }

      /*
       * 등록된 리뷰 정보
       */
      const createdReview = {
        reviewId: result.reviewId,
        orderId: result.orderId ?? orderId,
        productId: result.productId ?? productId,

        product: {
          productId,
          name: product?.name ?? "",
          thumbnail: product?.thumbnail ?? "",
        },

        rating,
        content: trimmedReview,
        images: [],

        createdAt: result.createdAt ?? new Date().toISOString(),
      };

      /*
       * 등록 성공
       */
      showToast(result.message || "리뷰가 등록되었습니다.", true);

      /*
       * 부모 컴포넌트에서
       * 등록 성공 후 추가 처리가 필요한 경우
       */
      if (typeof onSuccess === "function") {
        onSuccess(createdReview);
      }

      /*
       * 리뷰 모달 닫기
       */
      onClose();

      /*
       * 전체 리뷰 페이지로 이동
       *
       * <Route
       *   path="/community/review"
       *   element={<ReviewPage />}
       * />
       */
      navigate("/community/review");
    } catch (error) {
      console.error("리뷰 등록 실패:", error);

      showToast(error?.message || "리뷰 등록 중 오류가 발생했습니다.", false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ModalOverlay>
      <Modal>
        <ReviewContent>
          <ReviewHeader>
            <Title>리뷰 작성</Title>

            <CloseButton
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              aria-label="리뷰 작성 닫기"
            >
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
              <ProductImage>
                {product?.thumbnail && (
                  <img
                    src={product.thumbnail}
                    alt={product?.name ?? "상품 이미지"}
                  />
                )}
              </ProductImage>

              <ProductName>{product?.name ?? "상품 정보 없음"}</ProductName>
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
                    disabled={isSubmitting}
                    aria-label={`${star}점`}
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
              onChange={(event) => setReview(event.target.value)}
              placeholder="상품에 대한 솔직한 리뷰를 작성해주세요."
              disabled={isSubmitting}
            />
          </ReviewInputSection>

          <ActionButtons>
            <CancelButton
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
            >
              취소
            </CancelButton>

            <SubmitButton
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "등록 중..." : "등록"}
            </SubmitButton>
          </ActionButtons>
        </ReviewContent>
      </Modal>
    </ModalOverlay>
  );
}

export default ReviewModal;
