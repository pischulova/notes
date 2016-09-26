module.exports = {
 entry: './src/app.js',
 output: {
   path: './bin',
   filename: 'app.bundle.js',
 },
 // debug: true,
 devtool: 'source-map',
 module: {
   loaders: [
   { test: /\.js$/,
     exclude: /node_modules/,
     loader: 'babel-loader'
   },
   {  test: /\.handlebars$/, 
    loader: "handlebars-loader" 
  }]
}
}