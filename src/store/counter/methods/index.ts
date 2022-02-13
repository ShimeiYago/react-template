import { AppDispatch, AppThunk } from 'store';
import { getRemoteCount, postRemoteCount } from 'api/counter-api';
import {
  fetchSuccess,
  incrementByAmount,
  postSuccess,
  requestFailure,
  requestStart,
} from '../slice';
import { selectCounterValue } from '../selector';
import { ApiError } from 'api/utils/handle-axios-error';

// fetchCount methods
export const fetchCount = () => async (dispatch: AppDispatch) => {
  dispatch(requestStart());

  try {
    const res = await getRemoteCount();
    dispatch(fetchSuccess(res.count));
  } catch (error) {
    const apiError = error as ApiError;
    dispatch(requestFailure(apiError.errorMsg));
  }
};

// postCount method
export const postCount = (count: number) => async (dispatch: AppDispatch) => {
  dispatch(requestStart());

  try {
    await postRemoteCount(count);
    dispatch(postSuccess());
  } catch (error) {
    const apiError = error as ApiError;
    dispatch(requestFailure(apiError.errorMsg));
  }
};

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectCounterValue(getState());
    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };
