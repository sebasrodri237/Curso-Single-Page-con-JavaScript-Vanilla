//Este a diferencia de header si es una pagina
import getHash from '../utils/getHash';
import getData from '../utils/getData';

const character = async () => {
//Aqui se construye la vista de un solo personaje al darle click
    const id = getHash();//Obtenemos el id
    const character = await getData(id);
    const view = `
    
    <div class="characters-inner">
        <article class="characters-card">
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
        <article class="characters-card">
            <h3>Episodes:<span>${character.episode.length}</span></h3>
            <h3>Status:<span>${character.status}</span></h3>
            <h3>Species:<span>${character.species}</span></h3>
            <h3>Gender:<span>${character.gender}</span></h3>
            <h3>Origin:<span>${character.origin.name}</span></h3>
            <h3>Last Location:<span>${character.location.name}</span></h3>
        </article>
    </div>
    `;

    return view;
}

export default character;