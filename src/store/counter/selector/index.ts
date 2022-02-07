import { RootState } from 'store';

export const selectCounterValue = (state: RootState) => state.counter.value;
export const selectCounterLoading = (state: RootState) => state.counter.loading;
export const selectCounterErrorMsg = (state: RootState) => state.counter.errorMsg;
