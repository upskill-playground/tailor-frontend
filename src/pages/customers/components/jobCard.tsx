import React from "react";
import { JobCardProps } from "../../../design-system/interfaceProps";
import {
  FcHighPriority,
  FcMediumPriority,
  FcLowPriority,
} from "react-icons/fc";

const JobCard: React.FC<JobCardProps> = ({ content }) => {
  return (
    <div className="p-4 rounded-lg border border-gray-600">
      <div className="flex justify-between items-center">
        <p className="text-gray-50 text-base font-semibold">{content.title}</p>
        <div className="capitalize text-md text-orange-400">view</div>
      </div>
      <p className="text-gray-300 text-base font-light mt-1 mb-2.5">
        {content.description}
      </p>
      <div className="grid grid-cols-3">
        <div>
          <p className="text-gray-300 font-light text-base">Due Date</p>
          <p className="text-gray-100 text-md whitespace-nowrap xl:text-base">
            {content.due_date}
          </p>
        </div>
        <div>
          <p className="text-gray-300 font-light text-base">Priority</p>
          <div className="flex gap-1 items-center">
            {content.priority === "high" ? (
              <FcHighPriority />
            ) : content.priority === "medium" ? (
              <FcMediumPriority />
            ) : (
              <FcLowPriority />
            )}

            <p className="text-gray-100 text-md whitespace-nowrap xl:text-base capitalize">
              {content.priority}
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-300 font-light text-base">Assigned to</p>
          <p className="text-gray-100 text-md whitespace-nowrap xl:text-base capitalize">
            {content.assigned_to}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
