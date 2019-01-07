const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: [
        'webpack/hot/dev-server',
        './src/entry.js'
    ],
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    context: __dirname,
    target: 'web',
    devServer: {
        proxy: {},
        contentBase: path.join(__dirname, 'public'),
        hot: true,
        port: 3000
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader?cacheDirectory=true"
        }]
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin(
            Object.assign({}, {
                inject: true,
                template: __dirname + '/public/index.html',
            })
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.HashedModuleIdsPlugin()
    ]
}