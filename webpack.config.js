var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    devtool: 'source-map',
    // devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
        './src/index'
    ],
    output: {
        path: path.join(__dirname, './dest'),
        filename: 'bundle.js',
        publicPath: 'http://localhost:3000/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEVTOOLS__: true
        })
    ],
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/
            }]
    },
    failOnError: false,
    watch: true,
    keepalive: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: true
    },
    inline: false
};
