import React from "react";
import Badge from "~/design-system/badge";
import { tasks } from "~/utils/enums";

const Table: React.FC = () => {
  const head = [
    "task no",
    "task name",
    "assigned to",
    "start date",
    "due date",
    "status",
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
          {tasks.map((data, idx) => (
            <tr key={idx}>
              <td>{data.task_no}</td>
              <td>{data.task_name}</td>
              <td>{data.assigned_to}</td>
              <td>{data.start_date}</td>
              <td>{data.due_date}</td>
              <td>
                <div className="inline-block">
                  <Badge type={data.status} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
