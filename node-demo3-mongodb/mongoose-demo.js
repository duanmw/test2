var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 1. 连接数据库,如果不存在会自动创建
mongoose.connect('mongodb://localhost/test')


// 2. 设计文档结构（类似表结构）
var userSchema = new Schema({
        username: {
            type: String,
            required: true //必需
        },
        password: {
            type: String,
            required: true
        },
        email: {
            type: String
        }
    })
    // 3. 将文档结构发布为模型
var User = mongoose.model('User', userSchema)


/**
 *增加数据
 */

// var admin = new User({ // 实例化一个User
//     username: 'zhangsan',
//     password: '123456',
//     email: 'aa@abc.com'
// })

// admin.save(function(err, ret) { // 持久化保存 admin 实例
//     if (err) {
//         console.log('保存失败')
//     } else {
//         console.log('保存成功')
//         console.log(ret)
//     }
// })

/**
 * 查询数据
 */
User.find(
    function(err, ret) {
        if (err) {
            console.log('查询失败')
        } else {
            console.log(ret)
        }
    })
User.findOne({
        nickname: 'aa'
    },
    function(err, ret) {
        if (err) {
            console.log('查询失败')
        } else {
            console.log(ret)
        }
    })

/**
 * 删除数据
 */
// User.remove({
//     nickname: 'aa'
// }, function(err, ret) {
//     if (err) {
//         console.log('删除失败')
//     } else {
//         console.log('删除成功')
//         console.log(ret)
//     }
// })

/**
 * 更新数据
 */
// User.findByIdAndUpdate('5bb72214f57a645a446d78e8', {
//     password: '1233'
// }, function(err, ret) {
//     if (err) {
//         console.log('更新失败')
//     } else {
//         console.log('更新成功')
//     }
// })
// User.findOneAndUpdate({ username: 'lili' }, { username: 'zss' },
//     function(err, ret) {
//         if (err) {
//             console.log('更新失败')
//         } else {
//             console.log('更新成功')
//             console.log(ret)
//         }
//     })