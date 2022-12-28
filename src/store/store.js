import { configureStore } from '@reduxjs/toolkit';
import { quotesSlice } from './quotes/quotesSlice';

export const store = configureStore({
    reducer: {
        quotes : quotesSlice.reducer,
    }
})