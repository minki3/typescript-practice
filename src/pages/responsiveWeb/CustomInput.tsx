import React from "react";

interface Props {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: any) => void;
  name: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { type, placeholder, value, onChange, name } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
});

export default CustomInput;
