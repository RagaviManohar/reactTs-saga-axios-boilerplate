import { cleanup, mockError } from 'jest.setup';
import { RootState } from 'types';

import { initialState } from 'store/auth/index';

import {
  selectAuth,
  selectLoading,
  selectError,
  selectWhoisDetails,
} from 'store/auth/selectors';
import { mockWhoisDetails } from './__fixtures__/props';

afterEach(cleanup);

describe('authSlice selectors', () => {
  let state: RootState = {};

  beforeEach(() => {
    state = {};
  });

  it('should select the initial state', () => {
    expect(selectAuth(state)).toEqual(initialState);
  });

  it('should select loading', () => {
    const mockLoading = true;
    state = {
      auth: { ...initialState, loading: mockLoading },
    };
    expect(selectLoading(state)).toEqual(mockLoading);
  });

  it('should select error', () => {
    state = {
      auth: { ...initialState, error: mockError.message },
    };
    expect(selectError(state)).toEqual(mockError.message);
  });

  it('should select whoisDetails', () => {
    state = {
      auth: { ...initialState, whoisDetails: mockWhoisDetails },
    };
    expect(selectWhoisDetails(state)).toEqual(mockWhoisDetails);
  });
});
