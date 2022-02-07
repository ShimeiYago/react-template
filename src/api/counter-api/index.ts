import { BASE_URL } from '../base-url';
import axios, { AxiosError, AxiosResponse } from 'axios'
import { handleAxiosError } from '../utils/handle-axios-error';
import { getAxiosRequestConfig } from 'api/utils/get-axios-request-config';

export async function getRemoteCount(): Promise<Counter> {
  try {
    const res: AxiosResponse<Counter> = await axios.get(
      `${BASE_URL}/counter`,
      getAxiosRequestConfig(),
    );
    return res.data;

  } catch (error) {
    const axiosError = error as AxiosError;
    throw handleAxiosError(axiosError);
  }
}

export async function postRemoteCount(amount: number): Promise<Counter> {
  const data = {count: amount};

  try {
    const res: AxiosResponse<Counter> = await axios.post(
      `${BASE_URL}/counter`,
      data,
      getAxiosRequestConfig(),
    );
    return res.data;

  } catch (error) {
    const axiosError = error as AxiosError;
    throw handleAxiosError(axiosError);
  }
}

type Counter = {
  count: number
}
