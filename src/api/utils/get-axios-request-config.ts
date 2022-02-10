import { AxiosRequestConfig } from 'axios';

export function getAxiosRequestConfig(
  config: AxiosRequestConfig = {},
): AxiosRequestConfig {
  const axiosRequestConfig: AxiosRequestConfig = {
    ...defaultConfig,
    ...config,
  };
  return axiosRequestConfig;
}

const defaultConfig: AxiosRequestConfig = {
  timeout: 3000,
};
