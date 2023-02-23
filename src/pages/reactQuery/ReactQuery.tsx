import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
type data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
// type isLoading = {
//   isLoading: boolean;
// };
// type isError = {
//   isError: boolean;
// };
// interface Query {
//   data?: data;
//   isLoading?: isLoading;
//   isError?: isError;
// }
const ReactQuery = () => {
  const { data, isLoading, isError } = useQuery("posts", async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return result.data;
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      {data.map((post: data) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ReactQuery;
