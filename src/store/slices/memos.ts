import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  memos: [],
  memo: {},
  id: '',
};

export const memoSlice = createSlice({
  name: 'memos',
  initialState,
  reducers: {
    getMemosReducers: (state, action) => {
      state.memos = action.payload;
    },
    createMemoReducers: (state, action) => {
      state.memos = action.payload;
    },
    deleteMemoReducer: (state, action) => {
      state.memos = action.payload;
    },
    editMemoReducer: (state, action) => {
      state.memo = action.payload;
    },
    getIdReducer: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const getMemosAction = () => async dispatch => {
  let memos = await AsyncStorage.getItem('memos');
  if (memos != null) {
    let memoInfo = JSON.parse(memos);
    dispatch(getMemosReducers(memoInfo));
  } else {
    dispatch(getMemosReducers([]));
  }
};

export const createMemoActions = data => async (dispatch, getState) => {
  const states = getState().memos.memos;
  console.log(states);
  let copied = [...states];
  console.log('CIDFDO', copied);
  copied.push(data);
  AsyncStorage.setItem('memos', JSON.stringify(copied)).then(x =>
    AsyncStorage.getItem('memos').then(val =>
      dispatch(createMemoReducers(JSON.parse(val))),
    ),
  );
};

export const deleteMemoAction = (id: string) => async (dispatch, getState) => {
  const states = getState().memos.memos;
  let copied = [...states];
  const remainArr = copied.filter(memo => memo.id !== id);
  AsyncStorage.setItem('memos', JSON.stringify(remainArr)).then(x =>
    AsyncStorage.getItem('memos').then(val =>
      dispatch(createMemoReducers(JSON.parse(val))),
    ),
  );
};
export const editMemoAction =
  (id: string, data) => async (dispatch, getState) => {
    const states = getState().memos.memos;
    let copied = [...states];
    console.log(copied);
    console.log('DATA', id, data);

    const index = copied.findIndex(memo => memo.id === id);
    if (index != -1) {
      copied[index] = data;
      AsyncStorage.setItem('memos', JSON.stringify(copied)).then(x =>
        AsyncStorage.getItem('memos').then((val: any) =>
          dispatch(editMemoReducer(JSON.parse(val))),
        ),
      );
    }
  };
export const getSingleId = (id: string) => async dispatch => {
  dispatch(getIdReducer(id));
};

export const getSingleData = (id: string) => async (dispatch, getState) => {
  const states = getState().memos.memos;
  let copied = [...states];
  const foundOne = copied.find(memo => memo.id == id);
  console.log('FoundONe', foundOne);
  dispatch(editMemoReducer(foundOne));
};

export const {
  getMemosReducers,
  createMemoReducers,
  editMemoReducer,
  getIdReducer,
} = memoSlice.actions;
export default memoSlice.reducer;
