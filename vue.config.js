const isMock = process.env.NODE_ENV === 'mock';

module.exports = {
  productionSourceMap: false, // 设置上线后是否加载webpack文件，不需要生产环境的 source map
  devServer: {
    port: isMock ? 8001 : 8002,
    proxy: {
      '^/api': {
        target: isMock ? 'https://yapi.baidu.com/mock/71010' : 'https://yapi.baidu.com/mock/71010',
        ws: true,
        changeOrigin: true,
        pathRewrite: { // 重写路径
          '^/api': '',
        },
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
};
