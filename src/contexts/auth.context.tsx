"use client";

import API, { client } from "@/api";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
  isAuthInitialized: boolean;
  setIsAuthInitialized: Dispatch<SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  isAuthInitialized: false,
  setIsAuthInitialized: () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    setIsAuthInitialized,
    isAuthInitialized,
  };

  useEffect(() => {
    const isAccessTokenStored = !!(typeof window !== "undefined"
      ? window.localStorage.getItem("accessToken")
      : null);
    setIsAuthInitialized(true);
    setIsLoggedIn(isAccessTokenStored);
  }, []);

  useEffect(() => {
    let timerId: number | undefined;
    if (isLoggedIn) {
      const timerId = window.setInterval(async () => {
        const accessToken = await API.auth.refreshToken();
        client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
      }, 1000 * 60 * 4.5);
      return () => {
        window.clearInterval(timerId);
      };
    } else {
      if (!timerId) return;

      window.clearInterval(timerId);
    }
  }, [isLoggedIn]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
