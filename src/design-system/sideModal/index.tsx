import React from "react";
import { SideModalProps } from "../interfaceProps";
import { AiOutlineClose } from "react-icons/ai";

const SideModal: React.FC<SideModalProps> = ({
  children,
  position,
  handleClose,
  title,
}) => {
  return (
    <div>
      <div
        className={`fixed z-20 h-screen top-0 ${position} w-full transition-all delay-300 duration-300 ease-in-out lg:w-1/3 md:w-2/4 `}
      >
        <div className="h-screen overflow-y-auto border md:border-l-input-secondary border-background-primary  bg-background-primary text-gray-25 ">
          <div className="flex justify-between px-4 py-11 items-center">
            <p className="capitalize font-medium text-sm">{title}</p>
            <div
              className="cursor-pointer  grid place-items-center text-primary bg-background-blue rounded-full p-1"
              onClick={handleClose}
            >
              <AiOutlineClose size={16} />
            </div>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
