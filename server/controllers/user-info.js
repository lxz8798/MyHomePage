const UserSchema = require('./../models/users.js');

module.exports = {
	async signUp (ctx) {
		let result1 = {
			status:1,
            success: false,
            message: '注册成功，感觉您的关注！'
        }
        let result2 = {
			status:2,
            success: false,
            message: '注册失败，用户名已存在或为空，请检查后重新尝试.'
        }
		let userbody = {
			username:ctx.request.body.username,
			password:ctx.request.body.password,
			checkpass:ctx.request.body.checkpass,
			email:ctx.request.body.email
		}
		let {username,password,checkpass,email} = ctx.request.body;
		let userData = new UserSchema(userbody);
		await UserSchema.findOne({
	 		username
	 	},(err, docs) => {
	 		if(ctx.status == 404) {
 				ctx.body = "404";
 			}
	 		if(err){
	 			throw err;
	 		} 
	 		if(!docs) {
	 			userData.save(userbody);
	 			ctx.body = result1
	 		} else{
	 			ctx.body = result2
	 		}
	 	})
	},
	
	// 
		
	// async signIn (ctx) {
	// 	let result = {
	// 		status:0,
	// 		success:false,
	// 		message:'用户不存在'
	// 	};

	// 	const { username, password } = ctx.request.body;

	// 	await User.findOne({
	// 		username
	// 	}),(err, user) => {
	// 		if (err) {
	// 			throw err;
	// 		}
	// 		if (!user) {
	// 			ctx.body = result;
	// 		} else {
	// 			if (password === user.password) {
	// 				ctx.body = {success:true, message: '登入成功'};
	// 			} else {
	// 				ctx.body = {success:false, message: '密码错误'};
	// 			}
	// 		}
	// 	}
	// }
}