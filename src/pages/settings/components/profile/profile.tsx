import React, { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import ProfileForm from "./form";

const Profile: React.FC = () => {
  const [show, setShow] = useState(false);
  const user = {
    name: "john doe",
    email: "johndoe@mail.com",
    current_role: "admin",
  };
  return (
    <div className="flex flex-col gap-10  lg:gap-10">
      <ProfileForm show={show} onClose={() => setShow(!show)} content={user} />
      <div>
        <p className="text-gray-300 text-lg font-semibold mb-1">My Profile</p>
        <p className="text-gray-400 font-normal text-base">
          Update your personal details
        </p>
      </div>

      <div className="border border-gray-700 bg-gray-800 rounded-lg py-3 px-5 flex flex-col lg:flex-row gap-3.5 items-center md:flex-row">
        <img
          src={"https://robohash.org/stylescribe"}
          alt="avatar"
          className="w-24 h-24  bg-gray-600 rounded-full"
        />
        <div className="flex justify-between items-center flex-col lg:flex-row w-full md:flex-row">
          <div>
            <p className="text-gray-200 capitalize text-lg font-medium text-center lg:text-left md:text-left">
              thor odinson
            </p>
            <p className="text-base font-normal text-gray-300 text-center lg:text-left md:text-left">
              pointbreak@mail.com
            </p>
            <p className="text-md capitalize font-normal mt-1 text-gray-300 text-center lg:text-left md:text-left">
              admin
            </p>
          </div>

          <button
            className="border border-gray-500 py-2 px-3 flex flex-row gap-2 items-center text-base font-medium rounded-lg text-gray-500 bg-gray-700 capitalize mt-3.5 lg:mt-0"
            onClick={() => setShow(!show)}
          >
            <p>edit</p>
            <AiOutlineEdit />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
