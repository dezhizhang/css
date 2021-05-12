/*
 * @Author: your name
 * @Date: 2021-05-04 19:37:42
 * @LastEditTime: 2021-05-12 19:56:44
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /css/webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    context:process.cwd(),
    mode:'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js',
        libraryTarget:'umd',
        library:'css',
    },
    devServer:{
        port:9999,
        open:true,
        contentBase:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
           {
               test:/\.less$/,
               use:['style-loader','css-loader','less-loader']
           },
           {
               test:/\.(png|jpg|jpeg)$/,
               use:['file-loader']
           }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:'body'
        })
    ]
   
}