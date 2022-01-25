import { Props, Renderer } from './renderer';

import { useAppSelector, useAppDispatch } from 'app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  fetchCount,
  postCount,
  incrementIfOdd,
  selectCount,
  selectCounterStatus,
} from 'store/counter/slice';

export function Counter() {
  const dispatch = useAppDispatch();

  const props: Props = {
    count: useAppSelector(selectCount),
    counterStatus: useAppSelector(selectCounterStatus),
  
    decrement: () => dispatch(decrement()),
    increment: () => dispatch(increment()),
    incrementByAmount: (incrementValue: number) => dispatch(incrementByAmount(incrementValue)),
    incrementIfOdd: (incrementValue: number) => dispatch(incrementIfOdd(incrementValue)),
    fetchCount: () => dispatch(fetchCount()),
    postCount: (postValue:number) => dispatch(postCount(postValue)),
  }
  
  return <Renderer {...props} />;
}
