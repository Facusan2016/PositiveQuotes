import React from 'react'
import { NavBar } from './components/NavBar'
import { AppRouter } from './router/AppRouter'

export const QuoteApp = () => {
  return(<>
    <NavBar/>
    <AppRouter/>
  </> 
  )
}
