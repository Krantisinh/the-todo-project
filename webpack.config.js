const path = require('path');
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: [
        './src/index.ts',
        './src/style.scss'
    ],
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin(),
        miniCSSExtractPlugin()
    ]
};

function miniCSSExtractPlugin() {

    return new MiniCssExtractPlugin({
        filename: '[name].[chunkhash].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
    });
}

function htmlWebpackPlugin() {

    return new HtmlWebpackPlugin({
        template: './src/index.html'
    });
}

module.exports = config;
