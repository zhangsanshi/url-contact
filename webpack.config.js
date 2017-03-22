var webpack = require('webpack');
var config = {
    entry: './index.js',
    output: {
        path: 'dist/',
        filename: 'url-contact.js',
        sourceMapFilename: 'url-contact.map',
        library: 'urlContact',
        libraryTarget: 'umd'
    },
    node: {
        process: false
    },
    devtool: 'source-map',
    eslint: {
        configFile: '.eslintrc'
    },
    module: {
        preLoaders: [{
            test: /\.js$/,
            loader: "eslint-loader",
            exclude: /node_modules/,
        }],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel",
            query: {
                presets: ['es2015'],
                plugins: ['transform-runtime']
            },
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
};
module.exports = config;


