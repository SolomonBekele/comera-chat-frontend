import { createSlice } from "@reduxjs/toolkit";
import { loginUser, updateUser } from "./userThunk";
import type { UserData } from "./type";

interface UserState {
  userData: UserData | null;

  login: {
    loading: boolean;
    error: string | null;
    message: string | null;
    isAuthenticated: boolean;
  };

  update: {
    loading: boolean;
    error: string | null;
    message: string | null;
    isUpdated: boolean;
  };
}

const initialState: UserState = {
  userData: null,

  login: {
    loading: false,
    error: null,
    message: null,
    isAuthenticated: false,
  },

  update: {
    loading: false,
    error: null,
    message: null,
    isUpdated: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.userData = null;

      // reset login state
      state.login = {
        loading: false,
        error: null,
        message: null,
        isAuthenticated: false,
      };
      localStorage.removeItem("user-token");
      localStorage.removeItem("user-refresh-token");
    },
    resetUpdate(state) {
    state.update = { loading: false, isUpdated: false, message: null, error: null };
  }
  },

  extraReducers: (builder) => {
    /** -----------------------------------------
     *                LOGIN
     * -----------------------------------------*/
    builder
      .addCase(loginUser.pending, (state) => {
        state.login.loading = true;
        state.login.error = null;
        state.login.message = "logging...";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.login.loading = false;
        state.login.isAuthenticated = true;
        state.login.message = action.payload.message;

        // save token
        localStorage.setItem("user-token", action.payload.token);
        localStorage.setItem("user-refresh-token", action.payload.refreshToken);

        // same userData
        state.userData = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.login.loading = false;
        state.login.error = (action.payload as any)?.message || "Login failed";
        state.login.message = null;
      });

    /** -----------------------------------------
     *                UPDATE
     * -----------------------------------------*/
    builder
      .addCase(updateUser.pending, (state) => {
        state.update.loading = true;
        state.update.error = null;
        state.update.message = "updating...";
        state.update.isUpdated = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.update.loading = false;
        state.update.isUpdated = true;
        state.update.message = action.payload.message;

        // SAME userData is updated
        state.userData = action.payload.user;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.update.loading = false;
        state.update.error = (action.payload as any)?.message || "Update failed";
        state.update.message = null;
      });
  },
});

export const { logout,resetUpdate } = userSlice.actions;
export default userSlice.reducer;
