const path = require('path');//permite acceder hacia donde nos movemos en las carpetas
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Del paquete de webpack que instalamos el plugin para trabajar con html

module.exports = {

    entry: './src/index.js',
    //Archivo de entrada u origen a convertir
    output: {//Salida al convertir el archivo origen
        //Donde vamos a poner el proyecto compilado y listo para produccion
        path: path.resolve(__dirname, 'dist'),
        //Ruta de la carpeta con archivos convertidos, lo colocamos asi
        //porque no acepta rutas relativas sino absolutas
        filename: 'main.js'
        //Nombre del archivo convertido
    },

    resolve:{
    
        extensions: ['.js'],
    },//Extensiones del proyecto

    module: {
        rules: [
            {
                test: /\.js?$/,//Indicar webpack puede testear/procesar archivos 
                // que terminen en .js
                exclude: /node_modules/,//Excluir la carpeta node modules
                use: {
                    loader: 'babel-loader',//Indicamos los loader que descargamos
                }
            }
        ]
    },//Crear modulo con las reglas para trabajar, en rste caso de babel para
    //ser compatibles con todos los navegadores

    plugins: [//plugins a utilizar para que pueda convertir archivos html
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                //Codigo origen html, si acepta rutas relativas
                filename: './index.html',
                //Nombre codigo salida convertido
            }
        )
    ]
}
//Creamos un modulo