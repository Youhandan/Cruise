const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry:{
        index: __dirname + '/src/index.js',
        vendor: ['react', 'react-dom', 'lodash']
    } ,
    output: {
        path: __dirname + '/build',
        filename: '[name]-[hash].js',
        publicPath: '',
        chunkFilename: '[name]-[hash].js'
    },

    devServer: {
        contentBase: "./public/",
        historyApiFallback: true,
        inline: true,
        port: 8080,
        hot: true
    },

    module: {
        rules: [{
            test: /(\.js|\.jsx)$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: [
                        "es2015", "react", "stage-3"
                    ]
                }
            },
            exclude: /node_modules/
        },{
            test: /(\.less)$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "less-loader"]}),
            exclude: /node_modules/
        }]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/src/template.html'
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     comments: false,
        //     compress: {
        //         drop_console: true,
        //         collapse_vars: true,
        //         reduce_vars: true
        //     }
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new ExtractTextPlugin('[name]-[hash].css'),
        new webpack.NamedModulesPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(['build'], {
            root: __dirname,
            verbose: true,
            dry: false
        })
    ]
}

module.exports = config;