const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpack = require('webpack');
module.exports = {
    mode:'development',
    devServer:{
        port:8002,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'microFrontEnd2',
            filename: 'remoteEntry.js',
            exposes: {
                './MicroFrontEnd2Index': './src/App.js',
            },
        }),
        new HtmlWebpackPlugin({
            template:
                './public/index.html'
        }),
    ],
    module:{
        rules: [
            {
                test: /\.js?$/,
                loader:
                    'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                },
            },
        ],
    },
};