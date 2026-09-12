/** @jsxImportSource @emotion/react */
import { useState } from "react";
import * as S from "./HeartButton.style";

const HeartButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <button
      type="button"
      css={S.heartButton(isLiked)}
      onClick={() => setIsLiked(!isLiked)}
      aria-label={isLiked ? "찜 해제" : "찜하기"}
    >
      {isLiked ? (
        // 채워진 하트
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M8 15.5C-6.56 5.88 3.84-1.61 8 2.67 12.16-1.61 22.56 5.88 8 15.5Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="
      M8 14.5
      C7.5 14.15 1.5 10.15 1.5 5.65
      C1.5 3.35 3.15 1.85 5.15 1.85
      C6.35 1.85 7.35 2.45 8 3.35
      C8.65 2.45 9.65 1.85 10.85 1.85
      C12.85 1.85 14.5 3.35 14.5 5.65
      C14.5 10.15 8.5 14.15 8 14.5
      Z
    "
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default HeartButton;
