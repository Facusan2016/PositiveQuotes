import axios from "axios";

export const getQuotes = async() =>{

    const direction = "https://positivequotesbackend-production.up.railway.app/api/select-all-quotes"
    try {

        const response = await axios.get(direction);
        return response.data.resp

    } catch (error) {
        
        console.log(error);
    }

}