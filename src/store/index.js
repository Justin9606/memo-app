import {configureStore} from '@reduxjs/toolkit';
import memoReducer from './slices/memos';

const store = configureStore({
  reducer: {
    memos: memoReducer,
  },
});

export default store;
