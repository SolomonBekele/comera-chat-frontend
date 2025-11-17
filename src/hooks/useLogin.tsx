import React, { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

interface LoginParams {
  username: string;
  password: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAuthUser } = useAuthContext();

  const login = async (username: string, password: string): Promise<void> => {
    const success = handleInputErrors({ username, password });
    if (!success) return;

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // save to localStorage
      localStorage.setItem("chat-user", JSON.stringify(data));

      setAuthUser(data);
    } catch (error: any) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

// ---------------------------
// Input Validation Function
// ---------------------------
function handleInputErrors({ username, password }: LoginParams): boolean {
  if (!username || !password) {
    toast.error("Please fill in all fields");
    return false;
  }

  return true;
}
