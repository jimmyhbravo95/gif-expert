import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {


  const [inputValue, setinputValue] = useState('')
  
  const onChangeInput = event => {
    setinputValue(event.target.value)
  }

  const onSubmit = (event) => {
    event.preventDefault() 
    if( inputValue.trim().length <=1 ) return
    // setCategories((Categories) => [...Categories,inputValue])
    onNewCategory(inputValue.trim())
    setinputValue('')

  }

  
  return (
    <form 
      onSubmit={onSubmit}
    >
      <input
        type = "text"
        placeholder="Buscar gifs"
        onChange={onChangeInput}
        value = {inputValue}
      />
    </form>
  )}
