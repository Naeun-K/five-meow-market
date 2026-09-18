import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BasicPage from "../basicPage/BasicPage";
import BoardPage from "../../components/board/BoardPage";
import Pagination from "../../components/pagnation/Pagnation";
import { HomeButton } from "../product/productListPage/ProductListStyle";

import { mockReviewData } from "../../mock/mockReview";

const ITEMS_PER_PAGE = 10;

const checkIsNew = (createdAt) => {
  if (!createdAt) {
    return false;
  }

  const createdTime = new Date(createdAt).getTime();

  if (Number.isNaN(createdTime)) {
    return false;
  }

  const currentTime = Date.now();
  const twentyFourHours = 24 * 60 * 60 * 1000;
  const elapsedTime = currentTime - createdTime;

  return elapsedTime >= 0 && elapsedTime < twentyFourHours;
};

const formatReviewDate = (createdAt) => {
  if (!createdAt) {
    return "";
  }

  const date = new Date(createdAt);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
};

const convertReviewForBoard = (review, number) => {
  return {
    id: review.reviewId,

    reviewId: review.reviewId,
    orderId: review.orderId ?? null,

    number,

    product: {
      productId: review.product?.productId ?? review.productId ?? "",

      name: review.product?.name ?? review.productName ?? "",

      thumbnail: review.product?.thumbnail ?? review.thumbnail ?? "",
    },

    title: review.content ?? "",
    content: review.content ?? "",

    writer: review.maskedNickname ?? review.author ?? review.writer ?? "",

    author: review.maskedNickname ?? review.author ?? review.writer ?? "",

    date: formatReviewDate(review.createdAt),
    createdAt: review.createdAt,

    rating: Number(review.rating) || 0,

    images: review.images ?? [],

    isNew: checkIsNew(review.createdAt),

    isMock: true,
  };
};

export default function ReviewPage() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const sortedMockReviews = [...mockReviewData].sort((a, b) => {
    const aNumber = Number(a.number) || 0;
    const bNumber = Number(b.number) || 0;

    if (aNumber !== bNumber) {
      return bNumber - aNumber;
    }

    const aTime = new Date(a.createdAt).getTime();
    const bTime = new Date(b.createdAt).getTime();

    return bTime - aTime;
  });

  const reviewData = sortedMockReviews.map((review, index) => {
    const number = Number(review.number) || sortedMockReviews.length - index;

    return convertReviewForBoard(review, number);
  });

  const totalPages = Math.max(1, Math.ceil(reviewData.length / ITEMS_PER_PAGE));

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const endIndex = startIndex + ITEMS_PER_PAGE;

  const paginatedReviewData = reviewData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleReviewClick = (review) => {
    if (!review?.reviewId) {
      return;
    }

    navigate(`/community/review/${review.reviewId}`, {
      state: {
        review,
      },
    });
  };

  return (
    <BasicPage>
      <style>{`
        .home-button-wrapper {
          display: block;
          width: 100%;
          margin-bottom: 0;
          max-width: 1450px;
          text-align: left;
          padding-left: 120px;
          box-sizing: border-box;
        }

        .review-pagination-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 40px;
        }

        @media (max-width: 1024px) {
          .home-button-wrapper {
            padding-left: 50px;
          }

          .review-pagination-wrapper {
            margin-top: 30px;
          }
        }

        @media (max-width: 767px) {
          .home-button-wrapper {
            padding-left: 20px;
          }

          .review-pagination-wrapper {
            margin-top: 24px;
          }
        }
      `}</style>

      <div className="home-button-wrapper">
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

      <BoardPage
        type="review"
        data={paginatedReviewData}
        onItemClick={handleReviewClick}
      />

      {totalPages > 1 && (
        <div className="review-pagination-wrapper">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </BasicPage>
  );
}
