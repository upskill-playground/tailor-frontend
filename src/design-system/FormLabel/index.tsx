import React from "react";
import { FormLabelProps } from "../interfaceProps";

const FormLabel: React.FC<FormLabelProps> = ({ children }) => {
  return (
    <p className="text-gray-100 capitalize text-base m-0 p-0 mb-1.5">
      {children}
    </p>
  );
};

export default FormLabel;
