import { useEffect, useState } from "react";
import { AuthContext } from "../hooks/useAuth";
import * as authService from "../services/authService";

export default function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const isLoggedIn = !!accessToken && !!user;

  const clearAuth = () => {
    setAccessToken(null);
    setUser(null);
  };

  const login = async (email, password) => {
    try {
      setIsAuthLoading(true);

      const result = await authService.login(email, password);

      if (!result.success) {
        throw new Error(result.message || "로그인에 실패했습니다.");
      }

      const newAccessToken = result.accessToken;
      const loginUser = result.user;

      if (!newAccessToken || !loginUser) {
        throw new Error("로그인 응답 정보가 올바르지 않습니다.");
      }

      setAccessToken(newAccessToken);
      setUser(loginUser);

      return result;
    } finally {
      setIsAuthLoading(false);
    }
  };

  useEffect(() => {
    const restoreAuth = async () => {
      try {
        const refreshResult = await authService.refreshAccessToken();

        if (!refreshResult?.success || !refreshResult?.accessToken) {
          return;
        }

        const newAccessToken = refreshResult.accessToken;

        const meResult = await authService.getMe(newAccessToken);

        if (!meResult?.success || !meResult?.user) {
          return;
        }

        setAccessToken(newAccessToken);
        setUser(meResult.user);
      } catch {
        // Refresh Token이 없거나 만료된 경우
        // 초기값인 비로그인 상태를 그대로 유지
      } finally {
        setIsAuthLoading(false);
      }
    };

    restoreAuth();
  }, []);

  const logout = async () => {
    try {
      setIsAuthLoading(true);

      if (accessToken) {
        await authService.logout(accessToken);
      }
    } finally {
      clearAuth();
      setIsAuthLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        isLoggedIn,
        isAuthLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
