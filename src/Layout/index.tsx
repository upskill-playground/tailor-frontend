import React from "react";
import { LayoutProps } from "../design-system/interfaceProps";
import Navbar from "../design-system/navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="px-4 py-4  lg:px-32 lg:py-14">{children}</div>
    </div>
  );
};

export default Layout;
