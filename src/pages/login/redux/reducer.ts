import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setWithExpiry } from "~/utils/localStorage";

interface UiState {
  loading: boolean;
}

export interface LoginState {
  ui: UiState;
}

const initialState: LoginState = {
  ui: {
    loading: false,
  },
};

export const loginReducerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    validate_email: (state, action: PayloadAction<{ email: string }>) => {
      state.ui.loading = true;
      const { email } = action.payload;
      setWithExpiry("s-scribe-email", email);
    },
    validate_email_success: (state) => {
      state.ui.loading = false;
    },
    validate_email_error: (state) => {
      state.ui.loading = false;
    },
  },
});

export const { validate_email, validate_email_success, validate_email_error } =
  loginReducerSlice.actions;

export default loginReducerSlice.reducer;
