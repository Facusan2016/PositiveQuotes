import { createSlice } from '@reduxjs/toolkit';

export const quotesSlice = createSlice({
   name: 'quotes',
   
   initialState: {
      Allquotes : [],
   },

   reducers: {
      
      setQuotes : (state, action) =>{
         state.Allquotes = action.payload;
      }
   }
});


// Action creators are generated for each case reducer function
export const { setQuotes } = quotesSlice.actions;