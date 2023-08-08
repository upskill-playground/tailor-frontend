import React from "react";
import { TableProps } from "../../../design-system/interfaceProps";

const Table: React.FC<TableProps> = ({ onOpen }) => {
  const head = [
    "full name",
    "email address",
    "phone number",
    "address",
    "sex",
    "",
  ];
  return (
    <div className="overflow-x-auto  mt-10 max-w-full">
      <table className="table-auto w-full">
        <thead className=" bg-gray-800 w-full">
          <tr>
            {head.map((data, idx) => (
              <th
                key={`${data}+${idx}`}
                className="xl:py-3.5 px-2 py-2 text-left whitespace-nowrap capitalize text-gray-500 text-md font-normal xl:px-6"
              >
                {data}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...new Array(5)].map((_, idx) => (
            <tr key={idx} className="even:bg-gray-800  w-full  text-gray-100 ">
              <td className="px-2 whitespace-nowrap py-2 xl:px-6 xl:py-6 capitalize text-md xl:text-base font-medium">
                stanis baratheon
              </td>
              <td className="px-2 whitespace-nowrap py-2 xl:px-6 xl:py-6 text-md xl:text-base font-medium">
                stanis@mail.com
              </td>
              <td className="px-2 whitespace-nowrap py-2 xl:px-6 xl:py-6 text-md xl:text-base font-medium">
                7059606487
              </td>
              <td className="px-2 whitespace-nowrap py-2 xl:px-6 xl:py-6 text-md xl:text-base font-medium">
                stanis drive
              </td>
              <td className="px-2 whitespace-nowrap py-2 xl:px-6 xl:py-6 text-md xl:text-base font-medium">
                male
              </td>
              <td
                className="px-2 whitespace-nowrap text-orange-500 capitalize py-2 xl:px-6 xl:py-6 text-md xl:text-base font-normal cursor-pointer"
                onClick={onOpen}
              >
                view
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
