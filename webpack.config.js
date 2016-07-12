var isDebug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, 'app/js/src/main.ts'),
    output: {
        path: path.resolve(__dirname, 'app/js/bld'),
        filename: 'app.bundle.js'
    },
    devtool: isDebug ? "sourcemap" : null,

    plugins: isDebug ? [] : [
        new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
        
        // clean map files when build for production
        new CleanWebpackPlugin(['app/js/bld'], {
            root: path.resolve(__dirname),
            verbose: true,
            dry: false
        }),
        
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ],

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: [
                    path.resolve(__dirname, 'app/js/src')
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