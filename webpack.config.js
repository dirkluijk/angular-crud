module.exports = {
    entry: './src/app.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'ngtemplate!html'
            },
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            }
        ]
    }
};