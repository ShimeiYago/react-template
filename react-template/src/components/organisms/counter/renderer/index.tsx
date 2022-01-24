import React, { useState } from 'react';
import styles from './index.module.css';

export function Renderer(props: Props) {
  const {
    count,
    counterStatus,
    
    decrement,
    increment,
    incrementByAmount,
    incrementIfOdd,
    fetchCount,
    postCount,
  } = props;

  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      {counterStatus === 'failed' ? <div>Error</div> : null}
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrement}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
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
          onClick={() => incrementByAmount(incrementValue)}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => fetchCount()}
          disabled={counterStatus==='loading'}
        >
          Fetch
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => postCount(count)}
          disabled={counterStatus==='loading'}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export type Props = {
  count: number,
  counterStatus: string;

  decrement: () => void,
  increment: () => void,
  incrementByAmount: (incrementValue: number) => void,
  incrementIfOdd: (incrementValue: number) => void,
  fetchCount: () => void,
  postCount: (postValue:number) => void,
}