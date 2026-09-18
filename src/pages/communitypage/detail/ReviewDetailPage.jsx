import { useLocation, useNavigate, useParams } from "react-router-dom";
import BoardDetail from "../../../components/board/BoardDetail";
import { mockReviewData } from "../../../mock/mockReview";
import { HomeButton } from "../../product/productListPage/ProductListStyle";
import BasicPage from "../../basicPage/BasicPage";

const normalizeReview = (review) => {
  if (!review) {
    return null;
  }

  return {
    id: review.reviewId,
    reviewId: review.reviewId,
    orderId: review.orderId ?? null,

    product: {
      productId: review.product?.productId ?? review.productId ?? "",

      name: review.product?.name ?? review.productName ?? "",

      thumbnail: review.product?.thumbnail ?? review.thumbnail ?? "",
    },

    title: review.content ?? "",
    content: review.content ?? "",

    writer: review.maskedNickname ?? review.author ?? review.writer ?? "",

    author: review.maskedNickname ?? review.author ?? review.writer ?? "",

    rating: Number(review.rating) || 0,

    images: review.images ?? [],

    createdAt: review.createdAt ?? null,
  };
};

export default function ReviewDetailPage() {
  const { reviewId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const stateReview = location.state?.review;

  const mockReview = mockReviewData.find(
    (review) => String(review.reviewId) === String(reviewId),
  );

  const review = normalizeReview(mockReview ?? stateReview);

  if (!review) {
    return (
      <BasicPage>
        <style>{`
          .review-detail-home-wrapper {
            display: block;
            width: 100%;
            max-width: 1450px;
            padding-left: 120px;
            box-sizing: border-box;
          }

          .review-not-found {
            width: 100%;
            min-height: 500px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 24px;
            padding: 40px 20px;
            box-sizing: border-box;
            text-align: center;
          }

          .review-not-found p {
            margin: 0;
            color: var(--text-primary, #4f3927);
            font-size: 18px;
            line-height: 1.6;
          }

          .review-not-found button {
            min-width: 120px;
            height: 44px;
            padding: 0 24px;
            border: 1px solid #4f3927;
            border-radius: 6px;
            background: #ffffff;
            color: #4f3927;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
          }

          .review-not-found button:hover {
            background: #4f3927;
            color: #ffffff;
          }

          @media (max-width: 1023px) {
            .review-detail-home-wrapper {
              padding-left: 50px;
            }
          }

          @media (max-width: 767px) {
            .review-detail-home-wrapper {
              padding-left: 20px;
            }

            .review-not-found {
              min-height: 400px;
            }

            .review-not-found p {
              font-size: 16px;
            }
          }
        `}</style>

        <div className="review-detail-home-wrapper">
          <HomeButton
            to="/"
            style={{
              display: "block",
              width: "fit-content",
              margin: 0,
              transform: "none",
            }}
          >
            ← 홈으로 이동
          </HomeButton>
        </div>

        <div className="review-not-found">
          <p>존재하지 않는 리뷰입니다.</p>

          <button type="button" onClick={() => navigate("/community/review")}>
            목록으로
          </button>
        </div>
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <style>{`
        .review-detail-home-wrapper {
          display: block;
          width: 100%;
          max-width: 1450px;
          padding-left: 120px;
          box-sizing: border-box;
        }

        @media (max-width: 1023px) {
          .review-detail-home-wrapper {
            padding-left: 50px;
          }
        }

        @media (max-width: 767px) {
          .review-detail-home-wrapper {
            padding-left: 20px;
          }
        }
      `}</style>

      <div className="review-detail-home-wrapper">
        <HomeButton
          to="/"
          style={{
            display: "block",
            width: "fit-content",
            margin: 0,
            transform: "none",
          }}
        >
          ← 홈으로 이동
        </HomeButton>
      </div>

      <BoardDetail type="review" data={review} listPath="/community/review" />
    </BasicPage>
  );
}
