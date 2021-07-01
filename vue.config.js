module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'utils': '@/utils',
        'views': '@/views',
      }
    }
  },
  publicPath: './',
  devServer: {
    port: 8080,
    //以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {//配置跨域
      '/api': {
        target: 'https://api.shop.eduwork.cn/',//这里后台的地址模拟的;应该填写你们真实的后台接口
        ws: false,
        changOrigin: true,//允许跨域
        secure: true,
        pathRewrite: {
          '^/api': ''//请求的时候使用这个api就可以
        }
      }

    }
  }

}
