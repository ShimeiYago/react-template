import { getAxiosRequestConfig } from '../get-axios-request-config';

describe('getAxiosRequestConfig', () => {
  it('returns default AxiosRequestConfig', () => {
    const actual = getAxiosRequestConfig();
    const expected = {
      timeout: 3000,
    };
    expect(actual).toEqual(expected);
  });
  it('handle parameters', () => {
    const param = {
      timeout: 6000,
    };
    const actual = getAxiosRequestConfig(param);
    const expected = {
      timeout: 6000,
    };
    expect(actual).toEqual(expected);
  });
});
