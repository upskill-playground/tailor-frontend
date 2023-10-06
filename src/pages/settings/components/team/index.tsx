import React, { useState } from "react";
import InviteForm from "./inviteForm";
import { AiOutlineEdit } from "react-icons/ai";

const Team: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <InviteForm show={open} onClose={() => setOpen(!open)} isEdit={true} />
      <div>
        <p className="text-font-primary text-sm font-semibold">Team Members</p>
      </div>
      <div className="bg-background-bgSettings py-4 px-4 border-2 border-background-borderColor">
        <div className="flex gap-1 mb-6">
          <p className="text-font-mild text-sm">Team Role:</p>
          <p className="text-font-primary text-sm font-bold">name</p>
        </div>

        <div className="flex gap-1">
          <p className="text-font-mild text-sm">Team Role:</p>
          <p className="text-font-primary text-sm font-bold">name</p>
        </div>
      </div>

      <div
        className="flex bg-background-blue w-73 text-primary font-bold text-sm cursor-pointer rounded-full px-4 py-2 gap-2 items-center"
        onClick={() => setOpen(!open)}
      >
        <AiOutlineEdit />
        Edit
      </div>
    </div>
  );
};

export default Team;
