import { getQuotes } from "../../helpers/getQuotes"
import { setQuotes } from "./quotesSlice"

export const startLoadingNotes = () =>{

    return async(dispatch, getState) =>{
        const notes = await getQuotes();
        dispatch(setQuotes(notes))
    }
}