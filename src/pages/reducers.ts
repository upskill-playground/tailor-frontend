import { combineReducers } from "redux";
import loginReducerSlice from "~/pages/login/redux/reducer";
import OtpReducerSlice from "~/pages/OTP/redux/reducer";

const rootReducers = combineReducers({
  auth: loginReducerSlice,
  otp: OtpReducerSlice,
});

export default rootReducers;
