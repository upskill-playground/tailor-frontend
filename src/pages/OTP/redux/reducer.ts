import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ValdateOtp } from "~/design-system/interfaceProps";
import { LoginState } from "~/pages/login/redux/reducer";

const initialState: LoginState = {
  ui: {
    loading: false,
  },
};

export const OtpReducerSlice = createSlice({
  name: "otp",
  initialState,
  reducers: {
    validate_otp: (state, action: PayloadAction<ValdateOtp>) => {
      state.ui.loading = true;
      console.log(action);
    },
    validate_otp_success: (state) => {
      state.ui.loading = false;
    },
    validate_otp_error: (state) => {
      state.ui.loading = false;
    },
  },
});

export const { validate_otp, validate_otp_success, validate_otp_error } =
  OtpReducerSlice.actions;

export default OtpReducerSlice.reducer;
