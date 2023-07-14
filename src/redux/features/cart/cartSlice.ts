import { IProduct } from '@/types/globalTypes';
import { Action } from '@radix-ui/react-toast';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface ICart {
  products: IProduct[];
  total: number;
}

const initialState: ICart = {
  products: [],
  total: 0,
};

const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const findDup = state.products.find((product) => product._id === action.payload._id);

      if(findDup){
        findDup.quantity! +=1;
      } else {
        state.products.push({...action.payload, quantity: 1})
      }
      state.total += action.payload.price;
    },
    removeSingle: (state, action: PayloadAction<IProduct>) => {
      const findDup = state.products.find((product) => product._id === action.payload._id);

      if(findDup && findDup.quantity! > 1) {
        findDup.quantity! -=1;
      } else {
        state.products = state.products.filter((product) => product._id!== action.payload._id);
      }
      state.total -= action.payload.price;
    },
    deleteCart: (state, action: PayloadAction<IProduct>) => {
      state.products = state.products.filter((product) => product._id!== action.payload._id);
      state.total -= action.payload.price * action.payload.quantity!;
    }
  },
});

export const { addToCart, deleteCart, removeSingle } = counterSlice.actions;

export default counterSlice.reducer;
