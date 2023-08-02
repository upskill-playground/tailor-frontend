import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  max?: number;
  minimum?: number;
  maximum?: number;
  classText?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
  width,
  minimum,
  max,
  maximum,
  classText,
}) => {
  return (
    <input
      value={value}
      type={type}
      min={minimum}
      max={maximum}
      maxLength={max}
      onChange={onChange}
      name={name}
      className={`bg-gray-50 p-2.5 text-gray-900 ${classText} font-medium rounded-lg placeholder:text-gray-500   ${
        width || "w-auto"
      } focus:outline-none border border-gray-700`}
      placeholder={placeholder}
    />
  );
};

export default Input;
