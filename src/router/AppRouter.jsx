import { Navigate, Route, Routes } from 'react-router-dom';
import { AddQuote } from '../components/AddQuote';
import { Quotes } from '../components/QuotesComponents/Quotes'

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
