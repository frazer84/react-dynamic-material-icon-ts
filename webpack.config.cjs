const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

module.exports = {
    context: __dirname,
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    output: {
       path: path.resolve( __dirname, 'dist' ),
       filename: '[name].[contenthash].js',
       publicPath: '/',
    },
    optimization: {
       runtimeChunk: 'single',
       splitChunks: {
          cacheGroups: {
             vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
             },
          },
       },
    },
    devServer: {
       historyApiFallback: true,
       port: 9000,
       hot: true,
       writeToDisk: true,
       inline: true,
    },
    module: {
       rules: [
          {
             test: /\.tsx?$/,
             use: 'ts-loader',
             exclude: /node_modules/,
           },
          {
             test: /\.js$/,
             use: 'babel-loader',
          },
          {
             test: /\.css$/,
             use: ['style-loader', 'css-loader'],
          },
          {
             test: /\.(png|j?g|svg|gif)?$/,
             use: 'file-loader'
          }
       ]
    },
    resolve: {
       extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
       new HtmlWebPackPlugin({
          template: path.resolve( __dirname, 'public/index.html' ),
          filename: 'index.html'
       })
    ]
 };