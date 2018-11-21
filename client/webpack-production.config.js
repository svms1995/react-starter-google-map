const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');

/**
 * Setup environment File and Veriables
 */
// const envConfig = dotenv.parse(fs.readFileSync('.env.'+process.env.ENV_FILE));
// for (var k in envConfig) {
//   process.env[k] = (envConfig[k] === 'true' ) ? true : ( envConfig[k] === 'false' ? false : envConfig[k] );
// }

const port = process.env.PORT || 3000;
const publicURl = process.env.DOMAIN + process.env.DOMAIN_PATH;
const isBuild = process.env.BUILD === 'true' ? true : false;
const isDev = process.env.BUILD === 'true'? false : true;
const isSourceMap = isDev;


module.exports = {
  mode: 'production',  
  entry: { app: [process.env.MAIN_JS]},
  output: {
    filename: 'bundle.[hash].js',
    publicPath: publicURl,
    path: path.resolve(__dirname,process.env.DIST)
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true
        }
      }
    }
  },
  devtool: isDev ? 'eval-source-map' : 'source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          // loader that should be used when the
          // CSS is not extracted
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                // Allows to configure how many loaders 
                // before css-loader should be applied
                // to @import(ed) resources
                importLoaders: 1,
                camelCase: true,
                // Create source maps for CSS files
                sourceMap: isSourceMap
              }
            },
            {
              loader: 'sass-loader',
              options: {
                modules: true,
                // Allows to configure how many loaders 
                // before css-loader should be applied
                // to @import(ed) resources
                importLoaders: 1,
                camelCase: true,
                // Create source maps for CSS files
                sourceMap: isSourceMap
              }
            },
            {
              // PostCSS will run before css-loader and will 
              // minify and autoprefix our CSS rules. We are also
              // telling it to only use the last 2 
              // versions of the browsers when autoprefixing
              loader: 'postcss-loader',
              options: {
                config: {
                  ctx: {
                    autoprefixer: {
                      browsers: 'last 2 versions'
                    }
                  }
                }
              }
            }
          ]
        })
        
      },
      {
          test: /\.(jpe?g|gif|png|ico)$/,
          exclude: /node_modules/,
          loader:'url-loader?limit=1024&name=images/[name].[ext]'
      },
      
      { 
          test: /\.((woff2?|svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg)$/, 
          loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      },
      { 
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/, 
        loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['png', '.js', '.jsx','jpeg','jpg','css','scss'],
  },
  plugins: [
    new Dotenv({
      path: __dirname +'/.env.'+process.env.ENV_FILE, // Path to .env file (this is the default) 
      safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe) 
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: './favicon.ico'
    }),
    // Create the stylesheet under 'styles' directory
   new ExtractTextPlugin({
      filename: 'styles/styles.[hash].css',
      allChunks: true
    })   
  ]
};