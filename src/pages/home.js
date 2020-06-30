import getData from '../utils/getData';

const home = async () => {
//Template para generar la vista de los personajes en el home (nuestra single page)
    const characters = await getData();
    //Como aqui no vamos a pasarle un id, hacemos el llamado para
    //la api estandar (todos los personajes)
    const view = `
        <div class = "characters">
            ${characters.results.map(character => `
                <article class = "characters-item">
                    <a href = "#/${character.id}/">
                        <img src = "${character.image}" alt = "name">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')} 
        </div>
    `;
    //Con el .join uniremos el resultado de cada iteracion
    //de los personajes
    return view;
}

export default home;
//exportamos la funcion para poder reutilizarla en otras partes si es necesario