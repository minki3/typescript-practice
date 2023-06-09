import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//https://jsonplaceholder.typicode.com/posts

type data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (buider) => ({
    getPost: buider.query<data, string>({
      query: (post) => `${post}`,
      // providesTags: (result, error, { postId }) => [
      //   { type: "post", id: postId },
      // ],
    }),
  }),
});

export const { useGetPostQuery } = api;
