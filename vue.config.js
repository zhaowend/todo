module.exports ={
    //  '/dist/'表示打包后项目的名称
   publicPath:  process.env.NODE_ENV === 'production'? '/docs/': '/', // 公共路径(必须有的)
   outputDir: "docs", // 输出文件目录
   assetsDir: "static"//静态资源文件名称
   }
