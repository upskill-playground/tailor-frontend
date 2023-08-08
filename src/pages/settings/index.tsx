import React from "react";
import Layout from "../../Layout";
import Profile from "./components/profile/profile";
import Team from "./components/team";

const Settings: React.FC = () => {
  return (
    <Layout>
      <div className="xl:px-64 xl:mx-1">
        <p className="mb-0 xl:mb-10 text-xl text-gray-200 font-bold">
          Settings
        </p>
        <div className="flex flex-col gap-8 xl:gap-24">
          <div>
            <Profile />
          </div>
          <Team />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
