import router from './routes';

window.addEventListener('load', router);
//Para cuando se carga por primera vez la pagina
//hacemos el callback

window.addEventListener('hashchange', router);
//Para cuando se modifiquen las rutas o mejor dicho el usuario se mueva
//entre personajes/paginas