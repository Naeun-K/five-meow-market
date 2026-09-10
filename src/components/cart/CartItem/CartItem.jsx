import { useState } from "react";
import {
  CartItemRoot,
  CheckBox,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  QuantityControl,
  QuantityButton,
  QuantityValue,
  ItemPrice,
  RemoveButton,
} from "./CartItemStyle";

const defaultProduct = {
  name: "깃털 장난감",
  price: 9900,
  quantity: 1,
  thumbnail: "https://i.ibb.co/1t95sXZw/2.webp",
};

function QuantityIcon({ type }) {
  const path = type === "plus" ? "M12 5v14M5 12h14" : "M5 12h14";

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
    >
      <path
        d={path}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function CartItem({ product = defaultProduct, onRemove, onQuantityChange }) {
  const [quantity, setQuantity] = useState(product.quantity ?? 1);

  const updateQuantity = (nextQuantity) => {
    if (nextQuantity < 1) return;

    setQuantity(nextQuantity);
    onQuantityChange?.(nextQuantity);
  };

  return (
    <CartItemRoot>
      <CheckBox type="checkbox" aria-label={`${product.name} 선택`} />
      <ProductImage src={product.thumbnail} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
      </ProductInfo>
      <QuantityControl aria-label="상품 수량 조절">
        <QuantityButton
          type="button"
          aria-label="수량 줄이기"
          onClick={() => updateQuantity(quantity - 1)}
        >
          <QuantityIcon type="minus" />
        </QuantityButton>
        <QuantityValue>{quantity}</QuantityValue>
        <QuantityButton
          type="button"
          aria-label="수량 늘리기"
          onClick={() => updateQuantity(quantity + 1)}
        >
          <QuantityIcon type="plus" />
        </QuantityButton>
      </QuantityControl>
      <ItemPrice>{(product.price * quantity).toLocaleString()}원</ItemPrice>
      <RemoveButton
        type="button"
        aria-label={`${product.name} 삭제`}
        onClick={() => onRemove?.(product)}
      >
        ×
      </RemoveButton>
    </CartItemRoot>
  );
}

export default CartItem;
