// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserBook: builder.query({
      query: (catId) => `/User/User_bookGetBook?catId=${catId}`,
      providesTags: ["User"],
    }),
    getSearch: builder.query({
        query: (catTitle) => `/User/User_Search?categoryTitle=${catTitle}`,
        providesTags: ["User"],
      }),
    getUserCategory: builder.query({
      query: (uniId) => `/User/User_AllCategories?uniId=${uniId}`,
      providesTags: ["User"],
    }),
    getUserUniversities: builder.query({
      query: () => `/User/User_getAllUniversities`,
      providesTags: ["User"],
    }),
    getSingleBook: builder.query({
        query: (bid) => `/User/User_getSingleBook?bid=${bid}`,
        providesTags: ["User"],
      }),
    getRecommend: builder.query({
        query: () => `/recommendation/bookRec`,
        providesTags: ["User"],
      }),
    
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetUserBookQuery,
    useGetRecommendQuery,
    useGetUserCategoryQuery, 
    useGetSingleBookQuery,
    useGetSearchQuery,
    useGetUserUniversitiesQuery,
} = userApi;
