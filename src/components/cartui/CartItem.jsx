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

function CartItem({
  item,
  checked = false,
  onCheck,
  onRemove,
  onQuantityChange,
}) {
  const { cartItemId, name, price, quantity, thumbnail } = item;

  const handleDecrease = () => {
    if (quantity <= 1) return;

    onQuantityChange?.(cartItemId, quantity - 1);
  };

  const handleIncrease = () => {
    onQuantityChange?.(cartItemId, quantity + 1);
  };

  return (
    <CartItemRoot>
      <CheckBox
        type="checkbox"
        checked={checked}
        onChange={(event) => onCheck?.(cartItemId, event.target.checked)}
        aria-label={`${name} 선택`}
      />

      <ProductImage src={thumbnail} alt={name} />

      <ProductInfo>
        <ProductName>{name}</ProductName>

        <ProductPrice>{price.toLocaleString()}원</ProductPrice>
      </ProductInfo>

      <QuantityControl aria-label="상품 수량 조절">
        <QuantityButton
          type="button"
          aria-label="수량 줄이기"
          disabled={quantity <= 1}
          onClick={handleDecrease}
        >
          <QuantityIcon type="minus" />
        </QuantityButton>

        <QuantityValue>{quantity}</QuantityValue>

        <QuantityButton
          type="button"
          aria-label="수량 늘리기"
          onClick={handleIncrease}
        >
          <QuantityIcon type="plus" />
        </QuantityButton>
      </QuantityControl>

      <ItemPrice>{(price * quantity).toLocaleString()}원</ItemPrice>

      <RemoveButton
        type="button"
        aria-label={`${name} 삭제`}
        onClick={() => onRemove?.(cartItemId)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>
      </RemoveButton>
    </CartItemRoot>
  );
}

export default CartItem;
