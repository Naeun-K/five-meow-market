import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./reviewListStyle";
import EmptyReviewCat from "../../assets/empty-review-cat.webp";
import ForwardButton from "../common/forwardBtn/ForwardButton";

import {
  deleteReview,
  getMyReviews,
  getWritableReviews,
} from "../../services/reviewService";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

const TABS = [
  {
    key: "available",
    label: "작성 가능한 리뷰",
  },
  {
    key: "written",
    label: "작성한 리뷰",
  },
];

function StarIcon({ filled }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path
        d="
          M12 3.8
          L14.5 8.9
          L20.1 9.7
          L16.1 13.6
          L17 19.1
          L12 16.5
          L7 19.1
          L7.9 13.6
          L3.9 9.7
          L9.5 8.9
          Z
        "
      />
    </svg>
  );
}

function Rating({ rating }) {
  const normalizedRating = Number(rating) || 0;

  return (
    <S.StarRating aria-label={`별점 ${normalizedRating}점`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} filled={index < normalizedRating} />
      ))}
    </S.StarRating>
  );
}

function formatDate(date) {
  if (!date) {
    return "";
  }

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  const year = parsedDate.getFullYear();

  const month = String(parsedDate.getMonth() + 1).padStart(2, "0");

  const day = String(parsedDate.getDate()).padStart(2, "0");

  return `${year}.${month}.${day}`;
}


function WritableReviewCard({ item, onWrite }) {
  return (
    <S.ReviewCard>
      <S.ProductArea>
        <S.ProductImage>
          {item.thumbnail ? (
            <img src={item.thumbnail} alt={item.name} />
          ) : (
            "사진"
          )}
        </S.ProductImage>

        <S.ProductInfo>
          <S.ProductName>{item.name}</S.ProductName>

          <S.MobileActions>
            <S.ActionButton type="button" onClick={() => onWrite(item)}>
              리뷰 작성
            </S.ActionButton>
          </S.MobileActions>
        </S.ProductInfo>
      </S.ProductArea>

      <S.ReviewContent>
        <S.ReviewTop>
          <S.ReviewMeta>
            <S.ReviewDate>
              {formatDate(item.confirmedAt)} 구매 확정
            </S.ReviewDate>
          </S.ReviewMeta>

          <S.ReviewActions>
            <S.ActionButton type="button" onClick={() => onWrite(item)}>
              리뷰 작성
            </S.ActionButton>
          </S.ReviewActions>
        </S.ReviewTop>

        <S.ReviewTextBox>
          <S.ReviewText>
            주문번호: {item.orderId}
            <br />
            수량: {item.quantity}개
            <br />
            결제 가격: {Number(item.price ?? 0).toLocaleString()}원
          </S.ReviewText>
        </S.ReviewTextBox>
      </S.ReviewContent>
    </S.ReviewCard>
  );
}


function WrittenReviewCard({ review, onEdit, onDelete }) {
  return (
    <S.ReviewCard>
      <S.ProductArea>
        <S.ProductImage>
          {review.productThumbnail ? (
            <img src={review.productThumbnail} alt={review.productName} />
          ) : (
            "사진"
          )}
        </S.ProductImage>

        <S.ProductInfo>
          <S.ProductName>{review.productName}</S.ProductName>

          <S.MobileActions>
            <S.ActionButton type="button" onClick={() => onEdit(review)}>
              수정
            </S.ActionButton>

            <S.ActionDivider>|</S.ActionDivider>

            <S.ActionButton
              type="button"
              onClick={() => onDelete(review.reviewId)}
            >
              삭제
            </S.ActionButton>
          </S.MobileActions>
        </S.ProductInfo>
      </S.ProductArea>

      <S.ReviewContent>
        <S.ReviewTop>
          <S.ReviewMeta>
            <Rating rating={review.rating} />

            <S.ReviewDate>{formatDate(review.createdAt)} 작성</S.ReviewDate>
          </S.ReviewMeta>

          <S.ReviewActions>
            <S.ActionButton type="button" onClick={() => onEdit(review)}>
              수정
            </S.ActionButton>

            <S.ActionDivider>|</S.ActionDivider>

            <S.ActionButton
              type="button"
              onClick={() => onDelete(review.reviewId)}
            >
              삭제
            </S.ActionButton>
          </S.ReviewActions>
        </S.ReviewTop>

        <S.ReviewTextBox>
          <S.ReviewText>{review.content}</S.ReviewText>
        </S.ReviewTextBox>
      </S.ReviewContent>
    </S.ReviewCard>
  );
}


function EmptyReview({ activeTab }) {
  const navigate = useNavigate();

  const isWritten = activeTab === "written";

  return (
    <S.EmptyReview>
      <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />

      <S.EmptyTitle>
        {isWritten ? "리뷰내역이 없습니다." : "작성 가능한 리뷰가 없습니다."}
      </S.EmptyTitle>

      <S.EmptyDescription>
        {isWritten ? (
          <>
            아직 작성한 리뷰가 없어요.
            <br />
            상품을 구매하고 소중한 후기를 남겨주세요!
          </>
        ) : (
          <>
            구매 확정된 주문 상품이 없거나
            <br />
            모든 상품의 리뷰를 이미 작성했어요.
          </>
        )}
      </S.EmptyDescription>

      <S.ProductButton type="button" onClick={() => navigate("/products")}>
        상품보러가기
      </S.ProductButton>
    </S.EmptyReview>
  );
}


function LoginRequiredReview() {
  const navigate = useNavigate();

  return (
    <S.EmptyReview>
      <S.EmptyImage src={EmptyReviewCat} alt="" aria-hidden="true" />

      <S.EmptyTitle>로그인이 필요합니다.</S.EmptyTitle>

      <S.EmptyDescription>
        로그인 후 작성 가능한 리뷰와
        <br />
        작성한 리뷰를 확인할 수 있습니다.
      </S.EmptyDescription>

      <S.ProductButton type="button" onClick={() => navigate("/login")}>
        로그인하러가기
      </S.ProductButton>
    </S.EmptyReview>
  );
}

export default function ReviewList({ onOpenWriteModal, onOpenEditModal }) {
  const navigate = useNavigate();

  const { accessToken } = useAuth();

  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState("available");

  const [availableReviews, setAvailableReviews] = useState([]);

  const [writtenReviews, setWrittenReviews] = useState([]);

  const [loadedRequestKey, setLoadedRequestKey] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  
  const currentRequestKey = accessToken ? `${accessToken}:${activeTab}` : "";

  
  const isLoading =
    Boolean(accessToken) && loadedRequestKey !== currentRequestKey;

  
  const loadAvailableReviews = useCallback(async () => {
    if (!accessToken) {
      return;
    }

    const response = await getWritableReviews(
      {
        page: 1,
        limit: 10,
      },
      accessToken,
    );

    if (!response.success) {
      throw new Error(
        response.message || "작성 가능한 리뷰를 불러오지 못했습니다.",
      );
    }

    const items =
      response.data?.items ?? response.items ?? response.writableReviews ?? [];

    setAvailableReviews(items);
  }, [accessToken]);

  
  const loadWrittenReviews = useCallback(async () => {
    if (!accessToken) {
      return;
    }

    const response = await getMyReviews(
      {
        page: 1,
        limit: 10,
      },
      accessToken,
    );

    if (!response.success) {
      throw new Error(response.message || "작성한 리뷰를 불러오지 못했습니다.");
    }

    const reviews = response.data?.reviews ?? response.reviews ?? [];

    setWrittenReviews(reviews);
  }, [accessToken]);

  
  useEffect(() => {
    if (!accessToken) {
      return undefined;
    }

    let isCancelled = false;

    const requestKey = `${accessToken}:${activeTab}`;

    const reviewRequest =
      activeTab === "available"
        ? getWritableReviews(
            {
              page: 1,
              limit: 10,
            },
            accessToken,
          )
        : getMyReviews(
            {
              page: 1,
              limit: 10,
            },
            accessToken,
          );

    reviewRequest
      .then((response) => {
        if (isCancelled) {
          return;
        }

        if (!response.success) {
          throw new Error(
            response.message || "리뷰 목록을 불러오지 못했습니다.",
          );
        }

        if (activeTab === "available") {
          const items =
            response.data?.items ??
            response.items ??
            response.writableReviews ??
            [];

          setAvailableReviews(items);
        } else {
          const reviews = response.data?.reviews ?? response.reviews ?? [];

          setWrittenReviews(reviews);
        }

        setErrorMessage("");

        setLoadedRequestKey(requestKey);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("리뷰 목록 조회 실패:", error);

        setErrorMessage(error.message || "리뷰 목록을 불러오지 못했습니다.");

        setLoadedRequestKey(requestKey);
      });

    return () => {
      isCancelled = true;
    };
  }, [activeTab, accessToken]);

  
  const handleTabChange = (tabKey) => {
    if (tabKey === activeTab) {
      return;
    }

    setErrorMessage("");

    setActiveTab(tabKey);
  };

  
  const handleWrite = (item) => {
    if (onOpenWriteModal) {
      onOpenWriteModal({
        orderId: item.orderId,
        productId: item.productId,
        productName: item.name,
        productThumbnail: item.thumbnail,
        price: item.price,
        quantity: item.quantity,

        
        onReviewCreated: async () => {
          try {
            await Promise.all([loadAvailableReviews(), loadWrittenReviews()]);

            showToast("리뷰가 등록되었습니다.", true);
          } catch (error) {
            console.error("리뷰 작성 후 목록 갱신 실패:", error);
          }
        },
      });

      return;
    }

    console.log("리뷰 작성 대상:", item);
  };

  
  const handleEdit = (review) => {
    if (onOpenEditModal) {
      onOpenEditModal({
        ...review,

        onReviewUpdated: async () => {
          try {
            await loadWrittenReviews();

            showToast("리뷰가 수정되었습니다.", true);
          } catch (error) {
            console.error("리뷰 수정 후 목록 갱신 실패:", error);
          }
        },
      });

      return;
    }

    console.log("리뷰 수정 대상:", review);
  };

  
  const handleDelete = async (reviewId) => {
    if (!accessToken) {
      showToast("로그인이 필요합니다.", false);

      return;
    }

    const isDelete = window.confirm("해당 리뷰를 삭제하시겠습니까?");

    if (!isDelete) {
      return;
    }

    try {
      const result = await deleteReview(reviewId, accessToken);

      if (!result.success) {
        throw new Error(result.message || "리뷰 삭제에 실패했습니다.");
      }

      
      setWrittenReviews((previousReviews) =>
        previousReviews.filter((review) => review.reviewId !== reviewId),
      );

      
      await loadAvailableReviews();

      showToast(result.message || "리뷰가 삭제되었습니다.", true);
    } catch (error) {
      console.error("리뷰 삭제 실패:", error);

      showToast(error.message || "리뷰 삭제에 실패했습니다.", false);
    }
  };

  return (
    <S.Page>
      <S.Header>
        <ForwardButton onClick={() => navigate("/mypage")}>
          마이페이지로
        </ForwardButton>

        <div>
          <S.Title>리뷰내역</S.Title>

          <S.Subtitle>고객님의 리뷰 내역을 확인해보세요.</S.Subtitle>
        </div>
      </S.Header>

      <S.TabSection>
        <S.MainTabList>
          {TABS.map((tab) => (
            <S.MainTabButton
              key={tab.key}
              type="button"
              isActive={activeTab === tab.key}
              onClick={() => handleTabChange(tab.key)}
            >
              {tab.label}
            </S.MainTabButton>
          ))}
        </S.MainTabList>

        <S.ReviewList>
          {!accessToken ? (
            <LoginRequiredReview />
          ) : isLoading ? (
            <S.EmptyReview>
              <S.EmptyTitle>리뷰 목록을 불러오는 중입니다.</S.EmptyTitle>
            </S.EmptyReview>
          ) : errorMessage ? (
            <S.EmptyReview>
              <S.EmptyTitle>리뷰 목록을 불러오지 못했습니다.</S.EmptyTitle>

              <S.EmptyDescription>{errorMessage}</S.EmptyDescription>
            </S.EmptyReview>
          ) : activeTab === "available" ? (
            availableReviews.length === 0 ? (
              <EmptyReview activeTab={activeTab} />
            ) : (
              availableReviews.map((item) => (
                <WritableReviewCard
                  key={`${item.orderId}-${item.productId}`}
                  item={item}
                  onWrite={handleWrite}
                />
              ))
            )
          ) : writtenReviews.length === 0 ? (
            <EmptyReview activeTab={activeTab} />
          ) : (
            writtenReviews.map((review) => (
              <WrittenReviewCard
                key={review.reviewId}
                review={review}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </S.ReviewList>
      </S.TabSection>
    </S.Page>
  );
}
