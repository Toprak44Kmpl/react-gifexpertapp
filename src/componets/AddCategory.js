import React, { useState } from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('') //Undefined

  const handleInputChange = (e) => {
      setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length>1){
        setCategories(cats => [inputValue, ...cats,])
        setInputValue('')
    }
    
    //console.log('Submit Hecho')
    
  }

  //La parte de la entrada, en la que ponemos el nombre de la categoría de gifs que recibimos.
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            //Cuando hay un enter se doispara handleInputChange.
            onChange={ handleInputChange }
        />
    </form>    
  )
}

//Nos asegura que la entrada debe ser requerida.
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}