import headerFunc from '../templates/header';
import home from '../pages/home';
import character from '../pages/character';
import error404 from '../pages/error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

//Importando todos los templates y pages, como buena practica no se coloca la extension

const routes = {

    '/': home,
    //Ruta hacia el home
    '/:id': character,
    //El id sera un valor dinamico, segun el id sera la ruta del personaje
    '/contact': 'Contact'
}
//Rutas que manejamos dentro de nuestra aplicacion

const router = async () => {

    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    //Establecer los templates hacia un elemento del DOM

    header.innerHTML = await headerFunc();

    let hash = getHash();
    //Obtenemos el id o seccion a la que se mueve el usuario
    let route = await resolveRoutes(hash);
    //Debo esperar mientras resolve obtener el hash y hacer la validacion
    let render = routes[route] ? routes[route] : error404;
    //Utilizamos la notacion [] en la que le pasamos el string que queremos
    //encontrar al objeto routes, si este se encuentra lo retornamos
    //sino es el caso nos dirigimos al error404
    content.innerHTML = await render();
}
//Manejador para mostrar los elementos segun la logica establecida
//obteniedno valores del navegador(un click a un enlace..etc)
//Lo establecemos con async para esperar que suceda sincronamente

export default router;