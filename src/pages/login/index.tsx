import React from "react";
import FormLabel from "../../design-system/FormLabel";
import Text from "../../design-system/Text";
import { Formik, Form } from "formik";
import Button from "../../design-system/Button";
import Input from "../../design-system/Input";
import { formikLoginHelper } from "../../utils/types";

const Login: React.FC = () => {
  const data: formikLoginHelper = {
    email: "",
  };

  const handleSubimt = (doc: formikLoginHelper) => {
    console.log(doc);
  };

  const isFormFilled = (values: formikLoginHelper): boolean => {
    return Object.values(values).every((value) => value.trim().length > 0);
  };
  return (
    <div className="h-screen grid place-items-center p-3.5 overflow-hidden">
      <div className="w-80 lg:w-2/5 md:w-96">
        <Text type="lg" align="text-center">
          Welcome
        </Text>
        <Text type="md" color="text-gray-400" align="text-center">
          Access your Stylescribe account.
        </Text>
        <Formik initialValues={data} onSubmit={handleSubimt}>
          {({ values, handleChange }) => (
            <Form>
              <div className="mt-20">
                <FormLabel color="text-gray-400">Enter Email</FormLabel>
                <Input
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="olivia@untitledui.com"
                  width="w-full"
                  name="email"
                />
                <Button
                  variant="solid"
                  width="w-full"
                  mt="mt-8"
                  isDisabled={!isFormFilled(values)}
                >
                  Continue
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
