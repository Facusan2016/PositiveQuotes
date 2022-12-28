import axios from "axios";

export const postQuote = async({name, quote}) =>{

    const info = {
        name : name,
        quote : quote
    }

    const direction = `http://localhost:4001/api/save-quote`
    
    try {

        const resp = await axios.post(direction,info);
        console.log(resp);

    } catch (error) {
        console.log(error.response.data)
        return error.response.data.errors;
    }

}