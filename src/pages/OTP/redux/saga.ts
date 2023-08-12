import { takeEvery, put, call } from "@redux-saga/core/effects";
import api from "~/service/dataService";
import { AxiosResponse } from "axios";
import {
  validate_otp,
  validate_otp_success,
  validate_otp_error,
} from "./reducer";
import { PayloadAction } from "@reduxjs/toolkit";
import { ValdateOtp } from "~/design-system/interfaceProps";
import toast from "react-hot-toast";

type ValidatePayload = PayloadAction<ValdateOtp>;

function* validateOtpSaga(action: ValidatePayload) {
  try {
    const request: AxiosResponse = yield call(
      api.post,
      `api/admin/otp`,
      action.payload,
    );
    const response: any = request.data;
    yield put({
      type: validate_otp_success.type,
    });
    localStorage.removeItem("s-scribe-email");
    localStorage.setItem("s-scribe-token", response.data.token);
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  } catch (err: any) {
    toast(err.response.data.message, {
      style: {
        background: "#FEF3F2",
        borderRadius: "16px",
        padding: "4px 10px",
        color: "#B42318",
        fontWeight: "700",
        fontSize: "14px",
      },
    });
    yield put({
      type: validate_otp_error.type,
    });
  }
}

function* OtpSagas() {
  yield takeEvery(validate_otp.type, validateOtpSaga);
}

export default OtpSagas;
