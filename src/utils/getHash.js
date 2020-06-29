//Esta funcion nos ayudara a manipular la url y desplegar el template 
//segun la url

//Usamos el objeto del DOM location, una interfaz de ubicacion(URL)
//del objeto al que esta vinculado.
//Realizar cambios en este implica realizarlos en el objeto al que se vincula.

const getHash = () => location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
//.hash es un DOMString(String en UTF-16, en JS se pasa auto a string)
//que contiene un # seguido por el fragmento identificador de la URL.
//Devuelve una estructura tipo #/n/ donde n es un entero positivo

//.slice permite eliminar un numero de elemento desde el principio de un string
//Lo utilizamos para eliminar el #

//.toLocaleLowerCase retorna el string en minusculas
//Garantizando que si el usuario cambio algo podamos obtener todo en minusculas

//.split divide un string en un array separando cada caracter, palabra, simbolo.. etc
//en un elemento
//Recibe / para eliminarlos y obtener un array con nuestro id (["",n,""])

//Posicion del id en nuestro array final [1]

//Sino encuentra ninguna ruta a la que se accede es que se esta en la raiz del proyecto

export default getHash;