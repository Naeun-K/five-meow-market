    import React, { useState } from "react";
import * as S from "./reviewListStyle";


/* ─────────────────────────────
   리뷰 탭 데이터
───────────────────────────── */

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


/* ─────────────────────────────
   리뷰 데이터
───────────────────────────── */

const REVIEWS = [
  {
    id: 1,
    productName: "고양이 캣타워",
    image: null,
    rating: 5,
    date: "2026.09.12",
    content:
      "너무 가성비 있게 구매했고 추후에 재구매 의향 있습니다!",
  },

  {
    id: 2,
    productName: "집사말고 이거물어",
    image: null,
    rating: 5,
    date: "2026.09.12",
    content:
      "덕분에 주인님께 평소보다 덜 물렸습니다.",
  },

  {
    id: 3,
    productName: "못잡겠쥐?",
    image: null,
    rating: 5,
    date: "2026.09.12",
    content:
      "고양이한테 터키 아이스크림 빙의했다가 냥냥펀치 당했습니다.",
  },
];


/* ─────────────────────────────
   Star SVG
───────────────────────────── */

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
};

/* ─────────────────────────────
   별점 표시
───────────────────────────── */

function Rating({ rating }) {
  return (
    <S.StarRating>
      {Array.from({ length: 5 }).map((_, index) => (
        <StarIcon
          key={index}
          filled={index < rating}
        />
      ))}
    </S.StarRating>
  );
}


/* ─────────────────────────────
   개별 리뷰 카드
───────────────────────────── */

function ReviewCard({ review, onEdit, onDelete }) {
  return (
    <S.ReviewCard>

      {/* 상품 이미지 / 상품명 */}
      <S.ProductArea>

        <S.ProductImage>
          {review.image ? (
            <img
              src={review.image}
              alt={review.productName}
            />
          ) : (
            "사진"
          )}
        </S.ProductImage>

        <S.ProductInfo>
         <S.ProductName>
          {review.productName}
         </S.ProductName>

         <S.MobileActions>
            <S.ActionButton
            type="button"
            onClick={()=> onEdit(review.id)}
            >수정</S.ActionButton>

            <S.ActionDivider>|</S.ActionDivider>

          <S.ActionButton
          type="button"
          onClick={() => onDelete(review.id)}
          > 삭제
          </S.ActionButton>
        </S.MobileActions>
      </S.ProductInfo>


      </S.ProductArea>


      {/* 리뷰 영역 */}
      <S.ReviewContent>

        {/* 별점 / 날짜 / 수정 삭제 */}
        <S.ReviewTop>

          <S.ReviewMeta>

            <Rating rating={review.rating} />

            <S.ReviewDate>
              {review.date} 작성
            </S.ReviewDate>

          </S.ReviewMeta>


          <S.ReviewActions>

            <S.ActionButton
              type="button"
              onClick={() => onEdit(review.id)}
            >
              수정
            </S.ActionButton>

            <S.ActionDivider>
              |
            </S.ActionDivider>

            <S.ActionButton
              type="button"
              onClick={() => onDelete(review.id)}
            >
              삭제
            </S.ActionButton>

          </S.ReviewActions>

        </S.ReviewTop>


        {/* 리뷰 본문 */}
        <S.ReviewTextBox>

          <S.ReviewText>
            {review.content}
          </S.ReviewText>

        </S.ReviewTextBox>

      </S.ReviewContent>

    </S.ReviewCard>
  );
}


/* ─────────────────────────────
   리뷰 목록 페이지
───────────────────────────── */

export default function ReviewList() {

  const [activeTab, setActiveTab] =
    useState("written");


  /* 리뷰 수정 */
  const handleEdit = (reviewId) => {
    console.log("리뷰 수정:", reviewId);
  };


  /* 리뷰 삭제 */
  const handleDelete = (reviewId) => {

    const isDelete =
      window.confirm(
        "해당 리뷰를 삭제하시겠습니까?"
      );

    if (!isDelete) return;

    console.log("리뷰 삭제:", reviewId);
  };


  return (
    <S.Page>

      {/* 페이지 제목 */}
      <S.Header>

        <S.Title>
          리뷰내역
        </S.Title>

        <S.Subtitle>
          고객님의 리뷰 내역을 확인해보세요.
        </S.Subtitle>

      </S.Header>

     
      {/* 리뷰 탭 */}
      <S.TabSection>

       <S.MainTabList>

        {TABS.map((tab) => (

          <S.MainTabButton
            key={tab.key}
            type="button"
            isActive={
              activeTab === tab.key
            }
            onClick={() =>
              setActiveTab(tab.key)
            }
          >
            {tab.label}
          </S.MainTabButton>
        ))}
      </S.MainTabList>


      {/* 리뷰 목록 */}
      <S.ReviewList>
        {activeTab === "written" ? (
          REVIEWS.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <S.ReviewText>
            작성 가능한 리뷰가 없습니다.
          </S.ReviewText>
        )}
      </S.ReviewList>
    </S.TabSection>

    </S.Page>
  );
}