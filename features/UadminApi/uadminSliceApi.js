// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const uAdminApi = createApi({
  reducerPath: "uAdminApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/Uadmin" }),
  tagTypes: ["Uadmin"],
  endpoints: (builder) => ({
    getBook: builder.query({
      query: (uniId) => `/Uadmin_bookGetBook?uniId=${uniId}`,
      providesTags: ["Uadmin"],
    }),
    getCategory: builder.query({
      query: (uniId) => `/Uadmin_bookGetCategory?uniId=${uniId}`,
      providesTags: ["Uadmin"],
    }),
    addBook: builder.mutation({
      query: (body) => ({
        url: "/Uadmin_bookCreateBook",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Uadmin"],
    }),
    addCategory: builder.mutation({
      query: (body) => ({
        url: "/Uadmin_bookCreateCategory",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Uadmin"],
    }),
    deleteCategory: builder.mutation({
      query: (body) => ({
        url: "/Uadmin_bookDeleteCategory",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Uadmin"],
    }),
    deleteBook: builder.mutation({
      query: (body) => ({
        url: "/Uadmin_bookDeleteBook",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Uadmin"],
    }),
    updateBook: builder.mutation({
      query: (body) => ({
        url: "/Uadmin_bookUpdateBook",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Uadmin"],
    }),
    updateCategory: builder.mutation({
      query: (body) => ({
        url: "/Uadmin_bookUpdateCategory",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Uadmin"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetBookQuery,
  useGetCategoryQuery,
  useAddBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation
} = uAdminApi;
