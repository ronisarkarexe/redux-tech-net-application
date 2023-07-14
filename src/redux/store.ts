import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'
import productSlice from './features/product/productSlice'
import { api } from './api/apiSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productSlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch