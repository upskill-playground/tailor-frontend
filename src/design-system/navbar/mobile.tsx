import React from "react";
import { navLinks } from "../../utils/enums";
import { MobileProps } from "../interfaceProps";
import SideModal from "../sideModal";
import { Link } from "react-router-dom";

const Mobile: React.FC<MobileProps> = ({ show, handleClose }) => {
  return (
    <SideModal
      handleClose={handleClose}
      position={show ? "left-0" : "-left-full"}
      opacity={show ? "opacity-1" : "opacity-0"}
    >
      <div className="p-10 grid place-items-center">
        <div className="flex flex-col gap-20">
          {navLinks.map((route, idx) => (
            <Link
              to={route.to}
              key={idx}
              onClick={handleClose}
              className="capitalize text-xl font-medium"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </SideModal>
  );
};

export default Mobile;
