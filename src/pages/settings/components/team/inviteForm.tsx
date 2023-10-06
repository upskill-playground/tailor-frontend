import React from "react";
import { Formik, Form } from "formik";
import { ProfileFormHelper } from "~/utils/types";
import { ProfileFormProps } from "~/design-system/interfaceProps";
import SideModal from "~/design-system/sideModal";
import Button from "~/design-system/Button";
import { members, roles } from "~/utils/enums";
import Input from "~/design-system/Input";
import { BiTrash } from "react-icons/bi";

const InviteForm: React.FC<ProfileFormProps> = ({
  show,
  onClose,
  isEdit,
  content,
}) => {
  let data: ProfileFormHelper = {
    name: content?.name || "",
    email: content?.email || "",
    role: content?.role || "",
  };

  const handleSubmit = (doc: ProfileFormHelper) => {
    console.log(doc);
  };
  return (
    <SideModal
      position={show ? "right-0" : "-right-full"}
      opacity={show ? "opacity-1" : "opacity-0"}
      handleClose={onClose}
      title={isEdit ? "Add New Team-Members/Delete Old Ones" : "invite member"}
    >
      <div className="flex flex-col gap-3">
        {members.map((member, idx) => (
          <div
            key={idx}
            className="px-4 py-2  flex justify-between items-center cursor-pointer hover:bg-background-hover"
          >
            <p className="capitalize text-font-secondary text-sm font-bold">
              {member.name}
            </p>

            <div className="cursor-pointer  grid place-items-center text-primary bg-background-blue rounded-full p-1">
              <BiTrash size={16} />
            </div>
          </div>
        ))}
      </div>
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ handleChange, values }) => (
          <Form className="px-4 mt-9">
            <div className="flex flex-col gap-2">
              <p className="text-gray-100 font-normal text-base">Name</p>
              <Input
                type="text"
                value={values.name}
                onChange={handleChange}
                placeholder="John Doe"
                name="name"
              />
            </div>

            <div className="flex flex-col gap-2 mt-5 xl:mt-8">
              <p className="text-gray-100 font-normal text-base">
                Email Address
              </p>
              <Input
                type="email"
                value={values.email}
                onChange={handleChange}
                name="email"
                placeholder="johndoe@mail.com"
              />
            </div>

            <div className="flex flex-col gap-2 mt-5 xl:mt-8">
              <p className="text-gray-100 font-normal text-base">Role</p>
              <select
                name="role"
                onChange={handleChange}
                className="py-3.5 px-3.5 w-full bg-gray-50 text-base rounded-md border border-gray-300 text-gray-800 placeholder:text-gray-500 focus:outline-none"
              >
                <option>--Choose Role--</option>
                {roles.map((role, idx) => (
                  <option
                    key={`${role.name}+${idx}`}
                    value={role.value}
                    className="capitalize"
                  >
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            {isEdit ? (
              <Button variant="solid" width="w-full" mt="mt-10">
                save changes
              </Button>
            ) : (
              <Button variant="solid" width="w-full" mt="mt-10">
                send invite
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </SideModal>
  );
};

export default InviteForm;
