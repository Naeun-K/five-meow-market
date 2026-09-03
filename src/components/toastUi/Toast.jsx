import { useEffect } from "react";
import { ToastContainer } from "./ToastStyle";

function Toast({ message, success, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <ToastContainer $success={success}>
      <span>{message}</span>
    </ToastContainer>
  );
}

export default Toast;
