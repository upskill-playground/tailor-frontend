import React from "react";

interface TextProps {
  children: React.ReactNode;
  type: string;
  fontSize?: string;
  color?: string;
  mt?: string;
}

const Text: React.FC<TextProps> = ({ children, type, fontSize, color, mt }) => {
  return (
    <div>
      {type === "lg" ? (
        <h3
          className={`${fontSize || "text-3xl"} ${
            color || "text-gray-100"
          } font-semibold m-0 p-0`}
        >
          {children}
        </h3>
      ) : type === "md" ? (
        <h4
          className={`${fontSize || "text-base"} ${
            color || "text-gray-100"
          } font-normal  m-0 p-0`}
        >
          {children}
        </h4>
      ) : (
        <h5
          className={`${fontSize || "text-sm"} ${
            color || "text-gray-100"
          } font-normal  m-0 p-0 ${mt || "mt-0"}`}
        >
          {children}
        </h5>
      )}
    </div>
  );
};

export default Text;
