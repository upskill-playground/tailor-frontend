import React from "react";
import Text from "~/design-system/Text";
import { Formik, Form } from "formik";
import Button from "~/design-system/Button";
import Input from "~/design-system/Input";
import { formikLoginHelper } from "~/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { validate_email } from "~/pages/login/redux/reducer";
import { getLoading } from "~/pages/login/redux/selector";
import chart from "~/assets/chart.png";
import signin from "~/assets/sign_in.png";

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
    <div className="h-screen p-3.5 overflow-hidden">
      <img src={chart} alt="chart" className="absolute right-0 top-0" />
      <img src={chart} alt="chart" className="absolute bottom-0 -left-10" />
      <div className="grid grid-cols-1 md:py-79 md:px-60 gap-0 md:grid-cols-2 md:gap-48">
        <div className="bg-background-secondary px-31 h-80vh py-54 w-609 hidden md:flex md:flex-col rounded">
          <p className="text-center text-xl text-font-primary">Welcome Back!</p>
          <p className="mt-2 text-font-secondary text-center text-sm">
            There’s been a couple of updates, sign in to your <br /> account to
            check them out!
          </p>
          <img src={signin} alt="chart-data" className="mt-165" />
        </div>

        <div className="mt-244 md:mt-165 w-auto md:w-402">
          <Text type="lg" align="text-left" fontSize="text-xl">
            Sign In
          </Text>
          <Text
            type="sm"
            color="text-font-secondary"
            m="mt-2"
            align="text-left"
          >
            You should get an instant OTP code sent to your mail
          </Text>
          <Formik initialValues={data} onSubmit={handleSubimt}>
            {({ values, handleChange }) => (
              <Form>
                <div className="mt-20">
                  <label className="mb-2 text-font-primary font-bold text-sm">
                    Email Address:
                  </label>
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
    </div>
  );
};

export default Login;
