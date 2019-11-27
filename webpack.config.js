const path = require("path");
module.exports = {
    mode:"development",
    entry:"./src/index.js",
    output:{
        filename:"main.js",
        path:path.resolve(__dirname,"dist")
    },
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