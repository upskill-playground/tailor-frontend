import React from "react";
import { InputProps } from "../interfaceProps";

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

export const OtpInput: React.FC<InputProps> = ({
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
      className={`bg-gray-700 p-2.5 text-gray-50 ${classText} font-medium rounded-lg placeholder:text-gray-500   ${
        width || "w-auto"
      } focus:outline-none border border-gray-600`}
      placeholder={placeholder}
    />
  );
};
