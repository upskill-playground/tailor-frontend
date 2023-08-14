import React from "react";
import { TitleProps } from "../interfaceProps";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Title: React.FC<TitleProps> = ({
  title,
  placeholder,
  btn,
  isLink,
  onOpen,
  linkTo,
}) => {
  console.log(linkTo);
  return (
    <div className="flex flex-col gap-4 justify-between lg:items-center lg:flex-row md:flex-row">
      <p className="text-gray-100 font-semibold text-lg capitalize lg:text-2xl">
        {title}
      </p>
      <div className="flex items-center gap-5">
        <input
          type="text"
          placeholder={placeholder}
          className="py-2.5 px-3.5 w-full lg:w-80 bg-gray-50 text-base rounded-lg border border-gray-300 text-gray-800 placeholder:text-gray-500"
        />
        {isLink ? (
          <Link to={`${linkTo}`}>
            <button className="text-base font-medium text-gray-25 capitalize py-2.5 px-3.5 flex gap-2 items-center bg-orange-400 rounded-lg">
              <AiOutlinePlusCircle className="text-gray-50 text-lg lg:text-lg md:text-lg" />
              <p className="whitespace-nowrap lg:block hidden">{btn}</p>
            </button>
          </Link>
        ) : (
          <button
            className="text-base font-medium text-gray-25 capitalize py-2.5 px-3.5 flex gap-2 items-center bg-orange-400 rounded-lg"
            onClick={onOpen}
          >
            <AiOutlinePlusCircle className="text-gray-50 text-lg lg:text-lg md:text-lg" />
            <p className="whitespace-nowrap lg:block hidden">{btn}</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Title;
