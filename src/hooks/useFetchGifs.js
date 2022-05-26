import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        //Como getGifs es async, entonces es una promesa, para ello usamos then.
        getGifs( category )
            .then( imgs => {
                //Si fue exitoso el getGifs, asignamos esos valores al state, así como también cambiamos el valor de 
                //loading, que nos dice si las peticiones están en espera o ya están recibidos.
                setState({
                    data: imgs,
                    loading: false
                });
            })
        
    },[category])

    return state;
}