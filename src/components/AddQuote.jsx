import { useForm } from "../hooks/useForm"
import { postQuote } from "../helpers/postQuote";

const datos = {
  name : '',
  quote : ''
}

export const AddQuote = () => {
  
  const {formState, name, quote, onInputChange, onResetForm} = useForm(datos);
  const onSubmit = (e) =>{
    e.preventDefault();
    postQuote(formState);
    onResetForm();
  }


  return (
    <form onSubmit={ onSubmit }>
      
      <label>Name:</label>
      <input type="text" name="name" value={name} onChange={onInputChange} placeholder="Enter your name..."/>

      <label>Quote:</label>
      <input type="text" name="quote" value={quote} onChange={onInputChange}  placeholder="Write something..."/>

      <button className="changeColor" type="submit">Send
      </button>
      
    </form>
  )
}
