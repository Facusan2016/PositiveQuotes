export const postQuote = async({name, quote}) =>{

    const info = {
        name : name,
        quote : quote
    }

    const direction = `http://localhost:4001/api/save-quote`
    
    try {
        console.log(info);
        await fetch(direction,{ method: 'POST', headers:{'Content-Type': 'application/json'}, body: JSON.stringify(info)});
        console.log('Realizado con éxito')
    } catch (error) {
        console.log(error);
    }

}