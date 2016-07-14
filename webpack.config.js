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
            new CleanWebpackPlugin(['bld/*.map'], {
                root: path.resolve(__dirname),
                verbose: true,
                dry: false
            }),

            new webpack.optimize.UglifyJsPlugin({
                sourcemap: false,
                compress: {
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true
                },
                mangle: {
                    except: ['$super', '$', 'exports', 'require']
                },
                output: {
                    comments: false
                }
            })
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
            },
            {
                test: /\.html$/,
                loader: 'html-loader?minimize=false',
                include: [
                    path.resolve(__dirname, 'app/js')
                ],
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
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