import React from 'react'

export const IndividualQuote = ({date, quote, name}) => {
  return (
    <div className='quote'>
        <div className='quoteName'>{name}</div>
        <div className='quoteBody'>"{quote}"</div>
        <div className='quoteDate'>{date}</div>
    </div>
  )
}
