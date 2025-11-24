import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import useProfileData from "../hooks/useProfileData";

// Replace this with your real UserData type
type User = {
  id: string;
  fullName: string;
  email: string;
  gender: string;
  profilePic: string;
} | null;

// Shape of context
interface AuthContextType {
  authUser: User;
  setAuthUser: React.Dispatch<React.SetStateAction<User>>;
}

// Create context
export const AuthContext = createContext<AuthContextType | null>(null);

// Hook to use AuthContext
export const useAuthContext = () => {
 return useContext(AuthContext);
};

// Provider component
interface ProviderProps {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<ProviderProps> = ({ children }) => {
  // Auth user state
 const [authUser, setAuthUser] = useState<User>(() => {
  const stored = localStorage.getItem("user");
  return stored ? JSON.parse(stored) : null;
});


  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
