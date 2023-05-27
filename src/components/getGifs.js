export const getGifs = async(category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ROXk4ANdI076oAQ7M54m6OL5eo5a4Iez&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()

    console.log('tipo de dato')
    console.log(typeof(data))

    const gifs = data.map(img =>({ // de un objeto gigante que es la respuesta con 10 gifs y metadatos. lo partio en 10 miniobjetos con sus caracteristicas dentro de un arreglo con el map, entonces el map funca para objetos tambien.
        id : img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    console.log(gifs)
    return gifs
}