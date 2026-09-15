import { useState } from "react";
import * as S from "./reviewListStyle";
import EmptyReviewCat from "../../assets/empty-review-cat.webp";

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

const REVIEWS = [
  {
    id: 1,
    productName: "고양이 캣타워",
    image: null,
    rating: 5,
    date: "2026.09.12",
    content: "너무 가성비 있게 구매했고 추후에 재구매 의향 있습니다!",
  },

  {
    id: 2,
    productName: "집사말고 이거물어",
    image: null,
    rating: 5,
    date: "2026.09.12",
    content: "덕분에 주인님께 평소보다 덜 물렸습니다.",
  },

  {
    id: 3,
    productName: "못잡겠쥐?",
    image: null,
    rating: 5,
    date: "2026.09.12",
    content: "고양이한테 터키 아이스크림 빙의했다가 냥냥펀치 당했습니다.",
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
  return (
    <S.StarRating>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon key={index} filled={index < rating} />
      ))}
    </S.StarRating>
  );
}

function ReviewCard({ review, onEdit, onDelete }) {
  return (
    <S.ReviewCard>
      <S.ProductArea>
        <S.ProductImage>
          {review.image ? (
            <img src={review.image} alt={review.productName} />
          ) : (
            "사진"
          )}
        </S.ProductImage>

        <S.ProductInfo>
          <S.ProductName>{review.productName}</S.ProductName>

          <S.MobileActions>
            <S.ActionButton type="button" onClick={() => onEdit(review.id)}>
              수정
            </S.ActionButton>

            <S.ActionDivider>|</S.ActionDivider>

            <S.ActionButton type="button" onClick={() => onDelete(review.id)}>
              {" "}
              삭제
            </S.ActionButton>
          </S.MobileActions>
        </S.ProductInfo>
      </S.ProductArea>

      <S.ReviewContent>
        <S.ReviewTop>
          <S.ReviewMeta>
            <Rating rating={review.rating} />

            <S.ReviewDate>{review.date} 작성</S.ReviewDate>
          </S.ReviewMeta>

          <S.ReviewActions>
            <S.ActionButton type="button" onClick={() => onEdit(review.id)}>
              수정
            </S.ActionButton>

            <S.ActionDivider>|</S.ActionDivider>

            <S.ActionButton type="button" onClick={() => onDelete(review.id)}>
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
  const isWritten = activeTab === "written";

  return (
    <S.EmptyReview>
      <S.EmptyImage src={EmptyReviewCat} alt="리뷰 내역 없음" />

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
            아직 작성 가능한 리뷰가 없어요.
            <br />
            상품을 구매하고 리뷰를 작성해보세요!
          </>
        )}
      </S.EmptyDescription>

      <S.ProductButton type="button">상품보러가기</S.ProductButton>
    </S.EmptyReview>
  );
}

export default function ReviewList() {
  const [activeTab, setActiveTab] = useState("written");

  const availableReviews = [];
  const writtenReviews = REVIEWS;

  const currentReviews =
    activeTab === "written" ? writtenReviews : availableReviews;

  const handleEdit = (reviewId) => {
    console.log("리뷰 수정:", reviewId);
  };

  const handleDelete = (reviewId) => {
    const isDelete = window.confirm("해당 리뷰를 삭제하시겠습니까?");

    if (!isDelete) return;

    console.log("리뷰 삭제:", reviewId);
  };

  return (
    <S.Page>
      <S.Header>
        <S.Title>리뷰내역</S.Title>

        <S.Subtitle>고객님의 리뷰 내역을 확인해보세요.</S.Subtitle>
      </S.Header>

      <S.TabSection>
        <S.MainTabList>
          {TABS.map((tab) => (
            <S.MainTabButton
              key={tab.key}
              type="button"
              isActive={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </S.MainTabButton>
          ))}
        </S.MainTabList>

        {/* [수정] 리뷰가 없으면 EmptyReview, 있으면 ReviewCard */}
        <S.ReviewList>
          {currentReviews.length === 0 ? (
            <EmptyReview activeTab={activeTab} />
          ) : (
            currentReviews.map((review) => (
              <ReviewCard
                key={review.id}
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
