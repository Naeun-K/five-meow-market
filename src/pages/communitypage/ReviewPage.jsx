















































































































































import { useEffect, useState } from "react";

import BasicPage from "../basicPage/BasicPage";
import BoardPage from "../../components/board/BoardPage";
import Loader from "../../components/loader/Loader";
import { HomeButton } from "../product/productListPage/ProductListStyle";

import useAuth from "../../hooks/useAuth";
import { getMyReviews } from "../../services/reviewService";
import { mockReviewData } from "../../mock/mockReview";


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


const convertReviewForBoard = (review, number, isMine = false) => {
  return {
    id: review.reviewId,

    reviewId: review.reviewId,
    orderId: review.orderId,

    number,

    product: {
      productId: review.product?.productId ?? "",
      name: review.product?.name ?? "",
      thumbnail: review.product?.thumbnail ?? "",
    },

    title: review.content ?? "",
    content: review.content ?? "",

    writer: review.author ?? "",
    author: review.author ?? "",

    date: formatReviewDate(review.createdAt),
    createdAt: review.createdAt,

    rating: review.rating ?? 0,

    images: review.images ?? [],

    
    isPrivate: Boolean(review.isPrivate),

    
    isNew: checkIsNew(review.createdAt),

    
    isMine,
  };
};

export default function ReviewPage() {
  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

  const [myReviews, setMyReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    let isMounted = true;

    const loadMyReviews = async () => {
      
      if (isAuthLoading) {
        return;
      }

      
      
      if (!isLoggedIn || !accessToken) {
        if (isMounted) {
          setIsLoading(false);
        }

        return;
      }

      try {
        const response = await getMyReviews(
          {
            page: 1,
            limit: 100,
          },
          accessToken,
        );

        if (!isMounted) {
          return;
        }

        if (response.success) {
          setMyReviews(response.reviews ?? []);
        }
      } catch (error) {
        console.error("내 리뷰 조회 실패:", error);

        if (isMounted) {
          setMyReviews([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadMyReviews();

    return () => {
      isMounted = false;
    };
  }, [accessToken, isLoggedIn, isAuthLoading]);

  
  const sortedMyReviews = [...myReviews].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  
  const myReviewIds = new Set(sortedMyReviews.map((review) => review.reviewId));

  
  const sortedMockReviews = [...mockReviewData]
    .filter((review) => !myReviewIds.has(review.reviewId))
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  
  const combinedReviews = [
    ...sortedMyReviews.map((review) => ({
      ...review,
      isMine: true,
    })),

    ...sortedMockReviews.map((review) => ({
      ...review,
      isMine: false,
    })),
  ];

  
  const totalCount = combinedReviews.length;

  
  const reviewData = combinedReviews.map((review, index) => {
    const number = totalCount - index;

    return convertReviewForBoard(review, number, Boolean(review.isMine));
  });

  
  if (isAuthLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  
  if (isLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

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

        @media (max-width: 1024px) {
          .home-button-wrapper {
            padding-left: 50px;
          }
        }

        @media (max-width: 767px) {
          .home-button-wrapper {
            padding-left: 20px;
          }
        }
      `}</style>

      {}
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

      <BoardPage type="review" data={reviewData} />
    </BasicPage>
  );
}
