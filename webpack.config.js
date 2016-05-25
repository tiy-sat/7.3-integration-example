module.exports = {
  entry: './app/modules/index.js',

  output: {
    filename: 'bundle.js',
    path: 'app/assets/javascripts/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
