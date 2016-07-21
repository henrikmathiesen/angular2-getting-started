var isDebug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');
//var CopyWebpackPlugin = require('copy-webpack-plugin');


// I had an idea of placing index.html in app folder and copy it to build folder on build
// And then serving bld folder with http-server bld -p 1337, but that messed up the api calls to api folder
// (since it was not served) So we dont do that
// var envSharedplugins = {
//     copyHtml: new CopyWebpackPlugin([
//         {
//             from: 'app/index.html'
//         }
//     ])
// }

module.exports = {

    entry: path.resolve(__dirname, 'app/js/main.ts'),
    output: {
        path: path.resolve(__dirname, 'bld'),
        filename: 'app.js'
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

            new webpack.optimize.DedupePlugin(),

            // sending in -p to webpack (see package.json), does some minification, but this does more
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
                loader: 'ts',
                include: [
                    path.resolve(__dirname, 'app/js')
                ],
            },
            {
                test: /\.html$/,
                loader: 'html?minimize=false',
                include: [
                    path.resolve(__dirname, 'app/js')
                ],
            },
            {
                test: /\.less$/,
                // sending in -p to webpack (see package.json), does css minification, but we do it here as well, maybe unnecessary?
                loader: isDebug ? 'css!postcss!less' : 'css?minimize!postcss!less',
                include: [
                    path.resolve(__dirname, 'app/js')
                ]
            }

        ]
    },
    postcss: [
        autoprefixer({ browsers: ['last 3 versions'] })
    ],
    resolve: {
        extensions: [
            '',
            '.js',
            '.ts'
        ]
    }

};