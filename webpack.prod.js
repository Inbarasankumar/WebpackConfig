const path = require("path");
const common = require ('./webpack.common');
const merge = require ('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports =merge(common, {
    mode:"production",
    entry:"./src/index.js",
    output:{
        filename:"[name].[chunkhash].bundle.js",
        //filename:"main.[contenthash].js", we can use either contenthash or chunkhash
        path:path.resolve(__dirname,"dist")
    },
    plugins: [
        
        new MiniCssExtractPlugin({filename:"[name].[contentHash].css"})
],
module:{
    rules:[
     {
         test:/\.scss$/,
         use:[MiniCssExtractPlugin.loader, //here instead of style we haeve to use mini loader because it will create separate css instead of injecting into the DOM.
         "css-loader", //second
         "sass-loader" //first 
     ]
 }
    ]
}
   
});

