import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div id='headerContainer'>
        <div id='title'>
            Positive Quotes.
        </div>
        <nav>
            <Link className='link' to="/">Ver Notas</Link>
            <Link className='link' to="addQuote">Agregar Nota</Link>
        </nav>
    </div>
  )
}
