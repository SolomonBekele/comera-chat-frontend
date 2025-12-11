import React, { createContext, useContext, useState } from "react";
import useProfileData from "../hooks/useProfileData";

type User = {
  id: string;
  fullName: string;
  email: string;
  gender: string;
  profilePic: string;
} | null;

interface AuthContextType {
  authUser: User;
  setAuthUser: React.Dispatch<React.SetStateAction<User>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

// Create context
export const AuthContext = createContext<AuthContextType | null>(null);

// Custom hook
export const useAuthContext = () => useContext(AuthContext);

// Provider component
export const AuthContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const {userData} = useProfileData();
  const [authUser, setAuthUser] = useState<User>(userData);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
