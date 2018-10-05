var express = require('express')
var User = require('./models/user')
var md5 = require('blueimp-md5')

var router = express.Router()

router.get('/', function(req, res) {
    // console.log(req.session.user)
    res.render('index.html', {
        user: req.session.user
    })
})

router.get('/login', function(req, res) {
    res.render('login.html')
})

router.post('/login', function(req, res) {
    var body = req.body

    User.findOne({
        email: body.email,
        password: md5(md5(body.password))
    }, function(err, user) {
        if (err) {
            // Express 提供了一个响应方法：json()
            // 该方法接收一个对象作为参数，它会自动帮你把对象转为字符串再发送给浏览器
            return res.status(500).json({
                err_code: 500,
                message: err.message
            })
        }

        // 如果邮箱和密码匹配，则 user 是查询到的用户对象，否则就是 null
        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or password is invalid.'
            })
        }

        // 用户存在，登陆成功，通过 Session 记录登陆状态
        req.session.user = user

        res.status(200).json({
            err_code: 0,
            message: 'OK'
        })
    })

})

router.get('/register', function(req, res) {
    res.render('register.html')
})

router.post('/register', function(req, res) {
    var body = req.body
    User.findOne({
        //or满足之一即可
        $or: [{
            email: body.email
        }, {
            nickname: body.nickname
        }]
    }, function(err, data) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: '服务端错误'
            })
        }
        if (data) {
            // 邮箱或者昵称已存在
            return res.status(200).json({
                err_code: 1,
                message: 'Email or nickname aleady exists.'
            })
        }

        //可以注册
        // 对密码进行 md5 重复加密
        body.password = md5(md5(body.password))
        new User(body).save(function(err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'Internal error.'
                })
            }

            // 注册成功，使用 Session 记录用户的登陆状态
            req.session.user = user

            res.status(200).json({
                err_code: 0,
                message: 'OK'
            })
        })
    })
})

router.get('/settings/profile', function(req, res) {
    // req.session.user
    User.findOne(req.session.user, function(err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: 'Internal error.'
            })
        }
        res.render('settings/profile.html', { user: data })
    })

})
router.get('/settings/admin', function(req, res) {
    res.render('settings/admin.html')
})

router.get('/logout', function(req, res) {
    // 清除登陆状态
    req.session.user = null

    // 重定向到登录页
    res.redirect('/login')
})

module.exports = router