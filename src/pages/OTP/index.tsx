import React from "react";
import Text from "../../design-system/Text";
import { Formik, Form } from "formik";
import Button from "../../design-system/Button";
import Input from "../../design-system/Input";

type formik = {
  otpDigit1: string;
  otpDigit2: string;
  otpDigit3: string;
  otpDigit4: string;
};

const OtpPage: React.FC = () => {
  let data: formik = {
    otpDigit1: "",
    otpDigit2: "",
    otpDigit3: "",
    otpDigit4: "",
  };

  const isFormFilled = (values: formik): boolean => {
    return Object.values(values).every((value) => value.trim().length > 0);
  };

  const handleSubimt = (doc: formik) => {
    const otp = parseInt(
      `${doc.otpDigit1}${doc.otpDigit2}${doc.otpDigit3}${doc.otpDigit4}`,
    );
    console.log(otp);
  };

  return (
    <div className="h-screen grid place-items-center p-2">
      <div className="w-80">
        <Text type="lg">Enter the code</Text>
        <Text type="md">
          Enter the OTP code that we sent to your email m********a@gmail.com.
        </Text>
        <Formik initialValues={data} onSubmit={handleSubimt}>
          {({ values, handleChange }) => (
            <Form>
              <div className="mt-9 ">
                <div className="grid grid-cols-4 gap-3">
                  <Input
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit1}
                    placeholder="0"
                    name="otpDigit1"
                    classText={"text-center text-xl"}
                  />
                  <Input
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit2}
                    placeholder="0"
                    name="otpDigit2"
                    classText={"text-center text-xl"}
                  />
                  <Input
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit3}
                    placeholder="0"
                    name="otpDigit3"
                    classText={"text-center text-xl"}
                  />
                  <Input
                    type="text"
                    onChange={handleChange}
                    minimum={0}
                    maximum={9}
                    max={1}
                    value={values.otpDigit4}
                    placeholder="0"
                    name="otpDigit4"
                    classText={"text-center text-xl"}
                  />
                </div>

                {!isFormFilled(values) && (
                  <Text type="sm" color="text-orange-600" mt={"mt-2"}>
                    Please fill in the numbers
                  </Text>
                )}

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
