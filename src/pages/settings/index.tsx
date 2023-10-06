import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "~/Layout";
import { get_user } from "~/pages/settings/redux/reducer";
import { getUser } from "~/pages/settings/redux/selector";
import Profile from "./components/profile/profile";
import Team from "./components/team";
import Button from "~/design-system/Button";
import InviteForm from "~/pages/settings/components/team/inviteForm";

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(get_user());
  }, [dispatch]);
  return (
    <Layout>
      <InviteForm show={open} onClose={() => setOpen(!open)} isEdit={true} />
      <div className="lg:px-16">
        <div className="flex flex-row md:flex-row justify-between mb-14 md:items-center">
          <div className="flex gap-1 items-center">
            <p className="text-font-mild text-base font-bold m-0">Settings</p>
            <div className="text-font-primary bg-background-blue rounded-full text-xs font-bold px-2.5 py-2">
              {user.role}
            </div>
          </div>
          <div>
            <Button variant="solid" handleClick={() => setOpen(!open)}>
              {" "}
              Add Team Members{" "}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
          <Profile user={user} />
          <Team />
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
