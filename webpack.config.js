var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'app/js/src/main.ts'),
    output: {
        path: path.resolve(__dirname, 'app/js/bld'),
        filename: 'app.bundle.js'
    },
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