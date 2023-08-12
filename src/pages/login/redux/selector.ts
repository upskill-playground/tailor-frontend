import { createSelector } from "@reduxjs/toolkit";

const authData = (state?: any) => state.auth;

export const getLoading = createSelector(
  authData,
  (authData) => authData.ui.loading,
);
