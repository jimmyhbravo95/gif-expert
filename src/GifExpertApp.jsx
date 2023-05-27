import { useState } from "react"
import { AddCategory,GifGrid } from './components'




export const GifExpertApp = () => {
    // quiero mantener el listado
    // Si quiero mantener o almacenar informacion y eso cambia el HTML
    // deberiamos pensar automaticamente en Hooks para mantener el estado

    const [Categories, setCategories] = useState(['DragonBall'])

    
    const onAddCategory = (NewCategory) => {

        if (Categories.includes(NewCategory)) return
        //setCategories([...Categories,inputValue])
        console.log(NewCategory)
        setCategories([...Categories,NewCategory])
        //console.log(typeof(Categorias))
    }



  return (
    <>

        <h1>Gif Expert App</h1>

        <AddCategory //setCategories = {setCategories}
        onNewCategory = {onAddCategory}
        ></AddCategory>

        {
        Categories.map( (x) => 
            (
            <GifGrid key = {x} category = {x}/>
            ) //  
            )  
        }

    </>
  )
}
