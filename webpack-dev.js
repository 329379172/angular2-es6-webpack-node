/**
 * Created by linfeiyang on 16-9-26.
 */
var config = require('./client/config/webpack.config');
var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var complier = webpack(config);

// webpack dev server configuration
var devServer = {
    contentBase: "./client/src",
    noInfo: false,
    hot: false,
    proxy: {
        '/api/*': {
            target: 'http://localhost:3000',
            secure: false
        }
    }
};
var server = new WebpackDevServer(complier, devServer);

server.listen(3001, '0.0.0.0', () => {
    console.log('listening 3001');
});

