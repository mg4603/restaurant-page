const { userInfo } = require('os');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    modules:{
        rules:[
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            
        ],
    },
}