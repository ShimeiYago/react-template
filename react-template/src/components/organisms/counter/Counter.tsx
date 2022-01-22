import React, { useState } from 'react';

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
} from 'store/counter/counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useAppSelector(selectCount);
  const counterStatus = useAppSelector(selectCounterStatus);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      {counterStatus === 'failed' ? <div>Error</div> : null}
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(fetchCount())}
          disabled={counterStatus==='loading'}
        >
          Fetch
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(postCount(count))}
          disabled={counterStatus==='loading'}
        >
          Post
        </button>
      </div>
    </div>
  );
}
