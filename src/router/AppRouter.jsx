import { Navigate, Route, Routes } from 'react-router-dom';
import { AddQuote } from '../components/AddQuote';
import { Quotes } from '../components/QuotesComponents/Quotes'

//Usando react-router-dom inicializo la configuración inicial de rutas.

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/*' element={<Quotes/>}/>
            <Route path='addQuote' element={<AddQuote/>}/>
        </Routes>
    </>
  )
}
