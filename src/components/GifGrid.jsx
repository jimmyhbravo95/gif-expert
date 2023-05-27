/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
//import {getGifs} from './getGifs'
import {GifGridItem} from './GifGridItem'
import { useFecthGifs } from '../hooks/useFecthGifs'

// eslint-disable-next-line react/prop-types



export const GifGrid = ({ category }) => { // 


    const {newImages,isLoading} = useFecthGifs(category);    

  return (
    <>
        {
            isLoading && (<h1>Cargando Imagenes...</h1>)
        }

        <h1>{category}</h1> {/*category*/}

        <div className='card-grid'>{
            newImages.map( ( x ) => (
            <GifGridItem 
                key = {x.id}
                {...x}
            />
            ))}
        </div>
    </>
  )
}
