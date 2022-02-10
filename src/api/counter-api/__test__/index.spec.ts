import { ApiError } from 'api/utils/handle-axios-error';
import axios from 'axios'
import { getRemoteCount, postRemoteCount } from '..';

jest.mock('axios');

describe('getRemoteCount', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('handle nomal response', async () => {
    (axios.get as any).mockResolvedValue({ data: {count: 0} });

    const response = await getRemoteCount();
    expect(response.count).toBe(0);
  });

  it('handle error response', async () => {    
    (axios.get as any).mockRejectedValue(new Error);

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
    (axios.post as any).mockResolvedValue({ data: {count: 1} });

    const response = await postRemoteCount(1);
    expect(response.count).toBe(1);
  });

  it('handle error response', async () => {    
    (axios.post as any).mockRejectedValue(new Error);

    const expectedApiError: ApiError = {
      status: 500,
      data: {},
      errorMsg: '',
    };
    expect(postRemoteCount(1)).rejects.toEqual(expectedApiError);
  });
});
