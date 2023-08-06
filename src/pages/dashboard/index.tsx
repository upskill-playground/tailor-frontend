import React, { useState } from "react";
import SideModal from "../../design-system/sideModal";
import Layout from "../../Layout";

const Dashboard: React.FC = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(!show);
  };
  return (
    <Layout>
      <div className="text-gray-100">
        Dashboard
        <button onClick={() => setShow(!show)}>open</button>
        <SideModal
          handleClose={onClose}
          position={show ? "right-0" : "-right-full"}
          opacity={show ? "opacity-1" : "opacity-0"}
          title="dashboard"
        >
          {" "}
          hello
        </SideModal>
      </div>
    </Layout>
  );
};

export default Dashboard;
