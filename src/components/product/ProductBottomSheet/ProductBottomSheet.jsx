import * as S from "./ProductBottonStyle";

export default function ProductBottomSheet({
  isOpen,
  onClose,
  product,
  quantity,
  onDecrease,
  onIncrease,
  type,
}) {
  if (!isOpen) return null;

  const totalPrice = (product?.price ?? 0) * quantity;

  return (
    <S.Backdrop onClick={onClose}>
      <S.BottomSheet onClick={(e) => e.stopPropagation()}>
        <S.Handle />

        <S.ProductInfo>
          <S.ProductName>{product.name}</S.ProductName>

          <S.ProductRow>
            <S.Price>{totalPrice.toLocaleString()}원</S.Price>

            <S.QuantityControl>
              <button
                type="button"
                onClick={onDecrease}
                disabled={quantity <= 1}
                aria-label="수량 감소"
              >
                −
              </button>

              <span>{quantity}</span>

              <button type="button" onClick={onIncrease} aria-label="수량 증가">
                +
              </button>
            </S.QuantityControl>
          </S.ProductRow>
        </S.ProductInfo>

        <S.SubmitButton type="button">
          {type === "cart"
            ? `${totalPrice.toLocaleString()}원 장바구니 담기`
            : `${totalPrice.toLocaleString()}원 구매하기`}
        </S.SubmitButton>
      </S.BottomSheet>
    </S.Backdrop>
  );
}
