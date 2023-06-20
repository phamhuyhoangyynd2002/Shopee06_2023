import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

const initialState = [{id: 0, name: "", url_img: "", price: 0}];

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartAdd(state, action) {
            state.push(action.payload)
        }
    },
});

export const { cartAdd } = counterSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default counterSlice.reducer;
