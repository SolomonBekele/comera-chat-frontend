import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { SignUpPayload, SignupResponse } from "./type";
import { BASE_URL, USER_AUTH_API, VERSION } from "../../utils/constants";
export const api = createApi({
  reducerPath: "user/signup",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}${VERSION}${USER_AUTH_API}`,
    validateStatus: (response, result) => {
      return response.status >= 200 && response.status < 300;
    },
  }),
  endpoints: (builder) => ({
    signupUser: builder.mutation<SignupResponse, SignUpPayload>({
      query: (payload) => ({
        url: "/signup",
        method: "POST",
        body: payload,
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});

export const { useSignupUserMutation } = api;