import axios, { AxiosResponse, RawAxiosRequestHeaders } from 'axios';

import config from 'config';

const urlPostfix = '/api/v1';
const apiUrl = `${config.apiUrl}${urlPostfix}`;

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer `, // TODO - add access/jwt token here
  },
});

instance.interceptors.response.use(
  async (response: AxiosResponse) => response,
  error => Promise.reject(error.response),
);

instance.interceptors.request.use(
  async req => ({ ...req, withCredentials: true }),
  error => Promise.reject(error),
);

export const getCall = async (
  url: string,
  headers: RawAxiosRequestHeaders = {},
) => instance.get(url, { headers });

export const postCall = async (
  url: string,
  payload: object,
  headers: RawAxiosRequestHeaders = {},
) => instance.post(url, payload, { headers });

export const putCall = async (
  url: string,
  payload: object,
  headers: RawAxiosRequestHeaders = {},
) => instance.put(url, payload, { headers });
