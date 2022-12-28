import React from 'react'

export const IndividualQuote = ({quote, name}) => {
  return (
    <div>
        <h1>{quote}</h1>
        <h2>{name}</h2>
    </div>
  )
}
