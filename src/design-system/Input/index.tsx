import React from "react";
import { InputProps, SelectProps } from "../interfaceProps";

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
  classText = "",
  isDisabled,
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
      disabled={isDisabled}
      className={`bg-input-primary p-3.5 text-font-primary ${classText} font-medium placeholder:text-black-200   ${
        width || "w-auto"
      } focus:outline-none focus:border-primary border-2 border-input-secondary disabled:bg-gray-300`}
      style={{ borderRadius: "5px" }}
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
  classText = "",
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
      } focus:outline-none focus:border-orange-500 border border-gray-600`}
      placeholder={placeholder}
    />
  );
};

export const Select: React.FC<SelectProps> = ({
  width,
  options,
  handleChange,
  placeholder,
  name,
}) => {
  return (
    <select
      name={name}
      onChange={handleChange}
      className={`bg-gray-50 p-3.5 text-gray-900 rounded font-medium placeholder:text-black-200   ${
        width || "w-auto"
      } focus:outline-none border border-gray-700 disabled:bg-gray-300`}
    >
      <option className="capitalize text-gray-500" selected disabled>
        --{placeholder}--
      </option>
      {options?.map((data, idx) => (
        <option key={`${idx + 1}`}>{data.name}</option>
      ))}
    </select>
  );
};
