import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import InviteForm from "./inviteForm";
import { BsViewStacked } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Team: React.FC = () => {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const head = ["name", "date added", "last active", "role", "actions"];
  return (
    <div className="flex flex-col gap-10  xl:gap-10">
      <InviteForm show={show} onClose={() => setShow(!show)} isEdit={false} />
      <InviteForm show={open} onClose={() => setOpen(!open)} isEdit={true} />
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-300 text-lg font-semibold mb-1">My Team</p>
          <p className="text-gray-400 font-normal text-sm xl:text-base">
            Invite your team members to work faster and collaborate easily
            together...
          </p>
        </div>
        <button
          className="bg-orange-500 text-gray-50 py-2.5 px-3.5 rounded-md flex flex-row gap-2 items-center"
          onClick={() => setShow(!show)}
        >
          <AiOutlineUserAdd />
          <p className="hidden whitespace-nowrap lg:block md:block">
            Invite a Member
          </p>
        </button>
      </div>

      <div className="border border-gray-700 bg-gray-800 rounded-lg py-3 px-2 overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              {head.map((data, idx) => (
                <th
                  key={`${data}-${idx}`}
                  className={`text-gray-400 font-semibold whitespace-nowrap capitalize py-2 lg:py-3 text-left ${
                    (data === "date added" || data === "role") &&
                    "lg:px-0 px-16"
                  } ${data === "actions" && "md:text-left pl-8 pr-0 w-fit"}`}
                >
                  {data}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[...new Array(5)].map((_, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-800 last:border-b-0"
              >
                <td>
                  <div className="py-2 lg:py-3 flex items-center space-x-2 border-b border-gray-800">
                    <img
                      src={`https://robohash.org/stylescribe${idx}`}
                      alt="avatar"
                      className="w-10 h-10 bg-gray-500 rounded-full"
                    />
                    <div>
                      <p className="text-gray-200 capitalize text-base font-medium whitespace-nowrap">
                        sansa stark
                      </p>
                      <p className="text-gray-400 text-sm md:text-md font-normal whitespace-nowrap">
                        sansa@mail.com
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-16 lg:px-0 md:px-16 lg:py-0 text-sm md:text-base text-gray-300 whitespace-nowrap">
                  Aug 17, 2023
                </td>
                <td className="py-2 lg:py-3 text-sm md:text-base text-gray-300 whitespace-nowrap">
                  Aug 17, 2023
                </td>
                <td className="px-16 lg:px-0  text-sm md:text-base capitalize text-gray-300 md:px-16">
                  admin
                </td>
                <td className="py-2 lg:py-3  text-sm md:text-base text-gray-300 px-8 flex items-center">
                  <BsViewStacked
                    className="text-lg cursor-pointer"
                    onClick={() => setOpen(!open)}
                  />
                  <AiOutlineDelete className="text-error-600 text-xl cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Team;
