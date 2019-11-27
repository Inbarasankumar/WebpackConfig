const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  entry:"./src/index.js",
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
        },
        {
            test:/\.html$/,
            use:["html-loader"]
        },
        {
            test:/\.(svg|png|jpg|gif)$/,
            use:{loader:"file-loader",options:{
                name:'[name].[hash].[ext]',
                outputPath: "imgs"
            }}
        }
        
    ]
    }
}
