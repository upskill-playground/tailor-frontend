import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "~/utils/types";

const initialState = {
  ui: {
    loading: false,
  },
  user: {},
};

export const SettingsReducerSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    get_user: (state) => {
      state.ui.loading = true;
    },
    get_user_success: (state, { payload }: PayloadAction<User>) => {
      state.ui.loading = false;
      state.user = payload;
    },
    get_user_error: (state) => {
      state.ui.loading = false;
    },
  },
});

export const { get_user, get_user_success, get_user_error } =
  SettingsReducerSlice.actions;

export default SettingsReducerSlice.reducer;
