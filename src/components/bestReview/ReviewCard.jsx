/** @jsxImportSource @emotion/react */

import {
  reviewCard,
  productImage,
  reviewContent,
  productName,
  reviewText,
  ratingArea,
  ratingTop,
  ratingNumber,
  ratingText,
  starRating,
  star,
  emptyStar,
} from "./BestReviewStyle";

function getRatingText(rating) {
  if (rating >= 5) {
    return "최고예요!";
  }

  if (rating >= 4) {
    return "좋아요";
  }

  if (rating >= 3) {
    return "괜찮아요!";
  }

  if (rating >= 2) {
    return "그저 그래요";
  }

  if (rating >= 1) {
    return "별로예요";
  }
}

function Star({ filled }) {
  return (
    <svg
      css={filled ? star : emptyStar}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M12 2.5L14.93 8.44L21.5 9.4L16.75 14.02L17.87 20.56L12 17.47L6.13 20.56L7.25 14.02L2.5 9.4L9.07 8.44L12 2.5Z" />
    </svg>
  );
}

function ReviewCard({ review }) {
  const ratingTextValue = getRatingText(review.rating);
  const filledStars = Math.round(review.rating).toFixed(1);

  return (
    <article css={reviewCard}>
      <div css={productImage}>
        <img src={review.image} alt={review.name} loading="lazy" />
      </div>

      <div css={reviewContent}>
        <p css={productName}>{review.name}</p>

        <p css={reviewText}>{review.review}</p>

        <div css={ratingArea}>
          <div css={ratingTop}>
            <span css={ratingNumber}>{review.rating}</span>

            <span css={ratingText}>{ratingTextValue}</span>

            <span
              css={{
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "20px",
                color: "var(--text-primary)",
                marginLeft: "auto",
              }}
            >
              {review.userName.slice(0, 1) + "*** 님"}
            </span>
          </div>

          <div css={starRating} aria-label={`${review.rating}점`}>
            {[0, 1, 2, 3, 4].map((index) => (
              <Star key={index} filled={index < filledStars} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReviewCard;
