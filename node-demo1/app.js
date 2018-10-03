var http = require('http')
var fs = require('fs')
var url = require('url')
var template = require('art-template')

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

// 1. 创建 Server
// var server = http.createServer()
// 2. 监听 request 请求事件，设置请求处理函数
// server.on('request', function(req, res) {})
// 3. 绑定端口号，启动服务
// server.listen(3000, function() {})

// 简写方式，该函数会直接被注册为 server 的 request 请求事件处理函数
http.createServer((req, res) => {
        // 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
        var parseObj = url.parse(req.url, true)

        // 单独获取不包含查询字符串的路径部分（该路径不包含 ? 之后的内容）
        var pathname = parseObj.pathname

        if (pathname === '/') {
            fs.readFile('./views/index.html', (err, data) => {
                if (err) {
                    return res.end('404 Not Found.')
                }
                var htmlStr = template.render(data.toString(), { comments })
                res.end(htmlStr)
            })
        } else if (pathname === '/post') {
            fs.readFile('./views/post.html', (err, data) => {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        } else if (pathname.indexOf('/public/') === 0) {
            // /public/css/main.css
            // /public/js/main.js
            // /public/lib/jquery.js
            // 统一处理：
            //    如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
            //    所以我们就直接可以把请求路径当作文件路径来直接进行读取
            fs.readFile('.' + pathname, function(err, data) {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        } else if (pathname === '/pinglun') {
            var comment = parseObj.query
            comment.dateTime = new Date()
            comments.unshift(comment)

            //状态码设置为 302 临时重定向
            res.statusCode = 302
            res.setHeader('Location', '/')
            res.end()
        } else {
            fs.readFile('./views/404.html', (err, data) => {
                if (err) {
                    return res.end('404 Not Found.')
                }
                res.end(data)
            })
        }
    })
    .listen(3000, () => { console.log('server running...') })