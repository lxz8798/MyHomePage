const router = require('koa-router')(); 
const userInfoController = require('./../controllers/user-info.js');

// const routers = router.post('/signup',userInfoController.signUp);	
const routers = router
					.post('/signup', userInfoController.signUp)
					// .get('/redirect', userInfoController.signUp)
    // .post('/signin', userInfoController.signIn)

module.exports = routers;