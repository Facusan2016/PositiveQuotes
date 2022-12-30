import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingNotes } from '../../store/quotes/thunks';
import { IndividualQuote } from './IndividualQuote';

export const Quotes = () => {

  const { Allquotes } = useSelector(state => state.quotes)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingNotes());
  }, [])

  console.log(Allquotes)
  
  return (
    <div className='quoteDiv'>
      {

        Allquotes.length != 0 ? Allquotes.map(quote => (<IndividualQuote key={quote._id}{...quote}/> )) : <div className='noQuotes'>There are no quotes, write the first one. ;)</div>

      }
    </div>
  )
}
