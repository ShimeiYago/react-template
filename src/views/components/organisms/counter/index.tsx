import { Props, Renderer } from './renderer';

import { useAppSelector, useAppDispatch } from 'store';
import {
  selectCounterErrorMsg,
  selectCounterLoading,
  selectCounterValue,
} from 'store/counter/selector';
import { decrement, increment, incrementByAmount } from 'store/counter/slice';
import { fetchCount, incrementIfOdd, postCount } from 'store/counter/methods';

export function Counter() {
  const dispatch = useAppDispatch();

  const props: Props = {
    count: useAppSelector(selectCounterValue),
    counterError: useAppSelector(selectCounterErrorMsg),
    loading: useAppSelector(selectCounterLoading),

    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
    incrementByAmount: (incrementValue: number) =>
      dispatch(incrementByAmount(incrementValue)),
    incrementIfOdd: (incrementValue: number) =>
      dispatch(incrementIfOdd(incrementValue)),
    fetchCount: () => dispatch(fetchCount()),
    postCount: (postValue: number) => dispatch(postCount(postValue)),
  };

  return <Renderer {...props} />;
}
