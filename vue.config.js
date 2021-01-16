/*
 * @Description: 配置文件
 */
module.exports = {
    publicPath: './',
    devServer: { 
      open: true,
      proxy: {
        '': {
          target: 'http://120.53.31.103:84/', // 线上后端地址
          changeOrigin: true, //允许跨域
          pathRewrite: {
            '^': ''
          }
        }
      }
    }
  }