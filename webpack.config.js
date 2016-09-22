var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');
var appEnv = process.env.NODE_ENV || 'development';
var webpack  = require('webpack');
let coverageEnabled = process.env.COVERAGE_ENABLED === 'true';
let babelPlugins = ['transform-runtime'];
var ExtractTextPlugin = require('extract-text-webpack-plugin');
let extractCSS = new ExtractTextPlugin('[name].[hash].css');


if (coverageEnabled) {
    babelPlugins.push('__coverage__');
}

var config = {
    entry: './client/src/boot.js',
    output: {
        path: __dirname + '/client/dist',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            // load and compile javascript
            {test: /\.js$/, exclude: /node_modules/, loader: "babel",
                query: {
                    presets: ['es2015', 'stage-3', 'angular2'],
                    plugins: babelPlugins
                }},
            // load css and process less
            {test: /\.css$/, loader: extractCSS.extract('style','css')},

            // load JSON files and HTML
            {test: /\.json$/, loader: "json"},
            {test: /\.html$/, loader: 'raw?minimize=false'},

            // load images (inline base64 URLs for <=8k images)
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},

            {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
        ],
        noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ]
    },

    // inject js bundle to index.html
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/src/index.html',
            inject: 'body',
            minify: false
        }),
        extractCSS
    ],

    // webpack dev server configuration
    devServer: {
        contentBase: "./client/src",
        noInfo: false,
        hot: false,
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000',
                secure: false
            }
        },
        host: '0.0.0.0'
    }
};

if (appEnv === 'development') {
    //config.devtool = '#inline-source-map';
}

if (appEnv === 'production') {
    config.plugins.push(
        // Remove build related folders
        new CleanPlugin(['dist'])
    );
}

module.exports = config;