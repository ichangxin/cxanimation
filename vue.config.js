// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


ENV='development'
// #接口地址,注意协议,如果你没有配置ssl,需要将https 改为http
VUE_APP_BASE_API  = 'https://gwc.maiziaso.com';

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 项目部署的基础路径
  // 我们默认你的应用将会部署在域名的根部，比如 https://www.xxx.com/
  // 如果你的应用时部署在一个子路径下，那么你需要在这里指定子路径。
  // 比如，如果你的应用部署在https://www.xxx.com/public/
  // 那么将这个值改为 `/public/`
  // 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath 
  /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
  //这里配置https://yun.maiziaso.com，可以将图片和js都放到云上服务器。
  publicPath: process.env.NODE_ENV === 'production' ? 'https://yun.maiziaso.com/frontend/luckfortune/' : '/',
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: 'dist',
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
    assetsDir: "",
    /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
    productionSourceMap: false,
    /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
    filenameHashing: true,
    /* 代码保存时进行eslint检测 true检测，false不检测*/
    lintOnSave: true,
    /* webpack-dev-server 相关配置 */
    devServer: {
        /* 自动打开浏览器 */
        open: false,
        /* 设置为0.0.0.0则所有的地址均能访问 */
        // host: 'localhost',
        // port: 8070,
        https: false,
        /* 使用代理 */
        proxy: { // string | Object
            '/xmpdapi': {
                /* 目标代理服务器地址 */
                target: 'https://gwc.maiziaso.com',
                /* 允许跨域 */
                changeOrigin: true,
                pathRewrite: {
                	//'^/xmpdapi': '' //规定请求地址以什么作为开头
            	}
            },
			'/fortuneapi': {
			    /* 目标代理服务器地址 */
			    target: 'https://gwc.maiziaso.com',
			    /* 允许跨域 */
			    changeOrigin: true,
			    pathRewrite: {
			    	//'^/xmpdapi': '' //规定请求地址以什么作为开头
				}
			},
        },
    },
	
	
})