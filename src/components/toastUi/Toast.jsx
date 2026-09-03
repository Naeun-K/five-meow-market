import { useEffect } from "react";
import * as S from "./Toast.styles";

function Toast({ message, type = "error", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <S.ToastContainer type={type}>
      <span>{message}</span>
    </S.ToastContainer>
  );
}

export default Toast;
