//Creamos esto archivo en templates ya que no es una pagina 
//sino una parte de ellas
const header = () => {
//Template del header que contiene logo y barra de navegacion
    const view = `

    <div class="header-main">
        <div class="header-logo">
            <h1>
                <a href="/"><!-- / nos lleva a la raiz del proyecto -->
                    100tifi.co
                </a>
            </h1>
        </div>
        <div class="header-nav">
            <a href="#/about/"><!-- Se dirige hacia about -->
                About
            </a>
        </div>
    </div>
    `;

    return view;
}

export default header;