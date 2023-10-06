import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { navLinks, otherLinks } from "../../utils/enums";
import { NavLink } from "react-router-dom";
import Mobile from "./mobile";
import { BsClipboard2Check } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="block lg:hidden">
        <Mobile show={show} handleClose={onClose} />
      </div>
      <div className="bg-background-secondary py-1.5 px-4 md:py-8 lg:px-16">
        <div className="flex justify-between items-center">
          <div>
            <div
              className="block text-gray-25  lg:hidden"
              onClick={() => setShow(!show)}
            >
              <IoMenuOutline size={30} />
            </div>
          </div>

          <div className="hidden md:flex flex-row items-center gap-10">
            {navLinks.map((route, idx) => (
              <NavLink
                key={idx + 1}
                to={route.to}
                className={({ isActive }) =>
                  isActive
                    ? "capitalize text-primary font-bold underline text-sm"
                    : "capitalize text-font-primary font-bold text-sm"
                }
              >
                {route.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex flex-row items-center gap-4">
            {otherLinks.map((route, idx) => (
              <NavLink
                key={`${route.name}+${idx}`}
                to={route.to}
                className={({ isActive }) =>
                  isActive
                    ? "capitalize bg-primary relative text-font-primary rounded py-3.5 px-4 items-center gap-1 flex text-sm font-bold"
                    : "capitalize relative border-1 border-primary text-font-primary rounded py-3.5 px-4 items-center gap-1 flex text-sm font-bold"
                }
              >
                {route.name === "tasks" && (
                  <div className="absolute -top-2 -right-2 bg-notification-primary text-font-primary rounded-full flex justify-center w-4 h-4 font-normal text-xs">
                    2
                  </div>
                )}
                {route.name === "tasks" ? (
                  <BsClipboard2Check size={16} />
                ) : (
                  <RxDashboard size={16} />
                )}
                {route.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
