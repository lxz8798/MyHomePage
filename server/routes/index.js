const router = require('koa-router')();
const UserSchema = require('./../models/users.js');

const users = require('./../routes/users.js'); 

//user的路由
router.use('', users.routes(), users.allowedMethods());

//这样是成功的，但是逻辑在同一个文件，做一个人总路由入口
// router.post('/signup', async (ctx, next) => {
    
//     const userbody = UserSchema.model('users',{
// 		username:ctx.request.body.username,
// 		password:ctx.request.body.password,
// 		checkpass:ctx.request.body.checkpass,
// 		email:ctx.request.body.email
// 	})

//     ctx.body = 'asdcadc'

// });

//导出路由
module.exports = router;