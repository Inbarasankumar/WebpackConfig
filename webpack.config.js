const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"main.[chunkhash].js",
        //filename:"main.[contenthash].js", we can use either contenthash or chunkhash
        path:path.resolve(__dirname,"dist")
    },
    plugins:[new HtmlWebpackPlugin({
        template:'./src/index.html'
    })],
    module:{
        rules:[
            {
                test:/\.scss$/,
                use:["style-loader", //third step
                "css-loader", //second
                "sass-loader" //first 
            ]
        }
        
    ]
    }
}

