var path = require('path')
var config = require('../config')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

var env = process.env.NODE_ENV
// check env & config/index.js to decide whether to enable CSS source maps for the
// various preprocessor loaders added to vue-loader at the end of this file
var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
    app: './src/main.js',
//    xlsx: './static/dist/js/xlsx.core.js'
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'common': path.resolve(__dirname, '../src/common'),
      'components': path.resolve(__dirname, '../src/components'),
      //'jszip': 'xlsx/jszip.js',
      //'xlsx':path.resolve(__dirname, '../static/dist/js/xlsx.core.js')
    }
  },
  resolveLoader: {
    fallback: [path.join(__dirname, '../node_modules')]
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
	
      //{
       // test: /xlsx\.core\.js$/,
        //loader: 'babel',
	//   include: /(node_modules|bower_components)/,
        //include: projectRoot,
        //exclude: /node_modules/,
	//query: {compact: false,sourceType:"script"}
     //},
       //{
        //test: /tableexport\.js$/,
        //loader: 'script',
        //include: projectRoot,
        //exclude: /node_modules/,
       // query: {compact: false,sourceType:"script"}
      //},
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
        query: {compact: false,sourceType:"module"}
      },
	
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ],
    //noParse: [/\.\.\/static\/dist\/js\/xlsx\.core\.jss/],
  },
  vue: {
    loaders: utils.cssLoaders({ sourceMap: useCssSourceMap }),
    postcss: [
      require('autoprefixer')({
        browsers: ['last 2 versions']
      })
    ]
  },
  externals: {
    //'UE': 'UE',
      //'xlsx':'xlsx'//path.resolve(__dirname, '../static/dist/xlsx.core.js')
      //'tableexport':'tableexport'
      // 'xlsx':'xlsx'
      
  }
   ,
    node: {
	//fs: 'empty'
    },
    target:"web"
}
