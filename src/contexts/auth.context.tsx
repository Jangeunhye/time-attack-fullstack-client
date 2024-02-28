"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
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
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    isAuthInitialized,
    setIsAuthInitialized,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
