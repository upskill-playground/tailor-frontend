import React from "react";
import { LayoutProps } from "../design-system/interfaceProps";
import Navbar from "../design-system/navbar";
import chart from "~/assets/chart.png";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <img src={chart} alt="chart" className="absolute right-0 top-0 -z-10" />
      <img
        src={chart}
        alt="chart"
        className="absolute bottom-0 -left-10 -z-10"
      />
      <Navbar />
      <div className="px-4 py-4  lg:px-32 lg:py-14">{children}</div>
    </div>
  );
};

export default Layout;
