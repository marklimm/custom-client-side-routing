const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, './app/js'),
    entry: {
        app: './script.js',
    },
    //entry: [
    //    "webpack-dev-server/client?http://127.0.0.0:8080",
    //    "webpack/hot/only-dev-server",
    //    "./script.js"
    //],
    output: {
        path: path.resolve(__dirname, './public'),
        //publicPath: '/js/',  I guess publicPath is supposed to be a fake directory that doesn't actually exist
        filename: 'js/[name].bundle.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, './public'),  // New

        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },

    resolve: {
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js',
            js: path.resolve( __dirname, 'app', 'js')
        },

        //root: path.resolve('./app/js'),
        extensions: ['.js']
    }

};
