const home = () => {
//Template para generar la vista de los personajes en el home (nuestra single page)
    const view = `
        <div class = "characters">
            <article class = "characters-item">
                <a href = "#/1/">
                    <img src = "image" alt = "name">
                    <h2>Name</h2>
                </a>
            </article>
        </div>
    `;

    return view;
}

export default home;
//exportamos la funcion para poder reutilizarla en otras partes si es necesario