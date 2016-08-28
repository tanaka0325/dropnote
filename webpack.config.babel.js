import path from 'path';

module.exports = [
  {
    entry: path.resolve(path.join('src/index.jsx')),
    output: {
      path: path.resolve(path.join('src')),
      filename: 'bundle.js',
    },
    target: 'atom',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  },
];
