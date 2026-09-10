/** @jsxImportSource @emotion/react */

import ReviewCard from "./ReviewCard";
import { reviewGrid } from "./BestReviewStyle";

const bestReviews = [
  {
    productId: "cat-rest-004",
    name: "냥이가 다 해먹",
    userName: "일오묘님",
    image: "https://i.ibb.co/QjJZXCZv/4.webp",
    rating: 5,
    review:
      "냥이가 올라가자마자 자리 잡았어요! 생각보다 튼튼해서 집사도 만족합니다.",
  },
  {
    productId: "cat-play-003",
    name: "버튼 꾹꾹이",
    userName: "이오묘님",
    image: "https://i.ibb.co/N6bjxkch/3.webp",
    rating: 5,
    review:
      "버튼 누르는 걸 엄청 좋아해요. 혼자서도 잘 놀아서 너무 만족스러워요.",
  },
  {
    productId: "cat-high-004",
    name: "미끄럼틀 캣타워",
    userName: "삼오묘님",
    image: "https://i.ibb.co/dsm3wd0T/4.webp",
    rating: 5,
    review:
      "높이도 적당하고 미끄럼틀까지 있어서 그런지 하루 종일 여기서 놀아요.",
  },
  {
    productId: "cat-clean-005",
    name: "산뜻한 냥장실",
    userName: "사오묘님",
    image: "https://i.ibb.co/4rKBbsd/5.webp",
    rating: 5,
    review:
      "깔끔하고 사용하기 편해서 좋아요. 냥이도 거부감 없이 바로 사용했어요.",
  },
];

function BestReview() {
  return (
    <div css={reviewGrid}>
      {bestReviews.map((review) => (
        <ReviewCard key={review.productId} review={review} />
      ))}
    </div>
  );
}

export default BestReview;
