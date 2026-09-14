import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/global.css";
import App from "./App.jsx";
import ToastProvider from "./providers/ToastProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ToastProvider>
          <App />
        </ToastProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
