import React from "react";
import { ViewCustomerProps } from "../../../design-system/interfaceProps";
import SideModal from "../../../design-system/sideModal";
import { jobs } from "../../../utils/enums";
import JobCard from "./jobCard";

const ViewCustomer: React.FC<ViewCustomerProps> = ({ isOpen, onClose }) => {
  return (
    <SideModal
      position={isOpen ? "right-0" : "-right-full"}
      opacity={isOpen ? "opacity-1" : "opacity-0"}
      handleClose={onClose}
      title="customer"
    >
      <div>
        <section
          id="personal"
          className="p-5 xl:px-10 xl:py-5 border border-t-gray-600  border-b-blur border-x-blur"
        >
          <div className="grid grid-cols-2">
            <div>
              <p className="text-base text-gray-25 font-medium">Name</p>
              <p className="text-base text-gray-25 font-light capitalize">
                Arya Stark{" "}
              </p>
            </div>
            <div>
              <p className="text-base text-gray-25 font-medium">
                Email Address
              </p>
              <p className="text-base text-gray-25 font-light">
                stanis@mail.com
              </p>
            </div>
          </div>
        </section>
        <section
          id="measurements"
          className="p-5 xl:px-10 xl:py-5 border border-t-gray-600  border-b-blur border-x-blur"
        >
          <div className="grid grid-cols-2">
            <div>
              <p className="text-base text-gray-25 font-medium">Name</p>
              <p className="text-base text-gray-25 font-light capitalize">
                Arya Stark{" "}
              </p>
            </div>
            <div>
              <p className="text-base text-gray-25 font-medium">
                Email Address
              </p>
              <p className="text-base text-gray-25 font-light">
                stanis@mail.com
              </p>
            </div>
          </div>
        </section>

        <section
          id="jobs"
          className="p-5 xl:px-10 xl:py-5 border border-y-gray-600 border-x-blur"
        >
          <div className="flex gap-2.5 items-center">
            <p>Jobs</p>{" "}
            <div className="bg-gray-600 w-5 h-5 rounded-xl text-gray-400 grid place-items-center text-xs font-medium">
              2
            </div>
          </div>

          <div className="flex flex-col gap-8 mt-5">
            {jobs.map((data, idx) => (
              <JobCard key={`${data.title}+${idx}`} content={data} />
            ))}
          </div>
        </section>
      </div>
    </SideModal>
  );
};

export default ViewCustomer;
