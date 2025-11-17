import React, { createContext, useContext, useState, ReactNode } from "react";

// ----------------------------
// 1. Define User Type
// ----------------------------

export interface AuthUser {
  id: string;
  username: string;
  email?: string;
  token?: string;
  // add any other fields returned from backend
}

// ----------------------------
// 2. Define Context Shape
// ----------------------------

interface AuthContextType {
  authUser: AuthUser | null;
  setAuthUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

// ----------------------------
// 3. Create Context with Type
// ----------------------------

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// ----------------------------
// 4. Custom Hook
// ----------------------------

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used inside AuthContextProvider");
  }
  return context;
};

// ----------------------------
// 5. Provider Props Type
// ----------------------------

interface AuthProviderProps {
  children: ReactNode;
}

// ----------------------------
// 6. Provider Component
// ----------------------------

export const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const storedUser = localStorage.getItem("chat-user");
  const initialUser: AuthUser | null = storedUser ? JSON.parse(storedUser) : null;

  const [authUser, setAuthUser] = useState<AuthUser | null>(initialUser);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
