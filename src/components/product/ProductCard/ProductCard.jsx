

































import * as S from "./ProductCard.style";
import HeartButton from "../HeartButton/HeartButton";

const ProductCard = ({
  productId,
  image,
  name,
  badge,
  showHeart = true,
  hover = true,
  isLiked = false,
  onWishlistChange,
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

      {showHeart && (
        <HeartButton
          productId={productId}
          initialIsLiked={isLiked}
          onWishlistChange={onWishlistChange}
        />
      )}
    </article>
  );
};

export default ProductCard;
