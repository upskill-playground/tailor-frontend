import React from "react";
import FormLabel from "~/design-system/FormLabel";
import Text from "~/design-system/Text";
import { Formik, Form } from "formik";
import Button from "~/design-system/Button";
import Input from "~/design-system/Input";
import { formikLoginHelper } from "~/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { validate_email } from "~/pages/login/redux/reducer";
import { getLoading } from "~/pages/login/redux/selector";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(getLoading);

  const data: formikLoginHelper = {
    email: "",
  };

  const handleSubimt = (doc: { email: string }) => {
    dispatch(validate_email(doc));
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
                  isDisabled={!isFormFilled(values) || loading}
                >
                  {loading ? "Loading..." : "Continue"}
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
