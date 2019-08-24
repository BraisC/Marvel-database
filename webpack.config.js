const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  //Al poner el scss en el entry no hace falta importarlo en index.js
  entry: ['./src/js/index.js', './src/sass/main.scss'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  devServer: {
    contentBase: './dist', //La carpeta desde donde webpack servirá nuestros archivos, en esta caso, dist, los creará al vuelo sin guardarlos en disco
    open: 'Firefox', //Le indicamos que al crear el servidor lo abra automáticamente con firefox
  },
  plugins: [
    //Los plugins nos permiten realizar procesamiento de input files
    new HtmlWebpackPlugin({
      //Queremos que al empaquetar nuestros archivos js, copie el html de src en dist e incluya el <script> a nuestro bundle.js
      filename: 'index.html', //Archivo de salida, opcional
      template: './src/index.html', //Archivo de entrada
    }),
    new Dotenv(), //Para poder usar el archivo .env
    new CopyPlugin([{ from: 'public' }]),
  ],
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src/js',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // creates style nodes from JS strings
          'css-loader', // translates CSS into CommonJS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
    ],
  },
};
