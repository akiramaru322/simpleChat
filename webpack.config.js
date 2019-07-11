const path  = require('path');
const { VueLoaderPlugin }   = require("vue-loader");
const htmlWebpackPlugin     = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    }
    ,
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
            ,
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
            ,
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
    ,
    performance: {
        hints: false
    }
    ,
    devServer: {
        historyApiFallback: true,
        noInfo: false,
        overlay: true
    }
    ,
    plugins: [
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}