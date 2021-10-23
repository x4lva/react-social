module.exports = {
    exclude: [
        /\.html$/,
        /\.(js|jsx)$/,
        /\.css$/,
        /\.json$/,
        /\.svg$/,
        /\.scss$/,
    ],
    test:  /\.scss$/,
    loaders: ['style', 'css', 'sass']
}