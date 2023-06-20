import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export interface UserState {
  id: number;
  name: string;
  avatar: string;
  status: 'true' | 'false';
}

const initialState: UserState = {
  id: 0,
  name: "",
  avatar: "",
  status: 'false',
};

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
    setID: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
      state.status= 'true';
    },
    setAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    setName: (state, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.name = action.payload;
    }
  },
});

export const { setID, setName, setAvatar} = UserSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default UserSlice.reducer;
