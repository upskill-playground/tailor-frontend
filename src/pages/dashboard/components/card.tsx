import React from "react";
import { MetricsCardProps } from "../../../design-system/interfaceProps";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

export const MetricCard: React.FC<MetricsCardProps> = ({ content }) => {
  return (
    <div className="rounded-md p-6 bg-gray-800 border border-gray-600">
      <p className="m-0 capitalize text-gray-400 text-base font-medium mb-6">
        {content.title}
      </p>

      <p className="text-gray-100 font-semibold mb-4 text-xl xl:text-2xl">
        {content.amount.toLocaleString()}
      </p>

      {content.metric && (
        <div className="flex gap-2 items-center">
          {content.metric === "increase" ? (
            <BiUpArrowAlt className="text-success-500" />
          ) : (
            <BiDownArrowAlt className="text-error-500" />
          )}
          <span
            className={`${
              content.metric === "increase"
                ? "text-success-700"
                : "text-error-700"
            } text-md  font-medium`}
          >{`${content.percentage}%`}</span>
          <span className="text-gray-500 text-md font-medium">
            {" "}
            vs last month
          </span>
        </div>
      )}
    </div>
  );
};

export const MembersCard: React.FC = () => {
  return (
    <div className="rounded-md p-6 bg-gray-800 w-full border border-gray-600 xl:w-1/4">
      <div className="flex items-center justify-between">
        <p className="text-base xl:text-xl font-medium text-gray-300">
          Members
        </p>

        <Link to="/settings/members" className="text-orange-400">
          <p>Show more</p>
        </Link>
      </div>

      <div className="mt-5 flex flex-col gap-5">
        {[...new Array(5)].map((_, idx) => (
          <div key={idx} className="flex gap-3.5">
            <img
              src={`https://robohash.org/stylescribe${idx}`}
              alt="avatar"
              className="w-10 h-10 bg-gray-500 rounded-full"
            />
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-base font-semibold text-gray-200">
                  Jon Snow
                </p>
                <p className="text-sm text-gray-400">jon@mail.com</p>
              </div>

              <button className="text-orange-400 font-semibold text-md border border-orange-400 p-2 rounded-xl">
                Assign
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const TasksCard: React.FC = () => {
  return (
    <div className="rounded-md p-6 bg-gray-800 w-full border border-gray-600 xl:w-3/4">
      <div className="flex items-center justify-between">
        <p className="text-base xl:text-xl font-medium text-gray-300">
          Recent Tasks
        </p>
      </div>
    </div>
  );
};
