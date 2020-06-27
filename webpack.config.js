const path = require('path');//permite acceder hacia donde nos movemos en las carpetas
const HtmlWebpackPlugin = require('html-webpack-plugin');
//Del paquete de webpack que instalamos para trabajar con html

module.exports = {

    entry: './src/index.js',
    //punto entrada
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },//Donde vamos a poner el proyecto compilado y listo para produccion
    resolve:{
        extensions: ['.js'],
    },//Extensiones del proyecto
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,//Excluir la carpeta node modules
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },//Crear modulo con las reglas para trabajar, ene ste caso de babel para
    //ser compatibles con todos los navegadores
    plugins: [//plugins a utilizar
        new HtmlWebpackPlugin([
            {
                inject: true,
                template: '.public/index.html',
                filename: './index.html',
            }
        ])
    ]
}
//Creamos un modulo