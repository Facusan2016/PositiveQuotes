import { getQuotes } from "../../helpers/getQuotes"
import { setQuotes } from "./quotesSlice"

//Función asíncrona que trae las entradas del backend y luego las setea de manera global en el Store 

export const startLoadingNotes = () =>{

    return async(dispatch, getState) =>{
        const notes = await getQuotes();
        dispatch(setQuotes(notes))
    }
}