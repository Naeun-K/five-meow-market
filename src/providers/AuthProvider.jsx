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

      setAccessToken(result.data.accessToken);
      setUser(result.data.user);

      return result;
    } finally {
      setIsAuthLoading(false);
    }
  };

  useEffect(() => {
    const restoreAuth = async () => {
      try {
        const refreshResult = await authService.refreshAccessToken();

        if (!refreshResult.success) {
          setAccessToken(null);
          setUser(null);
          return;
        }
        const newAccessToken = refreshResult.data.accessToken;

        const meResult = await authService.getMe(newAccessToken);

        if (!meResult.success) {
          setAccessToken(null);
          setUser(null);
          return;
        }

        setAccessToken(newAccessToken);
        setUser(meResult.user);
      } catch {
        setAccessToken(null);
        setUser(null);
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
