import { createSelector } from "@reduxjs/toolkit";

const otpData = (state?: any) => state.otp;

export const getLoading = createSelector(
  otpData,
  (otpData) => otpData.ui.loading,
);
