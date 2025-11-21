// src/redux/features/auth/authApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/v1/auth/" }),
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return headers;
  },
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "login",
        method: "POST",
        body: loginData,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
