import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Form from "./Form";
import View from "./View";
import { PDFViewer } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import jsPDF from "jspdf";

interface InitalType {
  interface: {
    name: string;
    age: string;
    second: {
      first: string;
      second: string;
      third: { first: string; second: string }[];
    }[];
  }[];
}

const inital: InitalType = {
  interface: [
    {
      name: "",
      age: "",
      second: [{ first: "", second: "", third: [{ first: "", second: "" }] }],
    },
  ],
};
export default function Practice() {
  const { control, handleSubmit, register } = useForm<InitalType>({
    mode: "onBlur",
    defaultValues: inital,
  });
  const {
    fields: initalValuefield,
    append,
    prepend,
    remove,
    swap,
    move,
    insert,
  } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "interface", // unique name for your Field Array
  });

  const submit = (data: any) => {
    console.log(data);
  };
  console.log(inital.interface);
  return (
    <div className="flex">
      <form onSubmit={handleSubmit(submit)}>
        {initalValuefield.map((field, index) => {
          return (
            <div key={field.id}>
              <input
                placeholder="이름"
                {...register(`interface.${index}.name`)}
              />
              <input
                placeholder="나이"
                {...register(`interface.${index}.age`)}
              />
              <input
                placeholder="second.first"
                {...register(`interface.${index}.second.${index}.first`)}
              />
              <input
                placeholder="second.second"
                {...register(`interface.${index}.second.${index}.second`)}
              />
              <input
                placeholder="third.first"
                {...register(
                  `interface.${index}.second.${index}.third.${index}.first`
                )}
              />
              <input
                placeholder="third.second"
                {...register(
                  `interface.${index}.second.${index}.third.${index}.second`
                )}
              />

              <button
                onClick={() => {
                  append({
                    name: "",
                    age: "",
                    second: [
                      {
                        first: "",
                        second: "",
                        third: [{ first: "", second: "" }],
                      },
                    ],
                  });
                }}
              >
                추가
              </button>
              <button
                onClick={() => {
                  if (initalValuefield.length === 1) return alert("불가능");
                  remove(index);
                }}
              >
                삭제
              </button>
            </div>
          );
        })}

        <button type="submit">전송</button>
      </form>
    </div>
  );
}
