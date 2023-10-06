import React, { useState } from "react";
import Title from "../../design-system/title";
import Layout from "../../Layout";
import Table from "./components/table";
import ViewCustomer from "./components/viewCustomer";

const Customers: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <ViewCustomer isOpen={open} onClose={() => setOpen(!open)} />
      <Title
        title={"customers"}
        placeholder={"Search by customer name"}
        btn={"add customer"}
        isLink={false}
      />

      <Table onOpen={() => setOpen(!open)} />
    </Layout>
  );
};

export default Customers;
