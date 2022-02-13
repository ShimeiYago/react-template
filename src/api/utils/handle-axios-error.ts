import { AxiosError } from 'axios';

export function handleAxiosError(axiosError: AxiosError): ApiError {
  if (axiosError.response) {
    // when API is active but response includes error
    const error: ApiError = {
      status: axiosError.response.status,
      errorMsg: axiosError.message,
    };
    return error;
  } else {
    // when API is not active
    const error: ApiError = {
      status: 500,
      errorMsg: axiosError.message,
    };
    return error;
  }
}

export type ApiError = {
  status: number;
  errorMsg: string;
};
