/*
 * @Author: your name
 * @Date: 2021-05-04 19:37:42
 * :date last edited: 2021-05-19 21:11:32
 * :last editor: 张德志
 * @Description: In User Settings Edit
 * :name: /css/webpack.config.js
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
               use:[{
                   loader:'url-loader',
                   options:{
                       limit:5 * 1025,
                       
                   }
               }]
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