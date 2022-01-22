import { BASE_URL } from './baseUrl';
import axios, { AxiosResponse } from 'axios'


// A mock function to mimic making an async request for data
export function getRemoteCount(): Promise<counterApiResponse> {
  return axios.get(
    `${BASE_URL}/counter`,
    { timeout : 5000 },
  );
}

export function postRemoteCount(amount = 1): Promise<counterApiResponse> {
  const data = {count: amount};
  return axios.post(
    `${BASE_URL}/counter`,
    data,
    { timeout : 5000 },
  );
}

type Counter = {
  count: number
}

type counterApiResponse = AxiosResponse<Counter>
