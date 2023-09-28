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
          className={`disabled:opacity-50 bg-btn-primary text-gray-25 text-base font-semibold rounded py-2.5 px-3.5 capitalize ${
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
