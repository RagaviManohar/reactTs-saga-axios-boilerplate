import { cleanup, mockError } from 'jest.setup';

import reducer, { initialState, actions } from 'store/auth';

import {
  mockWhoisDetails,
  mockWhoisApiData,
} from 'store/auth/__tests__/__fixtures__/props';

afterEach(cleanup);

describe('auth.slice', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  describe('whoisAction', () => {
    it('should handle actions.whoisAction action', () => {
      expect(
        reducer(initialState, actions.whoisAction(mockWhoisApiData)),
      ).toEqual({
        ...initialState,
        loading: true,
      });
    });

    it('should handle actions.whoisSuccessAction action', () => {
      expect(
        reducer(initialState, actions.whoisSuccessAction(mockWhoisDetails)),
      ).toEqual({
        ...initialState,
        details: initialState.details,
      });
    });

    it('should handle actions.whoisErrorAction action', () => {
      expect(
        reducer(initialState, actions.whoisErrorAction(mockError.message)),
      ).toEqual({
        ...initialState,
        error: mockError.message,
      });
    });
  });
});
