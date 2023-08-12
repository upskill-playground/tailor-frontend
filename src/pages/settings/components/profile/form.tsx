import React from "react";
import { Formik, Form } from "formik";
import { ProfileFormHelper } from "~/utils/types";
import { ProfileFormProps } from "~/design-system/interfaceProps";
import SideModal from "~/design-system/sideModal";
import Button from "~/design-system/Button";
import Input from "~/design-system/Input";

const ProfileForm: React.FC<ProfileFormProps> = ({
  show,
  onClose,
  content,
}) => {
  let data: ProfileFormHelper = {
    name: content?.name || "",
    email: content?.email || "",
    current_role: content?.current_role || "",
  };

  const handleSubmit = (doc: ProfileFormHelper) => {
    console.log(doc);
  };
  return (
    <SideModal
      position={show ? "right-0" : "-right-full"}
      opacity={show ? "opacity-1" : "opacity-0"}
      handleClose={onClose}
      title="edit profile"
    >
      <Formik
        initialValues={data}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {({ handleChange, values }) => (
          <Form className="p-5 xl:p-10">
            <div className="flex flex-col gap-2">
              <p className="text-gray-100 font-normal text-base">Name</p>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
            </div>

            <div className="flex flex-col gap-2 mt-5 xl:mt-8">
              <p className="text-gray-100 font-normal text-base">
                Email Address
              </p>
              <Input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
            </div>

            <div className="flex flex-col gap-2 mt-5 xl:mt-8">
              <p className="text-gray-100 font-normal text-base">Role</p>
              <Input
                type="text"
                name="role"
                onChange={handleChange}
                value={values.current_role}
                isDisabled={true}
              />
            </div>

            <Button variant="solid" width="w-full" mt="mt-10">
              save changes
            </Button>
          </Form>
        )}
      </Formik>
    </SideModal>
  );
};

export default ProfileForm;
