import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  
    //En data recibimos toda la información de los gifs solicitados y se guarda en la variable images.
  const { data:images, loading } = useFetchGifs( category );



  return (
    <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>
        {/* Con el and, si loading es true, entonces presentamos el mensaje "Loading" en pantalla. */}
        {loading && <p className='animate__animated animate__flash'>Loading</p>}
        <div className='card-grid' >
            {
                //Por cada imagen que tenemos, mandamos sus propiedades a GifGridItems, el key es obligatorio 
                //aunque no se reciba de parámetro en el componente.
                images.map( img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
    </>
  )
}

//zReSsECf8pvc38m1iV1U57INX5t8jBf1

