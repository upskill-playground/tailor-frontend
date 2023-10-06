import React from "react";
import Title from "../../design-system/title";
import Layout from "../../Layout";
import Table from "~/pages/tasks/components/table";

const Tasks: React.FC = () => {
  return (
    <Layout>
      <Title
        title={"tasks"}
        btn="add more tasks"
        placeholder="Search by task name or number"
        linkTo="/tasks/create"
        isLink={true}
      />
      <Table />
    </Layout>
  );
};

export default Tasks;
