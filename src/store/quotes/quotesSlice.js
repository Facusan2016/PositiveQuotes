import { createSlice } from '@reduxjs/toolkit';

export const quotesSlice = createSlice({
   name: 'quotes',
   
   initialState: {
      Allquotes : [], //Estado inicial del arreglo que va a contener todas las quotes.
   },

   reducers: {
      
      setQuotes : (state, action) =>{
         state.Allquotes = action.payload; //Funcion para setear las notas de manera global en el Store
      }
   }
});

export const { setQuotes } = quotesSlice.actions;