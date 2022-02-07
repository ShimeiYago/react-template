import { AxiosRequestConfig } from 'axios'

export function getAxiosRequestConfig(timeout:number=3000): AxiosRequestConfig {
  const axiosRequestConfig: AxiosRequestConfig = {
    timeout: timeout,
  };
  return axiosRequestConfig;
}