const UserModel = require('../models/users.js');
const Router = require('koa-router');
const userInfoController = require('./../controllers/user-info.js');
// const Users = UserModel.Users;

const router = new Router();

// ctx.request.body = "this is users.js page!"
// console.log($store.token)
// let doc1 = new UserModel(users);
// let st = await students.find();
// doc1.save(doc1);
	// console.log(req)
	// console.log(res)
	// 
router
	// .get('/', async (ctx,next) =>{
	// // await next();
	// 	const title = 'this is user page!';
	// 	await ctx.render('home', {
	// 		title
	// 	})
	// })
	.post('/signup',userInfoController.signUp)
	.post('/signin',userInfoController.signIn)

module.exports = router;