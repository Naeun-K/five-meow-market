// import BasicPage from "../basicPage/BasicPage";
// import BoardPage from "../../components/board/BoardPage";
// import { HomeButton } from "../product/productListPage/ProductListStyle";

// const reviewData = [
//   {
//     id: "review-001",
//     number: 14608,
//     product: {
//       productId: "cat-play-001",
//       name: "고양이 낚싯대 장난감",
//       thumbnail: "/images/products/cat-play-001.webp",
//     },
//     title: "우리 고양이가 정말 좋아해요!",
//     writer: "김****",
//     date: "2026-09-10",
//     rating: 5,
//     isNew: true,
//   },
//   {
//     id: "review-002",
//     number: 14607,
//     product: {
//       productId: "cat-rest-001",
//       name: "포근한 고양이 쿠션",
//       thumbnail: "/images/products/cat-rest-001.webp",
//     },
//     title: "생각보다 푹신하고 좋네요",
//     writer: "이****",
//     date: "2026-09-09",
//     rating: 4,
//   },
//   {
//     id: "review-003",
//     number: 14606,
//     product: {
//       productId: "cat-eat-001",
//       name: "오묘한 세라믹 식기",
//       thumbnail: "/images/products/cat-eat-001.webp",
//     },
//     title: "높이가 적당해서 잘 먹어요",
//     writer: "박****",
//     date: "2026-09-08",
//     rating: 5,
//   },
//   {
//     id: "review-004",
//     number: 14605,
//     product: {
//       productId: "cat-clean-001",
//       name: "고양이 모래매트",
//       thumbnail: "/images/products/cat-clean-001.webp",
//     },
//     title: "모래가 확실히 덜 튀어요",
//     writer: "최****",
//     date: "2026-09-07",
//     rating: 5,
//   },
//   {
//     id: "review-005",
//     number: 14604,
//     product: {
//       productId: "cat-high-001",
//       name: "원목 캣타워",
//       thumbnail: "/images/products/cat-high-001.webp",
//     },
//     title: "조립도 쉽고 튼튼합니다",
//     writer: "정****",
//     date: "2026-09-06",
//     rating: 4,
//   },
//   {
//     id: "review-006",
//     number: 14603,
//     product: {
//       productId: "cat-play-002",
//       name: "바스락 고양이 터널",
//       thumbnail: "/images/products/cat-play-002.webp",
//     },
//     title: "하루 종일 여기서 놀고 있어요",
//     writer: "윤****",
//     date: "2026-09-05",
//     rating: 5,
//   },
//   {
//     id: "review-007",
//     number: 14602,
//     product: {
//       productId: "cat-rest-002",
//       name: "구름 고양이 방석",
//       thumbnail: "/images/products/cat-rest-002.webp",
//     },
//     title: "폭신폭신해서 잠을 잘 자네요",
//     writer: "한****",
//     date: "2026-09-04",
//     rating: 5,
//   },
// ];

// export default function ReviewPage() {
//   return (
//     <BasicPage>
//       <style>{`
//         .home-button-wrapper {
//           display: block;
//           width: 100%;
//           margin-bottom: 0;
//           text-align: left;
//           padding-left: 120px;
//           box-sizing: border-box;
//         }

//         @media (max-width: 1024px) {
//           .home-button-wrapper {
//             padding-left: 50px;
//           }
//         }

//         @media (max-width: 767px) {
//           .home-button-wrapper {
//             padding-left: 20px;
//           }
//         }
//       `}</style>

//       {/* 홈으로 이동 */}
//       <div className="home-button-wrapper">
//         <HomeButton
//           to="/"
//           style={{
//             display: "block",
//             width: "fit-content",
//             margin: 0,
//             transform: "none",
//           }}
//         >
//           ← 홈으로 이동
//         </HomeButton>
//       </div>

//       <BoardPage type="review" data={reviewData} />
//     </BasicPage>
//   );
// }
import { useEffect, useState } from "react";

import BasicPage from "../basicPage/BasicPage";
import BoardPage from "../../components/board/BoardPage";
import Loader from "../../components/loader/Loader";
import { HomeButton } from "../product/productListPage/ProductListStyle";

import useAuth from "../../hooks/useAuth";
import { getMyReviews } from "../../services/reviewService";
import { mockReviewData } from "../../mock/mockReview";

/**
 * 리뷰 작성 후 24시간 이내인지 확인
 */
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

/**
 * 날짜 표시
 *
 * 2026-09-17T20:30:00+09:00
 * ↓
 * 2026.09.17
 */
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

/**
 * BoardPage에서 사용하는 데이터 형식으로 변환
 */
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

    // 비밀글 여부
    isPrivate: Boolean(review.isPrivate),

    // 작성 후 24시간 동안만 NEW
    isNew: checkIsNew(review.createdAt),

    // 내가 작성한 리뷰 여부
    isMine,
  };
};

export default function ReviewPage() {
  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();

  const [myReviews, setMyReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * 내가 작성한 리뷰 조회
   *
   * GET /users/me/reviews
   */
  useEffect(() => {
    let isMounted = true;

    const loadMyReviews = async () => {
      // 인증 상태 확인 중
      if (isAuthLoading) {
        return;
      }

      // 비로그인 상태
      // Mock Review만 표시
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

  /**
   * 내가 작성한 리뷰
   * 최신순 정렬
   */
  const sortedMyReviews = [...myReviews].sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  /**
   * 내 리뷰 ID 목록
   *
   * Mock Review와 실제 리뷰의 reviewId가
   * 중복되는 경우를 방지
   */
  const myReviewIds = new Set(sortedMyReviews.map((review) => review.reviewId));

  /**
   * Mock Review
   *
   * 중복 제거 후 최신순 정렬
   */
  const sortedMockReviews = [...mockReviewData]
    .filter((review) => !myReviewIds.has(review.reviewId))
    .sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

  /**
   * 최종 리뷰 목록
   *
   * 내가 작성한 리뷰
   * ↓
   * Mock Review
   *
   * 순서로 배치
   */
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

  /**
   * 전체 리뷰 개수
   *
   * 최신 리뷰가 가장 큰 번호를 가짐
   */
  const totalCount = combinedReviews.length;

  /**
   * BoardPage에 전달할 최종 데이터
   *
   * 예:
   *
   * 7 → 최신
   * 6
   * 5
   * 4
   * 3
   * 2
   * 1 → 가장 오래된 리뷰
   */
  const reviewData = combinedReviews.map((review, index) => {
    const number = totalCount - index;

    return convertReviewForBoard(review, number, Boolean(review.isMine));
  });

  /**
   * 인증 상태 복구 중
   */
  if (isAuthLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  /**
   * 내 리뷰 조회 중
   */
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

      {/* 홈으로 이동 */}
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

      {/* 리뷰 게시판 */}
      <BoardPage type="review" data={reviewData} />
    </BasicPage>
  );
}
