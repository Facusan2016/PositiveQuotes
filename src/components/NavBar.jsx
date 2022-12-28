import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div id='headerContainer'>
        <div id='title'>
            Positive Quotes.
        </div>
        <nav>
            <Link className='link grow' to="/">Quotes</Link>
            <Link className='link grow' to="addQuote">Add quote</Link>
        </nav>
    </div>
  )
}
