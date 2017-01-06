var path = require('path')

module.exports = {
  entry: {
    vuxDingzhi: './src/dingzhi/vuxDingzhi.js'
  },
  output: {
    path: path.resolve(__dirname, '../dingzhi_disk'),
    publicPath: './',
    //filename: 'dingzhivux.js',
    library: 'vux',
    libraryTarget: 'umd'
  },
  externals: {
    jquery: 'window.$',
    vue:'window.Vue'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
      'src': path.resolve(__dirname, '../src')
    }
  },
  stats: {
    children: false
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]'
        }
      }
    ]
  },
  vue: {
    loaders: {
      js: 'babel'
    }
  }
  /*eslint: {
   formatter: require('eslint-friendly-formatter')
   }*/
}
