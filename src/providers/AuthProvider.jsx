import { useEffect, useState } from "react";
import { AuthContext } from "../hooks/useAuth";
import * as authService from "../services/authService";

export default function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  const isLoggedIn = !!accessToken && !!user;

  // 인증 상태 초기화
  const clearAuth = () => {
    setAccessToken(null);
    setUser(null);
  };

  // 로그인
  const login = async (email, password) => {
    try {
      setIsAuthLoading(true);

      const result = await authService.login(email, password);

      if (!result.success) {
        throw new Error(result.message || "로그인에 실패했습니다.");
      }

      setAccessToken(result.accessToken);
      setUser(result.user);

      return result;
    } finally {
      setIsAuthLoading(false);
    }
  };

  // access token 복구
  useEffect(() => {
    const restoreAuth = async () => {
      try {
        // Refresh 인증으로 새로운 Access Token 발급
        const refreshResult = await authService.refreshAccessToken();

        if (!refreshResult.success) {
          setAccessToken(null);
          setUser(null);
          return;
        }
        const newAccessToken = refreshResult.accessToken;

        // 새 Access Token으로 현재 사용자 조회
        const meResult = await authService.getMe(newAccessToken);

        if (!meResult.success) {
          setAccessToken(null);
          setUser(null);
          return;
        }

        setAccessToken(newAccessToken);
        setUser(meResult.user);
      } catch {
        // Refresh Session이 없거나 만료된 경우
        // 정상적인 비로그인 상태로 처리
        setAccessToken(null);
        setUser(null);
      } finally {
        setIsAuthLoading(false);
      }
    };

    restoreAuth();
  }, []);

  // 로그아웃
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
