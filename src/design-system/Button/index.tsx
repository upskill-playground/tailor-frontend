import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: string;
  width?: string;
  mt?: string;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  width,
  mt,
  isDisabled,
}) => {
  return (
    <div>
      {variant === "solid" ? (
        <button
          className={`bg-orange-400 text-gray-25 text-base font-semibold rounded-md p-2 ${
            width || "w-auto"
          } ${mt || "mt-0"} cursor-pointer  disabled:opacity-0.75`}
          disabled={isDisabled}
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
