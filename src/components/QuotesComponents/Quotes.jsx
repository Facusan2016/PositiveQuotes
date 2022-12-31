import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingNotes } from '../../store/quotes/thunks';
import { IndividualQuote } from './IndividualQuote';

export const Quotes = () => {

  const { Allquotes } = useSelector(state => state.quotes) //Traigo del Store todas las quotes.
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoadingNotes()); //Traigo las notas de la base de datos.
  }, [])

  return (
    <div className='quoteDiv'>
      {

        Allquotes.length != 0 ? Allquotes.map(quote => (<IndividualQuote key={quote._id}{...quote}/> )) : <div className='noQuotes'>There are no quotes, write the first one. ;)</div>
        //Elijo que componente renderizar dependiendo de si tengo notas disponibles o si no tengo ninguna
      }
    </div>
  )
}
