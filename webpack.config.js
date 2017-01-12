module.exports = {
  entry: "./app/index.js",
  output: {
    filename: "public/bundle.js"
  },
  devServer: {
    contentBase: "./public"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}