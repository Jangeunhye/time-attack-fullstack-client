"use client";

import API from "@/api";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContext = {
  isLoggedIn: boolean;
  logIn: () => void;
  logOut: () => void;
};

const initialValue: AuthContext = {
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext<AuthContext>(initialValue);
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const logIn = () => {
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setIsLoggedIn(false);
  };

  const refreshToken = async () => {
    const response = await API.auth.refreshToken();

    if (response) {
      logIn();
    }
  };

  useEffect(() => {
    refreshToken();
  }, []);

  const value: AuthContext = { isLoggedIn, logIn, logOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
