import { call, put, takeLatest, all } from 'redux-saga/effects';

import { actions } from 'store/auth';

import { whoisApi } from './api';

import { GetWhoisActionProps } from './types';

export function* whois({ payload }: GetWhoisActionProps) {
  try {
    const whois = yield call(whoisApi, payload);
    yield put(actions.whoisSuccessAction(whois));
  } catch (err: any) {
    yield put(actions.whoisErrorAction(err?.message));
  }
}

export function* watchWhois() {
  yield takeLatest(actions.whoisAction.type, whois);
}

export default function* authSliceSaga() {
  yield all([watchWhois()]);
}
