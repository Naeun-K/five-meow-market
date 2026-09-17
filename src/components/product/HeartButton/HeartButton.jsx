// /** @jsxImportSource @emotion/react */
// import { useState } from "react";
// import * as S from "./HeartButton.style";

// const HeartButton = () => {
//   const [isLiked, setIsLiked] = useState(false);

//   const handleClick = () => {
//     setIsLiked(!isLiked);
//   };

//   return (
//     <button
//       type="button"
//       css={S.heartButton(isLiked)}
//       onClick={handleClick}
//       aria-label={isLiked ? "찜 해제" : "찜하기"}
//     >
//       {isLiked ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 16 16"
//           fill="currentColor"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M8 15.5C-6.56 5.88 3.84-1.61 8 2.67 12.16-1.61 22.56 5.88 8 15.5Z"
//           />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 16 16"
//           fill="none"
//           aria-hidden="true"
//         >
//           <path
//             d="
//       M8 14.5
//       C7.5 14.15 1.5 10.15 1.5 5.65
//       C1.5 3.35 3.15 1.85 5.15 1.85
//       C6.35 1.85 7.35 2.45 8 3.35
//       C8.65 2.45 9.65 1.85 10.85 1.85
//       C12.85 1.85 14.5 3.35 14.5 5.65
//       C14.5 10.15 8.5 14.15 8 14.5
//       Z
//     "
//             stroke="currentColor"
//             strokeWidth="1.2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           />
//         </svg>
//       )}
//     </button>
//   );
// };

// export default HeartButton;

/** @jsxImportSource @emotion/react */

import { useState } from "react";
import * as S from "./HeartButton.style";
import * as wishlistService from "../../../services/wishlistServices";
import useAuth from "../../../hooks/useAuth";
import useToast from "../../../hooks/useToast";

const HeartButton = ({
  productId,
  initialIsLiked = false,
  onWishlistChange,
}) => {
  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();
  const { showToast } = useToast();

  const [isLiked, setIsLiked] = useState(initialIsLiked);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isAuthLoading || isProcessing) {
      return;
    }

    if (!isLoggedIn || !accessToken) {
      showToast("로그인 후 찜한 상품을 이용해주세요.", false);
      return;
    }

    if (!productId) {
      console.error("HeartButton에 productId가 없습니다.");

      showToast("상품 정보를 확인할 수 없습니다.", false);

      return;
    }

    try {
      setIsProcessing(true);

      let result;

      if (isLiked) {
        // 찜 해제
        result = await wishlistService.removeWishlist(productId, accessToken);
      } else {
        // 찜 추가
        result = await wishlistService.addWishlist(productId, accessToken);
      }

      if (!result.success) {
        throw new Error(result.message || "찜 상태 변경에 실패했습니다.");
      }

      // 서버에서 반환한 찜 상태 사용
      const nextIsLiked = result.isLiked;

      setIsLiked(nextIsLiked);

      onWishlistChange?.(productId, nextIsLiked);

      showToast(
        result.message ||
          (nextIsLiked
            ? "찜한 상품에 추가되었습니다."
            : "찜한 상품에서 해제되었습니다."),
        true,
      );
    } catch (error) {
      console.error("찜 상태 변경 실패:", error);

      showToast(error.message || "찜 상태 변경 중 문제가 발생했습니다.", false);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      type="button"
      css={S.heartButton(isLiked)}
      onClick={handleClick}
      aria-label={isLiked ? "찜 해제" : "찜하기"}
      aria-pressed={isLiked}
      disabled={isProcessing}
    >
      {isLiked ? (
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
