//Funcion que toma la ruta ya resuelta (el id) y despliega el template
//correspondiente

const resolveRoutes = (route) => {

    //Sabemos que hay por mucho 1000 personajes entonces el id llegara no sera mayor
    //a 3 caracteres, aqui luego verificamos que llego un id y sino es el
    //caso devolveremos un / para volver a la raiz del proyecto
    if(route.length <= 3){

        //Esto nos permite verificar que llego no llega un valor aleatorio
        let validRoute = route === '/' ? route : '/:id'
        return validRoute
    }
    //Ruta necesaria para el above
    return `/${route}`
}

export default resolveRoutes;