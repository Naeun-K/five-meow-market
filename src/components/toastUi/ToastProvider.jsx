import { useState } from "react";
import Toast from "./Toast";
import { ToastContext } from "../../hooks/useToast";

function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = (message, success) => {
    setToast({
      message,
      success,
    });
  };

  const closeToast = () => {
    setToast(null);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {toast && (
        <Toast
          message={toast.message}
          success={toast.success}
          onClose={closeToast}
        />
      )}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
