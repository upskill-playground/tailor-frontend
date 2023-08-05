import React from "react";
import { TextProps } from "../interfaceProps";

const Text: React.FC<TextProps> = ({
  children,
  type,
  fontSize,
  color,
  mt,
  align,
}) => {
  return (
    <div>
      {type === "lg" ? (
        <h3
          className={`${fontSize || "text-xl xl:text-3xl"} ${
            color || "text-gray-100"
          } ${align || "text-left"} font-semibold m-0 p-0`}
        >
          {children}
        </h3>
      ) : type === "md" ? (
        <h4
          className={`${fontSize || "text-sm xl:text-base"} ${
            color || "text-gray-100"
          } ${align || "text-left"} font-normal  m-0 p-0`}
        >
          {children}
        </h4>
      ) : (
        <h5
          className={`${fontSize || "text-sm"} ${color || "text-gray-100"} ${
            align || "text-left"
          } font-normal  m-0 p-0 ${mt || "mt-0"}`}
        >
          {children}
        </h5>
      )}
    </div>
  );
};

export default Text;
