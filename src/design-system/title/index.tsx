import React from "react";
import { TitleProps } from "../interfaceProps";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Title: React.FC<TitleProps> = ({
  title,
  placeholder,
  btn,
  isLink,
  onOpen,
  linkTo,
}) => {
  return (
    <div className="flex flex-col gap-4 justify-between lg:items-center lg:flex-row md:flex-row">
      <p className="text-font-primary font-bold text-sm capitalize md:text-sm">
        {title}:
      </p>
      <div className="flex items-center gap-5">
        <div className="flex items-center h-10 gap-2 w-241 px-2 py-3 bg-input-primary rounded border-1 border-input-secondary ">
          <div>
            <BsSearch className="text-font-primary" size={20} />
          </div>
          <input
            type="text"
            placeholder={placeholder}
            style={{ background: "none" }}
            className="w-full h-10 text-base focus:outline-none  text-font-primary placeholder:text-input-secondary placeholder:text-sm placeholder:font-normal"
          />
        </div>

        {isLink ? (
          <Link to={`${linkTo}`}>
            <button className="text-sm font-bold text-font-primary capitalize py-2.5 px-3.5  bg-primary rounded">
              <p className="whitespace-nowrap">{btn}</p>
            </button>
          </Link>
        ) : (
          <button
            className="text-sm font-bold text-font-primary capitalize py-2.5 px-3.5  bg-primary rounded"
            onClick={onOpen}
          >
            <p className="whitespace-nowrap">{btn}</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default Title;
