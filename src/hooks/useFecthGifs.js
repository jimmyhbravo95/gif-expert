import { useState,useEffect } from "react"
import {getGifs} from '../components'

// un hook no es mas que una funcion que retorna algo.

export const useFecthGifs = (category) => {

    const [newImages,setImages] = useState([])
    const [isLoading,setIsLoading] = useState( true )

    useEffect(() => {
        getGifs (category)
        .then(newImages => setImages(newImages))
        .then(setIsLoading(false))
    }, [])  

  return {
    newImages,
    isLoading

  }
}
