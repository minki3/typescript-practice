import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TestPage() {
  const [file, setFile] = useState<any>([]);

  const axiosdd = () => {
    axios
      .put("http://172.30.1.59:3000/presignedUrl")
      .then((res) => res)
      .then(
        (res) =>
          axios.put(`${res.data.presignedUrl}`, {
            headers: {
              // "Content-Type": `image/jpeg`,
              // "Access-Control-Allow-Origin": `http://localhost:3000`,
              // "Access-Control-Allow-Credentials": "true",
            },
            body: file,
          })
        // .then((res) => console.log(res))
      );
  };

  useEffect(() => {
    setFile(file);
  }, [file]);

  const pickedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let pickedFile = [];

    if (e.target.files) {
      for (let i = 0; i < e.target.files.length; i++) {
        pickedFile.push(e.target.files[i]);
      }
      setFile([...file, ...pickedFile]);
    }
  };

  const onDelete = (clickedIndex: number) => {
    const deletedFile = file.filter(
      (_: any, index: number) => index !== clickedIndex
    );

    setFile(deletedFile);
  };

  return (
    <div>
      <div className="p-2 border"></div>
      <label htmlFor="id" className=" rounded-sm border">
        추가하기
      </label>
      <input
        id="id"
        className=" hidden"
        type="file"
        multiple
        accept=".jpg, .png, .jpeg, .pdf, .word"
        onChange={pickedHandler}
        aria-label="append"
        onClick={axiosdd}
      />
      {file &&
        file.map((item: any, index: number) => (
          <div key={index}>
            <div>{item.name}</div>
            <button
              onClick={() => {
                onDelete(index);
              }}
            >
              delete
            </button>
          </div>
        ))}
    </div>
  );
}
