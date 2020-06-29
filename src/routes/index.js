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
    
}
//Manejador para mostrar los elementos segun la logica establecida
//obteniedno valores del navegador(un click a un enlace..etc)
//Lo establecemos con async para esperar que suceda sincronamente

export default router;