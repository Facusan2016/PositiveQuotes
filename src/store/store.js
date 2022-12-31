import { configureStore } from '@reduxjs/toolkit';
import { quotesSlice } from './quotes/quotesSlice';

//Configuración del store de Redux

export const store = configureStore({
    reducer: {
        quotes : quotesSlice.reducer,
    }
})