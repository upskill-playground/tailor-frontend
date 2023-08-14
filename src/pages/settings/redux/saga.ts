import { takeEvery, put, call } from "@redux-saga/core/effects";
import api from "~/service/dataService";
import { AxiosResponse } from "axios";
import { get_user, get_user_success, get_user_error } from "./reducer";

function* getUserSaga() {
  try {
    const request: AxiosResponse = yield call(api.get, `/api/admin`);
    const response: any = request.data;
    yield put({
      type: get_user_success.type,
      payload: response.data,
    });
  } catch (err: any) {
    console.log(err);
    yield put({
      type: get_user_error.type,
    });
  }
}

function* settingsSagas() {
  yield takeEvery(get_user.type, getUserSaga);
}

export default settingsSagas;
