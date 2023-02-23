import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const api = createApi({
  reducerPath: "data",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (buider) => ({
    getPost: buider.query({
      query: (postId) => ({ url: `/posts/${postId}` }),
      // providesTags: (result, error, { postId }) => [
      //   { type: "post", id: postId },
      // ],
    }),
  }),
});

export const { useGetPostQuery }: any = api;
