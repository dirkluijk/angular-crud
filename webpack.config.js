module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loaders: ['ng-annotate', 'babel?presets=es2015']
            },
            {
                test: /\.html$/,
                loader: 'ngtemplate!html'
            }
        ]
    }
};