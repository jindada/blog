var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');


module.exports = {
    devtool: 'source-map',
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
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: { colors: true },
        proxy: {
            '/api': {
              target: 'http://127.0.0.1:9001',
              changeOrigin: true
            }
         }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor',  'vendor.js'),
    ],
    module:{
        loaders:[
            {
                loader:'babel',
                exclude:[ path.resolve(__dirname,'node_modules') ],
                include:[ path.resolve(__dirname,'src') ],
                test:/\.(js|jsx)$/,
                query:{
                    plugins:["transform-runtime", ["import", {
                        "libraryName": "antd",
                        "style": "css",
                    }]],
                    presets:['es2015','stage-0','react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: 'style!css?modules&localIdentName=[path][name][local][hash:base64:5]!postcss!less'
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