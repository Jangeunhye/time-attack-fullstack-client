"use client";

import { useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

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

  const value: AuthContext = { isLoggedIn, logIn, logOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
