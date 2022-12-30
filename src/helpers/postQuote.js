import axios from "axios";

export const postQuote = async({name, quote}) =>{

    const info = {
        name : name,
        quote : quote
    }

    const direction = `https://positivequotesbackend-production.up.railway.app/api/save-quote`
    
    try {

        const resp = await axios.post(direction,info);
        return resp.data;

    } catch (error) {

        return error.response.data;
    }

}