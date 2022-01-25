import React from 'react';
import { CounterStatus } from 'store/counter/counterSlice';
import styles from './index.module.css';

export class Renderer extends React.Component<Props, State> {
  state = {
    incrementAmount: '2',
  };

  render() {
    const {
      count,
      counterStatus,

      decrement,
      increment,
      incrementByAmount,
      incrementIfOdd,
      fetchCount,
      postCount,
    } = this.props;

    const incrementValue = Number(this.state.incrementAmount) || 0;

    return (
      <div>
        {counterStatus === 'failed' ? <div>Error</div> : null}
        <div className={styles.row}>
          <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={() => decrement()}
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
            value={this.state.incrementAmount}
            onChange={(e) => this.setIncrementAmount(e.target.value)}
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

  protected setIncrementAmount(incrementAmount:string) {
    this.setState({ incrementAmount: incrementAmount });
  }
}

export type Props = {
  count: number,
  counterStatus: CounterStatus;

  decrement: () => void,
  increment: () => void,
  incrementByAmount: (incrementValue: number) => void,
  incrementIfOdd: (incrementValue: number) => void,
  fetchCount: () => void,
  postCount: (postValue:number) => void,
}

type State = {
  incrementAmount: string,
}
