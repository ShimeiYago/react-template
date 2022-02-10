import { ApiError } from 'api/utils/handle-axios-error';
import axios from 'axios';
import { getRemoteCount, postRemoteCount } from '..';

describe('getRemoteCount', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('handle nomal response', async () => {
    axios.get = jest.fn().mockResolvedValue({ data: { count: 0 } });

    const response = await getRemoteCount();
    expect(response.count).toBe(0);
  });

  it('handle error response', async () => {
    axios.get = jest.fn().mockRejectedValue(new Error());

    const expectedApiError: ApiError = {
      status: 500,
      data: {},
      errorMsg: '',
    };
    expect(getRemoteCount()).rejects.toEqual(expectedApiError);
  });
});

describe('postRemoteCount', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('handle nomal response', async () => {
    axios.post = jest.fn().mockResolvedValue({ data: { count: 1 } });

    const response = await postRemoteCount(1);
    expect(response.count).toBe(1);
  });

  it('handle error response', async () => {
    axios.post = jest.fn().mockRejectedValue(new Error());

    const expectedApiError: ApiError = {
      status: 500,
      data: {},
      errorMsg: '',
    };
    expect(postRemoteCount(1)).rejects.toEqual(expectedApiError);
  });
});
