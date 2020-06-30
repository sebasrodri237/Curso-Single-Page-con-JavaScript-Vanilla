//Funcion para obtener datos de la API
const API = 'https://rickandmortyapi.com/api/character/';
//Acceso a la API rick and morty

const getData = async (id) => {

    const apiURL = id ? `${API}${id}` : API;
    // Si existe/ tenemos un id entonces enviamos la url del personaje
    //identificado con ese id y en dado caso de que no exista/tenemos
    // un id enviamos la url para mostrar todos los personajes

    try{

        const response = await fetch(apiURL);
        //Llamado de la API
        const data = await response.json();
        //Convertir la respuesta en un JSON iterable
        
        return data;
    }
    catch(error){

        console.log('Fetch Error', error);
    }
}

export default getData;