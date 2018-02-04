const Koa = require('koa');
const proxy = require('koa-proxy');

const app = new Koa();

const koaService = context => {
	context.response.body ="Hello Koa!";
}

const prot = 3000

app.use(proxy({
	host:'http://localhost',
	jar:true
}))
   .use(koaService)

app.listen(prot);

// console.log(`node service listening no prot ${prot}`);