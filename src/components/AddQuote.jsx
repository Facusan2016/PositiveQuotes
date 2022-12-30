import { useForm } from "../hooks/useForm"
import { postQuote } from "../helpers/postQuote";
import { useState } from "react";

const datos = {
  name : '',
  quote : ''
}

export const AddQuote = () => {
  
  const {formState, name, quote, onInputChange, onResetForm} = useForm(datos);
  const [error, setError] = useState({ok : true})

  const onSubmit = async(e) =>{
    e.preventDefault();
    const errores = await postQuote(formState);
    setError(errores);

    if(errores.ok)
    onResetForm();
  }

  const {errors} = error;
 
  return (

    

    <form onSubmit={ onSubmit }>
      
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={onInputChange} placeholder="Enter your name..."/>
      <label className="error">{!error.ok && !!errors.name ? errors.name.msg : ''}</label>

      <label>Quote:</label>
      <input type="text" name="quote" value={quote} onChange={onInputChange}  placeholder="Write something..."/>
      <label className="error">{!error.ok && !!errors.quote ? errors.quote.msg : ''}</label>

      <button className="changeColor" type="submit">Send
      </button>
      
    </form>
  )
}
