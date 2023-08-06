import React from "react";
import { MobileProps } from "../interfaceProps";
import SideModal from "../sideModal";

const Mobile: React.FC<MobileProps> = ({ show, handleClose }) => {
  return (
    <SideModal
      handleClose={handleClose}
      position={show ? "left-0" : "-left-full"}
      opacity={show ? "opacity-1" : "opacity-0"}
    >
      <div>hello</div>
    </SideModal>
  );
};

export default Mobile;
