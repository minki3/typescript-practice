import React from "react";
import { useGetPostQuery } from "../../store/api";

type data = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const RtkQuery = () => {
  const { data, isLoading, isError } = useGetPostQuery("posts");
  console.log(data);
  return (
    <div className="App">
      {isError ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>hi</h3>
        </>
      ) : null}
    </div>
  );
};

export default RtkQuery;
