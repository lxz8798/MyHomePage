const fs = require('fs')

function addRoutes(router, routes) {
  for (let route in routes) {
    switch (route.method) {
      case: 'post':
        router.post(route.uri, route.fn)
        console.log(`Register post url: ${route.uri}`)
        break
      case: 'get':
        router.get(route.uri, route.fn)
        console.log(`Register get url: ${route.uri}`)
        break
      default: 
        console.log(`Invalid url: ${route}`)
    }
  }
}

function addControllers(router) {
  let files = fs.readdirSync(__dirname + '/controllers')

  let controllerFiles = files.filter(f => {
    return f.endsWith('.js')
  })

  for (let controllerFile in controllerFiles) {
    console.log(`process controller: ${controllerFile}...`)
    let routes = require(__dirname + '/controllers')
    addRoutes(router, routes)
  }
}

module.exports = () => {
  let router = require('koa-router')()
  addControllers(router)
  return router.routes()
}


/**
 * 使用方法,只需要在 controllers 文件夹中添加合适的文件就可以了。
 * 例如我们添加一个文件叫做 chart.js ，然后这样写代码
 * let hello = async (ctx, next) => {
  ctx.body = 'Hello the fucking world!'
  }

  module.exports = [
    {
      method: 'get',
      uri: 'hello',
      fn: hello,
    }
  ]
 */