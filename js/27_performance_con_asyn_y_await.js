// Performance y multiples async/await
// Este método se utiliza para realizar peticiones HTTP a un servidor y obtener datos de forma asíncrona.
const api_url = "https://dragonball-api.com/api/characters";
const api_url2 = "https://dragonball-api.com/api/planets";
const api_url3 = "https://jsonplaceholder.typicode.com/comments";

const consultarAPI = async () => {
    try{
        // Marca el tiempo de inicio de la función
        const inicio = performance.now()
        // Trata de obtener la respuesta de la API
        const response = await fetch(api_url)
        const data = await response.json()
        console.log(data)

        const response2 = await fetch(api_url2)
        const data2 = await response2.json()
        console.log(data2)

        const response3 = await fetch(api_url3)
        const data3 = await response3.json()
        console.log(data3)

        // Marca el tiempo de fin de la función
        const fin = performance.now()

        console.log("El resultado de la primer función es: ", fin - inicio, " ms" )
    }catch(error) {
        console.log(error.message)
    }
}
consultarAPI()


const consultarAPI2 = async () => {
    try{
        const inicio = performance.now()

        // Utiliza Promise.all para realizar las peticiones de forma simultánea
        // y esperar a que todas se completen antes de continuar
        // Esto mejora el rendimiento al evitar esperar a que cada petición se complete antes de iniciar la siguiente
        const [ response, response2, response3 ] = await Promise.all([
            fetch(api_url),
            fetch(api_url2),
            fetch(api_url3)
        ])

        // Convierte las respuestas a JSON
        // y espera a que todas se completen antes de continuar
        const [data, data2, data3] = await Promise.all([
            response.json(),
            response2.json(),
            response3.json()
        ])

      
        console.log(data)
        console.log(data2)
        console.log(data3)

        const fin = performance.now()

        console.log("El resultado de la segunda función es: ", fin - inicio, " ms" )
    }catch(error) {
        console.log(error.message)
    }
}
consultarAPI2()