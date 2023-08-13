import { put, takeEvery, call } from "@redux-saga/core/effects";
import {
  validate_email,
  validate_email_success,
  validate_email_error,
} from "./reducer";
import api from "~/service/dataService";
import { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

interface ValidateEmailPayload {
  email: string;
}

type ValidateEmail = PayloadAction<ValidateEmailPayload>;

function* validateEmailSaga(action: ValidateEmail) {
  try {
    const request: AxiosResponse = yield call(
      api.post,
      `/api/admin/email`,
      action.payload,
    );
    const response: any = request.data;
    yield put({
      type: validate_email_success.type,
    });

    toast.success(response.message);

    setTimeout(() => {
      window.location.href = "/OTP";
    }, 1000);

    if (window?.location?.pathname === "/login") {
      setTimeout(() => {
        window.location.href = "/OTP";
      }, 500);
    }
  } catch (error: any) {
    toast(error.response.data.message, {
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
      type: validate_email_error.type,
    });
  }
}

function* loginSagas() {
  yield takeEvery(validate_email.type, validateEmailSaga);
}

export default loginSagas;
