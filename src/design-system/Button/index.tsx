import React from "react";
import { ButtonProps } from "../interfaceProps";

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  width,
  mt,
  isDisabled,
  handleClick,
  type,
}) => {
  return (
    <div>
      {variant === "solid" ? (
        <button
          type={type}
          className={`disabled:bg-orange-300 bg-orange-400 text-gray-25 text-base font-semibold rounded-md py-2.5 px-3.5 capitalize ${
            width || "w-auto"
          } ${mt || "mt-0"} cursor-pointer `}
          disabled={isDisabled}
          onClick={handleClick}
        >
          {children}
        </button>
      ) : (
        <button>{children}</button>
      )}
    </div>
  );
};

export default Button;
