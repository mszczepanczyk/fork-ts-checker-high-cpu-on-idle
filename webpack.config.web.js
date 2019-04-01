const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const kill = require('tree-kill')

const reactSvgLoader = require.resolve('react-svg-loader')

// XXX: Force kill webpack due SIGINT not always being handled by webpack-dev-server
// https://github.com/webpack/webpack-dev-server/issues/1479
process.on('SIGINT', () => kill(process.pid, 'SIGKILL'))

let webConfig = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': `http://localhost:8000`
    },
    host: 'localhost',
    hot: true,
    inline: true,
    port: 8001,
    public: 'localhost:8001'
  },
  devtool: 'inline-source-map',
  entry: [
    '@babel/polyfill',
    './src/web/index.tsx'
  ],
  externals: ['browser'],
  mode: 'development',
  module: {
    rules: [
      { loader: 'cache-loader' },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: ['react-hot-loader/babel'],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    debug: false,
                    targets: {
                      browsers: 'defaults'
                    }
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              experimentalWatchApi: true,
              happyPackMode: false, // needed for thread-loader
              transpileOnly: true
            }
          }
        ]
      },
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: 'source-map-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        exclude: /node_modules/,
        test: /\.svg$/,
        use: [
          { loader: 'cache-loader' },
          'babel-loader',
          {
            loader: reactSvgLoader, // 'react-svg'
            query: {
              svgo: {
                plugins: [{ removeStyleElement: true }],
                pretty: true
              }
            }
          }
        ]
      },
      {
        test: /\.(png|woff2?|eot|ttf)(\?[a-z0-9=.]+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    ]
  },
  name: 'web',
  optimization: {
    // minimizer: env.WEBPACK_MINIFY ? [new TerserPlugin({
    //   parallel: true
    // })] : []
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist/web'),
    publicPath: `http://localhost:8001/public/`
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      measureCompilationTime: true,
      memoryLimit: 2048,
      tslint: true
    }),
    new CopyWebpackPlugin([
      {
        from: './src/web/static',
        to: 'static'
      }
    ]),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [
      new TsConfigPathsPlugin({
        compiler: 'typescript'
      })
    ]
  },
  target: 'web'
}

module.exports = webConfig
