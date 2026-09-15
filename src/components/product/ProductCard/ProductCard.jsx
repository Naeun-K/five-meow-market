/** @jsxImportSource @emotion/react */

import * as S from "./ProductCard.style";
import HeartButton from "../HeartButton/HeartButton";

const ProductCard = ({
  image,
  name,
  badge,
  showHeart = true,
  hover = true,
}) => {
  return (
    <article css={S.card(hover)}>
      {image && (
        <img
          css={S.productImage(hover)}
          src={image}
          alt={name}
          loading="lazy"
        />
      )}

      {badge && <span css={S.badge(badge)}>{S.badgeText[badge]}</span>}

      {showHeart && <HeartButton />}
    </article>
  );
};

export default ProductCard;
