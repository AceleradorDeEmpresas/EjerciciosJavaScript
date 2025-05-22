// Fetch API con Promises
// Este método se utiliza para realizar peticiones HTTP a un servidor y obtener datos de forma asíncrona.

// Los promises son objetos que representan la finalización (o el fracaso) de una operación asíncrona y su valor resultante. Un promise puede estar en uno de tres estados: 

// 1. Pending (pendiente): El estado inicial, ni cumplido ni rechazado.
// 2. Fulfilled (cumplido): La operación se completó con éxito.
// 3. Rejected (rechazado): La operación falló.


// URL de la API - Dragon Ball
const api_url = "https://dragonball-api.com/api/characters";

// Fetch API 
fetch(api_url)
    // Convertir la respuesta a JSON
    .then( (response) => {
        if(response.ok){
            return response.json()
        }
        throw new Error
    })
    .then(data => console.log(data))
    .catch(error => console.log("Error: " + error))