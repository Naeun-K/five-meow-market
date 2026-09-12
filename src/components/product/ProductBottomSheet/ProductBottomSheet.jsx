import * as S from "./ProductBottonStyle";

export default function ProductBottomSheet({
  isOpen,
  onClose,
  product,
  quantity,
  onDecrease,
  onIncrease,
  onSubmit,
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-dash-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                  />
                </svg>
              </button>

              <span>{quantity}</span>

              <button type="button" onClick={onIncrease} aria-label="수량 증가">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
              </button>
            </S.QuantityControl>
          </S.ProductRow>
        </S.ProductInfo>

        <S.SubmitButton type="button" onClick={onSubmit}>
          {type === "cart"
            ? `${totalPrice.toLocaleString()}원 장바구니 담기`
            : `${totalPrice.toLocaleString()}원 구매하기`}
        </S.SubmitButton>
      </S.BottomSheet>
    </S.Backdrop>
  );
}
