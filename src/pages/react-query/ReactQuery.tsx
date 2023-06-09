import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
const ReactQuery = () => {
  //https://jsonplaceholder.typicode.com/posts
  const { isLoading, error, data, isFetching } = useQuery("data", () =>
    axios("https://jsonplaceholder.typicode.com/posts").then((res) => res.data)
  );
  console.log(data);
  return <div></div>;
};

export default ReactQuery;
