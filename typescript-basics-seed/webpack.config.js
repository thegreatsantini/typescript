var path = require('path');

module.exports = {
    entry: './src/app.ts',
    "esModuleInterop": true,
    resolve: {
        extensions: ['.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        rules: [
            { test: /.ts$/, loader: 'ts-loader' }
        ]
    },
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
    }
};
