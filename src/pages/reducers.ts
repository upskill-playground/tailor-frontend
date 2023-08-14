import { combineReducers } from "redux";
import loginReducerSlice from "~/pages/login/redux/reducer";
import OtpReducerSlice from "~/pages/OTP/redux/reducer";
import SettingsReducerSlice from "~/pages/settings/redux/reducer";

const rootReducers = combineReducers({
  auth: loginReducerSlice,
  otp: OtpReducerSlice,
  settings: SettingsReducerSlice,
});

export default rootReducers;
