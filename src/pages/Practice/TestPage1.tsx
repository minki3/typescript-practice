import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TestPage() {
  const [file, setFile] = useState<any>([]);
  const [img, setImg] = useState<any>();

  const axiosdd = async () => {
    file.forEach(async (f: any) => {
      console.log(f);
      const res = await axios.put("http://54.180.86.175:3000/presignedUrl", {
        name: f.name.split(".png")[0],
      });
      if (res.data.presignedUrl) {
        await axios.put(`${res.data.presignedUrl}`, f);
      }
    });
  };

  const getImage = async () => {
    await axios(`http://54.180.86.175:3000/presignedUrl?name=edu`).then(
      (res) => {
        setImg(res.data.presignedUrl);
        console.log(res.data.presignedUrl);
      }
    );
  };

  useEffect(() => {
    getImage();
  }, []);

  const pickedHandler = (e: any) => {
    if (e.target.files) {
      const pickedFiles = Array.from(e.target.files);
      setFile([...file, ...pickedFiles]);
    }
  };

  return (
    <div>
      <img src={img} alt="dfdf"></img>
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
        onChange={(e) => {
          pickedHandler(e);
        }}
        aria-label="append"
      />
      <button onClick={axiosdd}>보내기</button>
    </div>
  );
}
