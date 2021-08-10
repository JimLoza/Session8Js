const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')


module.exports = {
    entry: './src/js/index.js', //Lee el archivo js
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //Esto es para que procese archivos css
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{loader: 'file-loader'}]
            }
        ]
    },
    devServer: { //Configuracion del web dev server
        contentBase: path.resolve(__dirname, 'dist')  //De donde va a tomar el contenido, se toma el que compilo
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', //Genera un archivo html
            template: './src/index.html', //Toma este  generar el archivo html te basas en este otro archivo html
        })
    ]
}