import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  status: boolean;
  priceRange: number;
}

const initialState: ICart = {
  status: false,
  priceRange: 150,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        toggleStatus: (state) => {
            state.status = !state.status
        },
        setPriceRange: (state, action: PayloadAction<number>) => {
            state.priceRange = action.payload;
        }
    }
})

export const { toggleStatus, setPriceRange } = productSlice.actions;

export default productSlice.reducer;