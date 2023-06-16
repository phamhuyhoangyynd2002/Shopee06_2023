import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';
import { fetchCount } from './counterAPI';

export interface CounterState {
  id: number;
  name: String;
  avatar: String;
  cart: [];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  id: 0,
  name: "",
  avatar: "",
  cart: [],
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setID: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setAvatar: (state, action: PayloadAction<String>) => {
      state.avatar = action.payload;
    },
    setName: (state, action: PayloadAction<String>) => {
      console.log(action.payload);
      state.name = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.id += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { setID, setName, setAvatar} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
