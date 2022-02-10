import { AxiosError } from "axios";
import { handleAxiosError } from "../handle-axios-error";

describe('handleAxiosError', () => {
  it('convert axiosError when API is active but response includes error', () => {
    const axiosError: AxiosError = {
      response: {
        status: 404,
        data: {},
        config: {},
        statusText: "",
        headers: {},
      },
      message: 'not found',
      isAxiosError: true,
      toJSON: () => jest.fn(),
      config: {},
      name: ""
    };
    const actual = handleAxiosError(axiosError);
    const expected = {
      status: 404,
      data: {},
      errorMsg: 'not found',
    };
    expect(actual).toEqual(expected);
  });

  it('convert axiosError when when API is not active', () => {
    const axiosError: AxiosError = {
      message: 'API error',
      isAxiosError: true,
      toJSON: () => jest.fn(),
      config: {},
      name: ""
    };
    const actual = handleAxiosError(axiosError);
    const expected = {
      status: 500,
      data: {},
      errorMsg: 'API error',
    };
    expect(actual).toEqual(expected);
  });
});
