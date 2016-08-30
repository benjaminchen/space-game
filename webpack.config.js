var path = require('path');

module.exports = {
    entry: [
        path.resolve(__dirname, 'main.js')
    ],

    output: {
        path: path.resolve(__dirname, 'release'),
        filename: 'space.min.js'
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel']
        }]
    }
};