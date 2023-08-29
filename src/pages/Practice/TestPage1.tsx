import React, { useState, useEffect } from "react";

export default function TestPage() {
  const [file, setFile] = useState<any>([]);

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
  console.log(file);
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
