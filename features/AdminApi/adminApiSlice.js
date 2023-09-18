// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/Admin" }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    getUniversity: builder.query({
      query: () => `/Admin_reportUniversity`,
      providesTags: ["Admin"],
    }),
    addUniversity: builder.mutation({
      query: (body) => ({
        url: "/Admin_createUniversity",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
    updateUniversity: builder.mutation({
      query: (body) => ({
        url: "/Admin_updateUniversity",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
    deleteUniversity: builder.mutation({
      query: (body) => ({
        url: "/Admin_deleteUniversity",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
    getAdmins: builder.query({
      query: () => `/Admin_reportAdmins`,
      providesTags: ["Admin"],
    }),
    deleteAdmin: builder.mutation({
      query: (body) => ({
        url: "/Admin_deleteAdmin",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Admin"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAdminsQuery,
  useDeleteAdminMutation,
  useGetUniversityQuery,
  useAddUniversityMutation,
  useUpdateUniversityMutation,
  useDeleteUniversityMutation,
} = adminApi;
