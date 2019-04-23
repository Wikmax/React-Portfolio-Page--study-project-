module.exports = {
    entry: {
        index: ['babel-polyfill', './app/app.jsx','./scss/main.scss']
    },
    mode: "development",
    output: {   
    path: __dirname + '/build',
    filename: 'index.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader','css-loader','sass-loader'],
                test: /\.(scss)$/
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: './build',
        inline: true,
    }
}