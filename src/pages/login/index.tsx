import React from "react";
import FormLabel from "../../design-system/FormLabel";
import Text from "../../design-system/Text";
import { Formik, Form } from "formik";
import Button from "../../design-system/Button";
import Input from "../../design-system/Input";

type formik = {
  email: string;
};

const Login: React.FC = () => {
  let data: formik = {
    email: "",
  };

  const handleSubimt = (doc: formik) => {
    console.log(doc);
  };
  return (
    <div className="h-screen grid place-items-center p-2">
      <div className="w-80">
        <Text type="lg">Log in</Text>
        <Text type="md">Welcome back! Please enter your details.</Text>
        <Formik initialValues={data} onSubmit={handleSubimt}>
          {({ values, handleChange }) => (
            <Form>
              <div className="mt-9">
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  onChange={handleChange}
                  value={values.email}
                  placeholder="olivia@untitledui.com"
                  width="w-full"
                  name="email"
                />
                <Button variant="solid" width="w-full" mt="mt-8">
                  Log in
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
