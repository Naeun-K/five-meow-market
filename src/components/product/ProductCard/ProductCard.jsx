/** @jsxImportSource @emotion/react */

import * as S from "./ProductCard.style";
import HeartButton from "../HeartButton/HeartButton";

const ProductCard = ({ image, name, badge, showHeart = true }) => {
  return (
    <article css={S.card}>
      {image && <img css={S.productImage} src={image} alt={name} />}

      {badge && <span css={S.badge(badge)}>{S.badgeText[badge]}</span>}

      {showHeart && <HeartButton />}
    </article>
  );
};

export default ProductCard;
