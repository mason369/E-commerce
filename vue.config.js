// vue.config.js

const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
});

module.exports = {
    lintOnSave: false,

    // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",

    // //代理服务器
    devServer: {
        proxy: {
            "/api": {
                target: "http://gmall-h5-api.atguigu.cn", //代理转发路径
                pathRewrites: { "^/api": "" }, //匹配字符串
                ws: true, //支持websocket
                changeOrigin: true, //host源
            },
            "/ipa": {
                target: "http://10.31.1.65:8080", //代理转发路径
                pathRewrites: { "^/ipa": "" }, //匹配字符串
                ws: true, //支持websocket
                changeOrigin: true, //host源
            },
        },
    },
};
