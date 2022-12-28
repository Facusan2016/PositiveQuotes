import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getQuotes } from '../../helpers/getQuotes'
import { startLoadingNotes } from '../../store/quotes/thunks';
import { IndividualQuote } from './IndividualQuote';

export const Quotes = () => {

  const { Allquotes } = useSelector(state => state.quotes)
  const dispatch = useDispatch();

  console.log(Allquotes);

  useEffect(() => {
    dispatch(startLoadingNotes());
  }, [])
  
  return (
    <div>
      {
        Allquotes.map(quote => (<IndividualQuote key={quote._id}{...quote}/> ))
      }
    </div>
  )
}
