import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Form from "./Form";
import View from "./View";
import { PDFViewer } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import jsPDF from "jspdf";

interface InitalType {
  name: string[];
}

const initalValue: InitalType = {
  name: [],
};
export default function Practice() {
  const { control, handleSubmit } = useForm({
    mode: "onBlur",
    // defaultValues: initalValue,
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "name", // unique name for your Field Array
    }
  );

  const submit = (data: any) => {
    console.log(data);
  };
  const handlePrintToPDF = () => {
    window.print();
  };
  // const handlePrintToPDF = () => {
  //   const doc = new jsPDF();
  //   const element = document.getElementById("pdf-content");

  //   doc.html(element, {
  //     callback: function (pdf) {
  //       pdf.save("document.pdf");
  //     },
  //     x: 10,
  //     y: 10,
  //   });
  // };

  return (
    <div id="pdf-content" className="flex">
      <form onSubmit={handleSubmit(submit)}>
        {fields.map((item, idx) => {
          return (
            <div key={idx}>
              <input />
              <p>sdafsf</p>
            </div>
          );
        })}
      </form>
      <p>sdaffas</p>
      <PDFViewer>
        <Form />
      </PDFViewer>
      <button onClick={handlePrintToPDF}>Save as PDF</button>
    </div>
  );
}
// ReactPDF.render(<Form />, `${__dirname}/example.pdf`);
// ReactDOM.render(<App />, document.getElementById("root"));
