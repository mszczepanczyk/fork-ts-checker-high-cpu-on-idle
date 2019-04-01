const { TsConfigPathsPlugin } = require('awesome-typescript-loader')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const serverConfig = {
  devtool: 'inline-source-map',
  entry: [
    // '@babel/polyfill',
    './src/server/index.ts'
  ],
  // removes some warnings but watch out - may prevent from generating chunks
  // https://stackoverflow.com/questions/41692643
  externals: [nodeExternals()],
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
              presets: [
                [
                  '@babel/preset-env',
                  {
                    debug: false,
                    targets: {
                      node: true
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
        exclude: /node_modules/,
        test: /\.graphql$/,
        use: [
          {
            loader: 'graphql-tag/loader'
          }
        ]
      }
    ]
  },
  name: 'server',
  output: {
    filename: 'server.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      checkSyntacticErrors: true,
      measureCompilationTime: true,
      memoryLimit: 1024,
      tslint: true
    })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.graphql'],
    plugins: [
      new TsConfigPathsPlugin({
        compiler: 'typescript'
      })
    ]
  },
  target: 'node'
}

module.exports = serverConfig
