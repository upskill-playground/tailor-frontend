import React from "react";
import { BadgeProps } from "~/design-system/interfaceProps";

const Badge: React.FC<BadgeProps> = ({ type }) => {
  return (
    <div>
      {type === "in progress" ? (
        <div className="bg-background-blue  text-sm whitespace-nowrap grid place-items-center text-badge-progress capitalize px-6 py-1.5 rounded-lg">
          {type}{" "}
        </div>
      ) : type === "completed" ? (
        <div className="bg-background-blue  text-sm whitespace-nowrap grid place-items-center text-badge-completed capitalize px-6 py-1.5 rounded-lg">
          {type}
        </div>
      ) : type === "pending" ? (
        <div className="bg-background-blue  text-sm whitespace-nowrap grid place-items-center text-badge-pending capitalize px-6 py-1.5 rounded-lg">
          {type}{" "}
        </div>
      ) : (
        <div className="bg-background-blue  text-sm whitespace-nowrap grid place-items-center text-badge-cancelled capitalize px-6 py-1.5 rounded-lg">
          {type}
        </div>
      )}
    </div>
  );
};

export default Badge;
