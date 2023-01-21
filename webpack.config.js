const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module:{
        rules:[
            { //to handle css
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { //to handle images
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            { //to handle fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            { //to handle csv or tsv archives
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            { //to handle xml
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
        ]
    }
};