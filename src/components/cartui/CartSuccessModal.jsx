import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import * as S from "./CartModalStyle";

export default function CartSuccessModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) return null;

  const handleGoCart = () => {
    onClose();
    navigate("/cart");
  };

  return createPortal(
    <S.Backdrop onClick={onClose}>
      <S.Modal
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-success-title"
        onClick={(e) => e.stopPropagation()}
      >
        <S.IconWrapper aria-hidden="true">✓</S.IconWrapper>

        <S.TextWrapper>
          <S.Title id="cart-success-title">장바구니에 담았어요!</S.Title>

          <S.Description>장바구니를 확인하시겠어요?</S.Description>
        </S.TextWrapper>

        <S.ButtonWrapper>
          <S.ContinueButton type="button" onClick={onClose}>
            쇼핑 계속하기
          </S.ContinueButton>

          <S.CartButton type="button" onClick={handleGoCart}>
            장바구니 확인하기
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Modal>
    </S.Backdrop>,
    modalRoot,
  );
}
