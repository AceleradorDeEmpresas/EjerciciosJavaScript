// Fetch API con Async/Await
// Este método se utiliza para realizar peticiones HTTP a un servidor y obtener datos de forma asíncrona.
// Los async/await son una forma más moderna y legible de trabajar con promesas en JavaScript.
// Los async/await permiten escribir código asíncrono de manera más similar al código síncrono, lo que facilita su comprensión y mantenimiento.

// URL de la API - Dragon Ball
const api_url = "https://dragonball-api.com/api/characters";

// Fetch API 
// fetch(api_url)
//     // Convertir la respuesta a JSON
//     .then( (response) => {
//         if(response.ok){
//             return response.json()
//         }
//         throw new Error
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log("Error: " + error))

const consultarAPI = async () => {
    try{
        // Trata de obtener la respuesta de la API
        const response = await fetch(api_url)
        if(!response.ok) {
            throw new Error('Error en la respuesta de la API')
        }
        const data = await response.json()
        console.log(data)
    }catch(error) {
        console.log(error.message)
    }
}
consultarAPI()