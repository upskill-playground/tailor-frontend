import React from "react";

interface FormLabelProps {
  children: React.ReactNode;
}

const FormLabel: React.FC<FormLabelProps> = ({ children }) => {
  return (
    <p className="text-gray-100 capitalize text-base m-0 p-0 mb-1.5">
      {children}
    </p>
  );
};

export default FormLabel;
