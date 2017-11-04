const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
            { test: /\.jsx?$/, use: ['babel-loader'], exclude: [/node_modules/, /public/] },
            { test: /\.jsx?$/, loader: 'eslint-loader', include: path.resolve(process.cwd(), 'src'), enforce: 'pre' }
        ]
    }
};
