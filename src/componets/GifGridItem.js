import React from 'react'

//Este componente encapsula los datos que se van a presentar por cada gif.
export const GifGridItem = ({ title, url }) => {
    
    return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={url} alt={title}/>
        <p> {title} </p>
    </div>
  )
}
