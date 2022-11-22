/**
 * Selectors for AuthSlice
 */

import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';

import { initialState, sliceName } from 'store/auth';

export const selectAuth = (state: RootState) =>
  state?.[sliceName] || initialState;

export const selectLoading = createSelector(
  [selectAuth],
  subState => subState.loading,
);

export const selectError = createSelector(
  [selectAuth],
  subState => subState.error,
);

export const selectWhoisDetails = createSelector(
  [selectAuth],
  subState => subState.whoisDetails,
);
