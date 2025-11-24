import { createAsyncThunk } from "@reduxjs/toolkit";
import type { LoginResponse } from "./type";

interface LoginPayload {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk<LoginResponse, LoginPayload>(
  "user/login",
  async (payload, { rejectWithValue }) => {
    try {
      const res = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        return rejectWithValue(data);
      }

      return data as LoginResponse;   // 👈 perfect match for your API
    } catch (err) {
      return rejectWithValue({ message: "Network error" });
    }
  }
);
