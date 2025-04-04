const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
        port: 3000,
    },
    plugins: [
        ...['index', 'page2'].map(name => new HtmlWebpackPlugin({
            template: `./src/${name}.html`,
            filename: `${name}.html`,
        })),
        new CopyPlugin({
            patterns: [
                { from: 'src/lang', to: 'lang' },
                { from: 'src/assets/svg', to: 'assets/svg' }
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    }
};
