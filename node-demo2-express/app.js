// 0. 安装
// 1. 引包
var express = require('express')
var bodyParser = require('body-parser')

// 2. 创建你服务器应用程序
//    也就是原来的 http.createServer
var app = express()

// 在 Express 中开放资源就是一个 API 的事儿
// 公开指定目录
// 只要这样做了，你就可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了
app.use('/public/', express.static('./public/'))
    //当渲染以 .html 结尾的文件的时候，使用 art-template 模板引擎
app.engine('html', require('express-art-template'))

// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

var comments = [{
        name: '张三',
        message: '今天天气不错！',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天不错！',
        dateTime: '2015-10-16'
    }
]



app.get('/', function(req, res) {
    // 在 Express 中可以直接 req.query 来获取查询字符串参数
    // console.log(req.query)
    res.render('index.html', { comments })

})
app.get('/post', function(req, res) {
        res.render('post.html')
    })
    // app.get('/pinglun', function(req, res) {
    //     var comment = req.query
    //     comment.dateTime = '2017-11-5 10:58:51'
    //     comments.unshift(comment)
    //     res.redirect('/')
    //     // res.statusCode = 302
    //     // res.setHeader('Location', '/')
    // })
app.post('/pinglun', function(req, res) {
        // 1. 获取表单 POST 请求体数据
        // 2. 处理
        // 3. 发送响应

        // req.query 只能拿 get 请求参数,使用body-parser可以通过req.body获取post数据
        var comment = req.body
        comment.dateTime = '2017-11-5 10:58:51'
        comments.unshift(comment)

        // res.send, res.redirect
        // 这些方法 Express 会自动结束响应
        res.redirect('/')
    })
    // 相当于 server.listen
app.listen(3000, function() {
    console.log('app is running at port 3000.')
})