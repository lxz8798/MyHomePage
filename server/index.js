const Koa = require('koa');
//配置
const db = require('./config/db.js');
//封装路由
const routers =  require('./routes/index.js');
//文件处理
const fs = require('fs');
//处理跨越
const cors = require('koa2-cors');
//解析
const koaBody = require('koa-body');
const mongoose = require('mongoose');

//使用monk模块链接mongo
// const Monk = require('monk');
// const url = "homepageAdmin:Lxz8798z!@47.75.5.73:27017/homepage";
// const db = Monk(url);
// const getUsers = db.get('users');

mongoose.Promise = global.Promise;

const port = 3000;

const app = new Koa();

const handler = async (ctx, next) => {

  try {
    await next();
  } catch (error) {
    ctx.response.status = error.statusCode || error.status || 500;
    ctx.response.type = 'html';
    ctx.response.body = '<p>Something wrong, please contact administrator.</p>';
    ctx.app.emit('error', error, ctx);
  }

};


const catchError = async (ctx, next) => {
  try {
    await next();
    if (ctx.status === 404) {
      ctx.throw(404);
    }
  } catch (err) {
    console.error(err.stack);
    const status = err.status || 500;
    ctx.status = status;
    if (status === 404) {
      await ctx.render("./../error/404/index.html");
    } else if (status === 500) {
      await ctx.render("./../error/404/index.html");
    }
  }
};

app
  .use(cors({
      origin: function(ctx) {
        if (ctx.url === '/test') {
          return false;
        }
        return '*';
      },
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
      maxAge: 5,
      credentials: true,
      allowMethods: ['GET', 'POST', 'DELETE'],
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
    }))
  .use(koaBody({multipart:true}))
  // .use(async(next) {  
  //   try {
  //       await next;
  //   } catch (e) {
  //      this.status = 500;
  //      this.body = '500';
  //   }
  //   if(parseInt(this.status) === 404){
  //      this.body = '404';
  // }
  // .use(bodyParser())
  // .use(cors())
  .use(handler)
  .use(catchError)
  .use(routers.routes())
  .use(routers.allowedMethods())
  // .use(router.post('/signup',users))
  // .use(router.post('/signup',main))
  // .use('/signup',users)
  // .use(route.get('/logger',logger))

app.listen(port, ()=> {
	console.log('已经运行，端口为3000');
});

app.on('error', function(error) {
  console.log('logging error ', error.message);
  console.log(error);
});