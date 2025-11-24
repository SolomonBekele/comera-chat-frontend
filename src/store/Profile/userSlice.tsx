// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import { loginUser } from "./userThunk";

// export interface User {
//   id: string;
//   fullName: string;
//   username: string;
//   email: string;
//   profilePic: string
// }

// interface UserState {
//   user: User | null;
//   loading: boolean;
//   error: string | null;
//   isAuthenticated: boolean;
// }

// const initialState: UserState = {
//   user: null,
//   loading: false,
//   error: null,
//   isAuthenticated: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.isAuthenticated = false;
//       state.error = null;
//       localStorage.removeItem("user");
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.isAuthenticated = true;
//         localStorage.setItem("user", JSON.stringify(action.payload));
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = (action.payload as { error: string })?.error || "Failed to login";
//         state.isAuthenticated = false;
//       });
//   },
// });

// export const { logout } = userSlice.actions;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./userThunk";
import type { UserData, LoginResponse } from "./type";

interface UserState {
  user: UserData | null;
  token: string;
  loading: boolean;
  isAuthenticated: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  token: "",
  loading: false,
  isAuthenticated: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = "";
      state.error = null;
      localStorage.removeItem("user-token");
      localStorage.removeItem("user")
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.data;   // ✔ typed
        state.token = action.payload.token; // ✔ typed

        localStorage.setItem("user-token", action.payload.token);
        localStorage.setItem("user",JSON.stringify(action.payload.data))
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as any)?.message || "Login failed";
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
