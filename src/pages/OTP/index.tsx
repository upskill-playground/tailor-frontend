import React from "react";
import Text from "../../design-system/Text";
import { Formik, Form } from "formik";
import Button from "../../design-system/Button";
import { OtpInput } from "../../design-system/Input";
import { formikHelper } from "../../utils/types";

const OtpPage: React.FC = () => {
  const data: formikHelper = {
    otpDigit1: "",
    otpDigit2: "",
    otpDigit3: "",
    otpDigit4: "",
    otpDigit5: "",
    otpDigit6: "",
  };

  const isFormFilled = (values: formikHelper): boolean => {
    return Object.values(values).every((value) => value.trim().length > 0);
  };

  const handleSubimt = (doc: formikHelper) => {
    const otp = parseInt(
      `${doc.otpDigit1}${doc.otpDigit2}${doc.otpDigit3}${doc.otpDigit4}${doc.otpDigit5}${doc.otpDigit6}`,
    );
    console.log(otp);
  };

  return (
    <div className="h-screen grid place-items-center p-3.5">
      <div className="w-80 xl:w-96">
        <Text type="lg" color="text-gray-300">
          Enter the code
        </Text>
        <Text type="md" color="text-gray-300">
          Enter the OTP code that we sent to your email m********a@gmail.com.
        </Text>
        <Formik initialValues={data} onSubmit={handleSubimt}>
          {({ values, handleChange }) => (
            <Form>
              <div className="mt-9 ">
                <div className="grid grid-cols-6 gap-3">
                  <OtpInput
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit1}
                    name="otpDigit1"
                    classText={"text-center text-xl"}
                  />
                  <OtpInput
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit2}
                    name="otpDigit2"
                    classText={"text-center text-xl"}
                  />
                  <OtpInput
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit3}
                    name="otpDigit3"
                    classText={"text-center text-xl"}
                  />
                  <OtpInput
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit4}
                    name="otpDigit4"
                    classText={"text-center text-xl"}
                  />
                  <OtpInput
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit5}
                    name="otpDigit5"
                    classText={"text-center text-xl"}
                  />
                  <OtpInput
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit6}
                    name="otpDigit6"
                    classText={"text-center text-xl"}
                  />
                </div>

                <Button
                  variant="solid"
                  width="w-full"
                  mt="mt-8"
                  isDisabled={!isFormFilled(values)}
                >
                  Verify Email
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default OtpPage;
