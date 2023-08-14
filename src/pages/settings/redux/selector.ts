import { createSelector } from "@reduxjs/toolkit";

const settingsData = (state?: any) => state.settings;

export const getLoading = createSelector(
  settingsData,
  (settingsData) => settingsData.ui.loading,
);

export const getUser = createSelector(
  settingsData,
  (settingsData) => settingsData.user,
);
