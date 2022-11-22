import { API_ROUTES, getCall } from 'utils/api';

import { WhoisApiType } from './types';

export const whoisApi = async (payload: WhoisApiType) => {
  try {
    const { data } = await getCall(API_ROUTES.whois, payload);
    return data;
  } catch (err: any) {
    throw new Error(err?.message);
  }
};
