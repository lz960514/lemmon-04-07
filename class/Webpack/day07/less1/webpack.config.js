const path = require("path");

module.exports = {
    mode: "development", // 打包模式 production (生产模式)  development (开发模式)
    entry: "./src/main.js", // 设置入口文件
    output: {
        path: path.resolve(__dirname, "dist"), // 打包好后输出目录
        filename: "app.js", // 打包好后的文件名称
    },
    module: {
        // rules 什么文件用什么规则处理
        rules: [
            { // 规则项目
                test: /\.css$/,
                // use 使用 规则处理器
                use:["style-loader","css-loader"]
            }
        ]
    }
}