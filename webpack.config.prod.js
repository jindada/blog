var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var CompressionPlugin = require("compression-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

console.log(ExtractTextPlugin);

module.exports = {
    entry:{
        app:[
            'babel-polyfill',
            path.resolve(__dirname,'src/index.js')
        ],
        vendor: ['react', 'react-dom', 'dva', 'babel-polyfill', 'classnames'],
    },
    output:{
        path:path.resolve(__dirname),
        filename:'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            comments: false,        // 去掉注释
            compress: {
                unused: true,
                dead_code: true,
                warnings: false
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
        new CompressionPlugin({
            asset: "[path].gz[query]",
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0
        }),
        new ExtractTextPlugin('style.css'),
        new BundleAnalyzerPlugin(),
    ],
    module:{
        loaders:[
            {
                loader:'babel',
                exclude:[ path.resolve(__dirname,'node_modules') ],
                include:[ path.resolve(__dirname,'src') ],
                test:/\.(js|jsx)$/,
                query:{
                    plugins:['transform-runtime', ['import', {
                        "libraryName": "antd",
                        "style": "css",
                    }]],
                    presets:['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.less$/,
                loader: "style!css?modules&localIdentName==[path][local][hash:base64:5]!postcss!less" // ExtractTextPlugin.extract("style-loader", "css-loader?modules&localIdentName==[path][local][hash:base64:5]", "less-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=250',
            },
            {   test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {   test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=application/font-woff2"
            },
            {   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file"
            },
            {   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    resolve:{
        extensions:['','.js','.jsx','.json']
    },
    postcss: () => [autoprefixer]
};