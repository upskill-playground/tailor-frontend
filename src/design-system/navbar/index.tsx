import React, { useState, useEffect } from "react";
import { IoSettingsOutline, IoMenuOutline } from "react-icons/io5";
import { navLinks } from "../../utils/enums";
import { NavLink, Link } from "react-router-dom";
import Mobile from "./mobile";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "~/pages/settings/redux/selector";
import { get_user } from "~/pages/settings/redux/reducer";

const Navbar: React.FC = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const onClose = () => {
    setShow(!show);
  };

  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);

  return (
    <>
      <div className="block lg:hidden">
        <Mobile show={show} handleClose={onClose} />
      </div>
      <div className="border border-b-gray-800 border-gray-900 py-1.5 px-4 md:py-5 lg:px-32">
        <div className="flex justify-between items-center">
          <div className="flex flex-row items-center gap-2.5 lg:gap-24">
            <div
              className="block text-gray-25  lg:hidden"
              onClick={() => setShow(!show)}
            >
              <IoMenuOutline size={30} />
            </div>
            <p className="m-0 p-0 text-gray-100 text-3xl font-bold">LOGO</p>

            <div className="hidden  lg:flex flex-row gap-8 items-center">
              {navLinks.map((route, idx) => (
                <NavLink
                  key={`${route.name}+${idx}`}
                  to={route.to}
                  className={({ isActive }) =>
                    isActive
                      ? "capitalize bg-gray-800 rounded-md text-base text-gray-50 py-2 px-3"
                      : "capitalize text-base text-gray-50 font-medium py-2 px-3"
                  }
                >
                  {route.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="flex gap-4 lg:gap-8 flex-row items-center">
            <Link to="/settings">
              <IoSettingsOutline
                className="text-gray-200 cursor-pointer"
                size={20}
              />
            </Link>
            <img
              src={`https://robohash.org/${user.name}`}
              alt="avatar"
              className="w-10 h-10 bg-gray-800 rounded-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
