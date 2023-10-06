import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { ProfileProps } from "~/design-system/interfaceProps";
import ProfileForm from "./form";

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-4 md:gap-4">
      <ProfileForm show={show} onClose={() => setShow(!show)} content={user} />
      <div>
        <p className="text-font-primary text-sm font-semibold">
          Profile Information
        </p>
      </div>

      <div className="bg-background-bgSettings py-4 px-4 border-2 border-background-borderColor">
        <div className="flex gap-1 mb-6">
          <p className="text-font-mild text-sm">Business Owner:</p>
          <p className="text-font-primary text-sm font-bold">{user.name}</p>
        </div>

        <div className="flex gap-1">
          <p className="text-font-mild text-sm">Email Address:</p>
          <p className="text-font-primary text-sm font-bold">{user.email}</p>
        </div>
      </div>

      <div
        className="flex bg-background-blue w-73 text-primary font-bold text-sm cursor-pointer rounded-full px-4 py-2 gap-2 items-center"
        onClick={() => setShow(!show)}
      >
        <AiOutlineEdit />
        Edit
      </div>
    </div>
  );
};

export default Profile;
