module.exports = {
    entry: {
        "app": "./public/src/app.js",
        "babel-app": "./public/src/babel-app.js"
    },
    output: {
        path: './public/javascripts',
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", query: {presets:['es2015']}}
        ]
    }
}
