const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

const output = path.join(__dirname, './target/static');

module.exports = {

    context: path.resolve(__dirname, './'),

    entry: [
        './src/index.js'
    ],

    output: {
        path: output,
        filename: "build.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    plugins: ['transform-decorators-legacy'],
                    presets: ['es2015', 'react', "stage-1"]
                }
            }
        ]
    },

    resolve: {
        modulesDirectories: [
            'src',
            'node_modules'
        ],
        alias: {
            '/src': './src'
        },
        extensions: ['', '.json', '.js', '.jsx']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            inject: 'body',
            chunksSortMode: 'dependency'
        })
    ],


    devtool: "cheap-inline-module-source-map"

};