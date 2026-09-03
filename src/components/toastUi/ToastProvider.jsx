import { useState } from "react";
import Toast from "./Toast";
import { ToastContext } from "./ToastContext";

function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "error") => {
    setToast({
      message,
      type,
    });
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={closeToast} />
      )}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
