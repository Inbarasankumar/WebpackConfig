const path = require("path");
const common = require ('./webpack.common');
const merge = require ('webpack-merge');
 
module.exports = merge(common,{
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        //filename:"main.[contenthash].js", we can use either contenthash or chunkhash
        path:path.resolve(__dirname,"dist")
    }
   
   
});

