import React, { useState, useEffect, useRef } from "react";
import Text from "~/design-system/Text";
import Button from "~/design-system/Button";
import { useDispatch, useSelector } from "react-redux";
import { getLoading } from "~/pages/OTP/redux/selector";
import { validate_otp } from "~/pages/OTP/redux/reducer";
import { validate_email } from "~/pages/login/redux/reducer";
import { getWithExpiry } from "~/utils/localStorage";
import chart from "~/assets/chart.png";

let currentOtpIndex: number = 0;

const OtpPage: React.FC = () => {
  const [mail, setMail] = useState("");
  const email = getWithExpiry("s-scribe-email");
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();
  const [timeLeft, setTimeLeft] = useState(120);
  const [showButton, setShowButton] = useState(false);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState<number>(0);
  const [isEmpty, setIsEmpty] = useState(true);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (email !== "") {
      const parts = email?.split("@");
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

  const handleSubmit = () => {
    const result = otp.join("");
    let data = {
      email: email,
      otp: result,
    };
    dispatch(validate_otp(data));
  };

  const Resend = () => {
    let data = {
      email: email,
    };
    dispatch(validate_email(data));
  };

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = target;
    const newOTP: string[] = [...otp];
    newOTP[currentOtpIndex] = value.substring(value.length - 1);
    if (!value) setActiveOtpIndex(currentOtpIndex - 1);
    else setActiveOtpIndex(currentOtpIndex + 1);
    setOtp(newOTP);

    const areAllFieldsEmpty = newOTP.every((field) => field.trim() === "");
    setIsEmpty(areAllFieldsEmpty);
  };

  const handleKeyDown = (
    { key }: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ): void => {
    currentOtpIndex = index;
    if (key === "Backspace") setActiveOtpIndex(currentOtpIndex - 1);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  return (
    <div className="h-screen grid place-items-center p-3.5 overflow-hidden">
      <img src={chart} alt="chart" className="absolute right-0 top-0" />
      <img src={chart} alt="chart" className="absolute bottom-0 -left-10" />
      <div className="w-80 lg:w-2/5 md:w-96">
        <Text type="lg" color="text-gray-300" align="text-center">
          We just sent you a mail!
        </Text>
        <Text
          type="md"
          color="text-font-secondary"
          fontSize="text-sm"
          m="mt-2"
          align="text-center"
        >
          Check your inbox on <span className="font-bold">{mail}</span>. If the
          mail is not coming in, note that slow networks might delay its
          delivery. Also, look through your promotions and spam folders.
        </Text>

        <div>
          <div className="mt-14 grid grid-cols-6 gap-2">
            {otp.map((_, idx) => (
              <input
                key={idx}
                ref={idx === activeOtpIndex ? inputRef : null}
                value={otp[idx]}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onChange={handleChange}
                type="number"
                className="bg-input-primary w-auto h-14 md:h-20 px-3.5 py-3.5 text-lg rounded text-center font-medium text-gray-50 border-2 border-input-secondary focus:outline-none focus:border-primary spin-button-none"
              />
            ))}
          </div>

          {showButton ? (
            <p
              className="text-primary text-center text-base mt-8 font-semibold cursor-pointer"
              onClick={Resend}
            >
              Send me a new code
            </p>
          ) : (
            <p className="text-gray-200 mt-8 text-center">
              The OTP will expire in{" "}
              <span className="text-primary font-semibold text-base">{`${Math.floor(
                timeLeft / 60,
              )}:${timeLeft % 60}`}</span>
            </p>
          )}
          <Button
            variant="solid"
            width="w-full"
            mt="mt-8"
            handleClick={handleSubmit}
            isDisabled={isEmpty || loading}
          >
            {loading ? "Verifying..." : "Verify Email"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
