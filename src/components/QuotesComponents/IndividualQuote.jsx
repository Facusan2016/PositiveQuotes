import React from 'react'

//Componente al que se le pasan parámetros y los organiza en forma de quote.

export const IndividualQuote = ({date, quote, name}) => {
  return (
    <div className='quote'>
        <div className='quoteName'>{name}</div>
        <div className='quoteBody'>"{quote}"</div>
        <div className='quoteDate'>{date}</div>
    </div>
  )
}
