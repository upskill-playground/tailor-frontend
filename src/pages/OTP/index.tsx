import React, { useState, useEffect } from "react";
import Text from "~/design-system/Text";
import { Formik, Form } from "formik";
import Button from "~/design-system/Button";
import { OtpInput } from "~/design-system/Input";
import { formikHelper } from "~/utils/types";
import { useDispatch, useSelector } from "react-redux";
import { getLoading } from "~/pages/OTP/redux/selector";
import { validate_otp } from "~/pages/OTP/redux/reducer";
import { validate_email } from "~/pages/login/redux/reducer";

const OtpPage: React.FC = () => {
  const [mail, setMail] = useState("");
  const email = localStorage.getItem("s-scribe-email") || "";
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(120);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (email !== "") {
      const parts = email.split("@");
      const username = parts[0];
      const hiddenUsername =
        username.slice(0, Math.floor(username.length / 2)) +
        "*".repeat(username.length - Math.floor(username.length / 2));
      const result = hiddenUsername + "@" + parts[1];
      setMail(result);
    }
  }, [email]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else {
      setShowButton(true);
    }
  }, [timeLeft]);

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

    let data = {
      email: email,
      otp: otp.toString(),
    };
    dispatch(validate_otp(data));
  };

  const Resend = () => {
    let data = {
      email: email,
    };
    dispatch(validate_email(data));
  };

  return (
    <div className="h-screen grid place-items-center p-3.5">
      <div className="w-80 lg:w-2/5 md:w-96">
        <Text type="lg" color="text-gray-300" align="text-left">
          OTP Verification
        </Text>
        <Text type="md" color="text-gray-300" align="text-left">
          Enter the OTP sent to {mail}.
        </Text>
        <Formik initialValues={data} onSubmit={handleSubimt}>
          {({ values, handleChange }) => (
            <Form>
              <div className="mt-14">
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

                {showButton ? (
                  <p
                    className="text-orange-500 text-center text-base mt-3 font-semibold cursor-pointer"
                    onClick={Resend}
                  >
                    Send me a new code
                  </p>
                ) : (
                  <p className="text-gray-200 mt-3 text-center">
                    The OTP will expire in{" "}
                    <span className="text-orange-500 font-semibold text-base">{`${Math.floor(
                      timeLeft / 60,
                    )}:${timeLeft % 60}`}</span>
                  </p>
                )}

                <Button
                  variant="solid"
                  width="w-full"
                  mt="mt-8"
                  isDisabled={!isFormFilled(values) || loading}
                >
                  {loading ? "Verifying..." : "Verify Email"}
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
