import { useForm } from "../hooks/useForm"
import { postQuote } from "../helpers/postQuote";
import { useState } from "react";

const datos = { //Inicializo los valores que van a tener los inputs de la sección de añadir notas.
  name : '',
  quote : ''
}

export const AddQuote = () => {
  
  const {formState, name, quote, onInputChange, onResetForm} = useForm(datos); //Uso hook personalizado para manejar formularios.
  const [error, setError] = useState({ok : true}) //Creo un estado local para seleccionar si tengo errores en los campos ingresados.

  const onSubmit = async(e) =>{
    e.preventDefault();
    const errores = await postQuote(formState);  //Hago validación de los inputs ingresados traidos desde la respuesta del backend.
    setError(errores);

    if(errores.ok) 
    onResetForm();
  }

  const {errors} = error; // Extraigo el campo errors de error
 
  return (

    

    <form onSubmit={ onSubmit }>
      
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={onInputChange} placeholder="Enter your name..."/>
      <label className="error">{!error.ok && !!errors.name ? errors.name.msg : ''}</label> {/*Elijo condicionalmente si mostrar el error cometido */}

      <label>Quote:</label>
      <input type="text" name="quote" value={quote} onChange={onInputChange}  placeholder="Write something..."/>
      <label className="error">{!error.ok && !!errors.quote ? errors.quote.msg : ''}</label>

      <button className="changeColor" type="submit">Send
      </button>
      
    </form>
  )
}
