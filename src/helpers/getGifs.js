import React from "react";


//getGifs realiza una petición http y recolecta 10 gifs y los retorna finalmente en gifs.
export const getGifs = async(category) => {
    
    //encodeURI limpia el formato de entrada.
    //category tiene el nombre de la categoría a consultar.
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=zReSsECf8pvc38m1iV1U57INX5t8jBf1`
    const resp = await fetch( url );
    //En data obtenemos la información de un json según la consulta.
    const {data} = await resp.json();

    //Por medio de map, podemos reacomodar los datos de json en un modelo de datos soncillo en gifs.
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    //Finalmente retornamos todos los gifs y sus características.
    return gifs;

}