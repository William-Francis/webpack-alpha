var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use:['style-loader','css-loader', 'sass-loader']
               /* use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: ['css-loader', 'sass-loader'],
                    publicPath: "/dist"
                })*/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'

            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 8088,
        hot: true,
        // stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'project from config 2',

            hash: true,
            template: './src/index.ejs'
        }),
     /*   new ExtractTextPlugin({
            filename: "app.css",
            disable: true,
            allChunks: true
        }),*/
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin()
    ]
}