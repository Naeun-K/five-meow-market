import { createContext, useContext } from "react";

export const ToastContext = createContext(null);

export default function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast는 ToastProvider 내부에서 사용해야 합니다.");
  }

  return context;
}
