export type CounterStatus = 'idle' | 'loading' | 'failed';

export interface CounterState {
  value: number;
  status: CounterStatus;
}

export const initialState: CounterState = {
  value: 0,
  status: 'idle',
};
