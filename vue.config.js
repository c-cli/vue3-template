const isMock = process.env.NODE_ENV === 'mock';

module.exports = {
  productionSourceMap: false, // 设置上线后是否加载webpack文件，不需要生产环境的 source map
  devServer: {
    port: isMock ? 8001 : 8002,
    proxy: {
      '^/api': {
        target: isMock ? 'http://rap2api.taobao.org/app/mock/228039' : 'http://rap2api.taobao.org/app/mock/228039',
        ws: true,
        changeOrigin: true,
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
