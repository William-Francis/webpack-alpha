var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.scss$/, use: ['style-loader','css-loader', 'sass-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'project from config',
            minify: {
                collapseWhitespace: true
            },
            hash: true,
            template: './src/index.ejs'
        }
        )]
}