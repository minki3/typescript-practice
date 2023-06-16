import React from "react";
import { PdfExport } from "./Make_Pdf";

export default function PdfPage() {
  const handlePdf = () => {
    PdfExport("capture");
  };
  return (
    <div>
      <div id="capture" className=" text-2xl bg-yellow-300">
        abcdefg
      </div>
      {/* <button onClick={handlePdf}>클릭</button> */}
    </div>
  );
}
