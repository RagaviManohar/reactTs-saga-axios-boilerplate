import { cleanup, reduxSagaEffects, mockError } from 'jest.setup';

import { actions } from 'store/auth/index';

import authSliceSaga, { watchWhois, whois } from 'store/auth/saga';

import {
  mockWhoisApiData,
  mockWhoisDetails,
} from 'store/auth/__tests__/__fixtures__/props';

afterEach(cleanup);

afterAll(() => {
  jest.resetAllMocks();
});

describe('authSliceSaga - all', () => {
  it('should watch all actions', () => {
    const gen = authSliceSaga();
    expect(gen.next().value).toEqual(reduxSagaEffects.all([watchWhois()]));
  });
});

describe('authSliceSaga - saga', () => {
  describe('watchWhois', () => {
    const genObject = watchWhois();

    it('should wait for every whoisAction and call whois', () => {
      expect(genObject.next().value).toEqual(
        reduxSagaEffects.takeLatest(actions.whoisAction.type, whois),
      );
    });

    it('should be done on next iteration', () => {
      expect(genObject.next().done).toBeTruthy();
    });

    describe('whois', () => {
      const generator = whois({
        type: actions.whoisAction.type,
        payload: mockWhoisApiData,
      });

      generator.next();

      it('should dispatch whoisSuccessAction with response', () => {
        const response = generator.next(mockWhoisDetails);
        expect(response.value).toEqual(
          reduxSagaEffects.put(actions.whoisSuccessAction(mockWhoisDetails)),
        );
      });

      it('should dispatch action whoisErrorAction when response throws error', () => {
        const putDescriptor = generator.throw(mockError).value;
        expect(putDescriptor).toEqual(
          reduxSagaEffects.put(actions.whoisErrorAction(mockError.message)),
        );
      });
    });
  });
});
