import {configureStore} from '@reduxjs/toolkit';
import memoReducer from './slices/memos';

const store = configureStore({
  reducer: {
    memos: memoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
