import React from "react";
import { FormLabelProps } from "../interfaceProps";

const FormLabel: React.FC<FormLabelProps> = ({ children, color }) => {
  return (
    <p className={`${color || "text-gray-100"}  text-sm m-0 p-0 pl-1 mb-1.5`}>
      {children}
    </p>
  );
};

export default FormLabel;
