/*
 * @Author: LiuZe 
 * @Date: 2018-09-25 18:37:38 
 * @Last Modified by: LiuZe
 * @Last Modified time: 2018-09-26 14:38:55
 */

const path = require("path");

const {
    VueLoaderPlugin
} = require("vue-loader");

const htmlWebpackPlugin = require("html-webpack-plugin");

// 提取css文件插件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 压缩css文件
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // library: "app", // 导出库(exported library)的名称
        // libraryTarget: "umd", // 导出库(exported library)的类型
    },
    resolve: {
        // 使用的扩展名
        extensions: [".js", ".json", ".less", ".css", ".vue"],
        // 模块别名列表
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@less": path.resolve(__dirname, "src", "less"),
            "@style": path.resolve(__dirname, "src", "style"),
            "vue": path.resolve(__dirname, "node_modules", "vue", "dist", "vue.esm.js"),
        },
    },
    // 添加资源地图
    // devtool: "source-map",
    // 包(bundle)应该运行的环境
    // target: "web",
    // 精确控制要显示的 bundle 信息
    // stats: "errors-only",
    devServer: {
        // 设置代理请求
        // proxy: { // proxy URLs to backend development server
        //     '/api': 'http://192.168.2.129:5066/api'
        // },
        contentBase: path.resolve(__dirname, 'dist'), // 设置服务器的静态文件空间地址
        compress: true, // 启用gzip压缩
        host: "localhost",
        port: 3000,
        open: false
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader", 
                    "less-loader"
                ]
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    // 压缩处理选项
    optimization: {
        // 分割包里的文件
        splitChunks: {
            cacheGroups: {
                // 从缓存的组里提取
                commons: { // 提取公共文件
                    test: /[\\/]node_modules[\\/]/,
                    name: "commons",
                    chunks: "all"
                }
            }
        }
    },
    // webpack 插件数组
    plugins: [
        new VueLoaderPlugin({}),
        new htmlWebpackPlugin({
            // title: "webpackApp",
            filename: "index.html", // html文件模板名称
            template: path.resolve(__dirname, "src", "index.html")
        }),
        new MiniCssExtractPlugin({
            filename: "style/[name].css", // 提取的css文件名
        }),
        new OptimizeCssAssetsPlugin({})
    ]
}