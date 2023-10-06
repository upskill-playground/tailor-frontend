import React from "react";
import { TableProps } from "~/design-system/interfaceProps";
import { customers } from "~/utils/enums";

const Table: React.FC<TableProps> = ({ onOpen }) => {
  const head = [
    "Full Name",
    "Email Address",
    "Phone Number",
    "Delivery Address",
    "Sex",
    "Recent Order",
  ];
  return (
    <div className="table_container">
      <table>
        <thead>
          <tr>
            {head.map((data, idx) => (
              <th key={idx}>{data}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {customers.map((data, idx) => (
            <tr key={idx} onClick={onOpen}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone_number}</td>
              <td>{data.delivery_address}</td>
              <td>{data.sex}</td>
              <td> {data.recent_order}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
