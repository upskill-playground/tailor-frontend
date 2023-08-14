import React from "react";
import Title from "../../design-system/title";
import Layout from "../../Layout";

const Tasks: React.FC = () => {
  return (
    <Layout>
      <Title
        title={"tasks"}
        btn="add task"
        placeholder="Search by task no, assign to..."
        linkTo="/tasks/create"
        isLink={true}
      />
    </Layout>
  );
};

export default Tasks;
