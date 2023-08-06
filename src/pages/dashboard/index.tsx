import React from "react";
import Layout from "../../Layout";
import { metrics } from "../../utils/enums";
import { MembersCard, MetricCard, TasksCard } from "./components/card";

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div>
        <p className="text-lg xl:text-2xl font-bold m-0 text-gray-100">
          Hello, Stanis
        </p>
        <p className="text-base text-gray-400 font-normal">
          Track and manage your customers and tasks.
        </p>

        {/* metrics */}
        <div className="mt-8">
          <div className="grid grid-cols-1 gap-3.5 xl:gap-8 xl:grid-cols-3 md:grid-cols-2">
            {metrics.map((data, idx) => (
              <MetricCard key={idx} content={data} />
            ))}
          </div>
        </div>

        {/* recent tasks and team */}
        <div className="mt-3.5 flex flex-col gap-3.5 xl:flex-row xl:gap-8 xl:items-stretch xl:mt-8">
          <TasksCard />
          <MembersCard />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
