import React from "react";
import { SideModalProps } from "../interfaceProps";
import { AiOutlineClose } from "react-icons/ai";

const SideModal: React.FC<SideModalProps> = ({
  children,
  position,
  opacity,
  handleClose,
  title,
}) => {
  return (
    <div>
      <div
        className={`fixed h-screen top-0 ${position} ${opacity} w-full transition-all delay-300 duration-300 ease-in-out xl:w-1/3 md:w-2/4 `}
      >
        <div className="h-screen overflow-y-auto border xl:border-l-gray-600 md:border-l-gray-600 border-blur backdrop-blur-sm bg-blur text-gray-25 ">
          <div className="flex justify-between p-5 xl:p-10 items-center">
            <p className="capitalize font-medium text-lg">{title}</p>
            <div className="cursor-pointer" onClick={handleClose}>
              <AiOutlineClose size={20} />
            </div>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SideModal;
