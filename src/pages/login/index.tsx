import React from "react";
import { Formik, Form } from "formik";
import { formikLoginHelper } from "../../utils/types";
import signIn from "../../assets/images/sign_in.png";
import chart from "../../assets/images/bg_chart.png"

const Login: React.FC = () => {
  let data: formikLoginHelper = {
    email: "",
  };

  const handleSubimt = (doc: formikLoginHelper) => {
    console.log(doc);
  };
  return (
    <div>
      <img src={chart} alt='chart' className="absolute right-0"  />
      <img src={chart} alt='chart' className="absolute -bottom-20 -left-12"  />
      <div className="grid grid-cols-1 py-8 px-8 md:grid-cols-2 md:gap-48 gap-0 md:py-16 md:px-16">
        {/* left section */}
        <div className="bg-main-secondary h-sm hidden flex-col md:flex md:flex-col rounded-lg py-xl px-lg pb-20">
          <p className="text-center text-xl text-btn-white">Welcome Back!</p>
          <div className="flex justify-center">
            <p className="text-center text-textColor-secondary text-sm mt-2">
              There’s been a couple of updates, sign in to your <br /> account
              to check them out!
            </p>
          </div>
          <img src={signIn} alt="chart" className="mt-20" />
        </div>

        {/* right section */}
        <div className="w-auto h-auto  md:h-auto md:w-lg pt-3xl">
          <div>
            <p className="text-btn-white text-xl">Sign In</p>
            <p className="text-textColor-secondary text-sm">
              You should get an instant OTP code sent to your mail
            </p>

            <Formik initialValues={data} onSubmit={handleSubimt}>
              {({ values, handleChange }) => (
                <Form className="mt-16 flex flex-col">
                  <label className="text-textColor-primary text-sm mb-2 font-bold">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    className="bg-input-primary p-2.5 w-full text-textColor-primary border-solid border-1 border-input-secondary rounded h-11 focus:outline-none focus:border-input-secondary focus:border-2"
                  />
                  <button
                    type="submit"
                    className="bg-btn-primary text-textColor-primary w-auto rounded mt-8 h-10"
                  >
                    Get OTP
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
