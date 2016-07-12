var isDebug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, 'app/js/main.ts'),
    output: {
        path: path.resolve(__dirname, 'bld'),
        filename: 'app.bundle.js'
    },
    devtool: isDebug ? "sourcemap" : null,

    plugins: isDebug ? [] : [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        
        // clean map files when build for production
        new CleanWebpackPlugin(['bld'], {
            root: path.resolve(__dirname),
            verbose: true,
            dry: false
        }),
        
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],

    watch: isDebug,

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: [
                    path.resolve(__dirname, 'app/js')
                ],
            }
        ]
    },
    resolve: {
        extensions: [
            '',
            '.js',
            '.ts'
        ]
    }

};