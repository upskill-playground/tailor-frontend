import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "~/Layout";
import { get_user } from "~/pages/settings/redux/reducer";
import { getUser } from "~/pages/settings/redux/selector";
import Profile from "./components/profile/profile";
import Team from "./components/team";

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);
  return (
    <Layout>
      <div className="lg:px-56 lg:-mx-3.5">
        <p className="mb-0 lg:mb-10 text-xl text-gray-200 font-bold">
          Settings
        </p>
        <div className="flex flex-col gap-8 lg:gap-24">
          <div>
            <Profile user={user} />
          </div>
          <Team />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
