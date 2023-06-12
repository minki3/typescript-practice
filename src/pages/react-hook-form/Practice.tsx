import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import Form from "./Form";
import View from "./View";

export default function Practice() {
  const { control, register } = useForm();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "test", // unique name for your Field Array
    }
  );

  return (
    <div className="flex">
      <input />
    </div>
  );
}
