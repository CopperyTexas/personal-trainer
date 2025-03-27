const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.jsx', // основной файл входа
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '~': path.resolve(__dirname, 'src')
        }// чтобы webpack мог импортировать без указания расширения
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader', // обработка JSX через Babel
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',   // вставляет стили в DOM
                    'css-loader',     // позволяет импортировать CSS-файлы
                    'postcss-loader', // обрабатывает CSS через PostCSS (и Tailwind)
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            // можно добавить правила для изображений, шрифтов и т.д.
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // шаблон HTML
        }),
    ],
    devServer: {
        historyApiFallback: true, // для поддержки маршрутизации в React
        port: 3000,
        open: true,
    },
};