import { all } from "redux-saga/effects";
import loginSagas from "~/pages/login/redux/saga";
import OtpSagas from "~/pages/OTP/redux/saga";

export default function* root() {
  yield all([loginSagas(), OtpSagas()]);
}
