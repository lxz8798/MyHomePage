const router = require('koa-route'); 
const userSchema =  require('../models/users.js');
// const userSchema =  require('../models/usersdb.js');
const mongoose = require('../config/db.js');
//把返回替换成Promise
mongoose.Promise = global.Promise;


const users = (ctx, next) => {
  
  // const userbody = userSchema.model({
  //   username:ctx.request.body.username,
  //   password:ctx.request.body.password,
  //   checkpass:ctx.request.body.checkpass,
  //   email:ctx.request.body.email
  // })

  // userSchema.statics.findbyusername = function(username, callback) {
  //   return this.findOne({username:userbody.name}).exec()
  // }

  // userbody.pre('save',(next) => {
  //   console.log(this)
  //   next()
  // })

  // let asdc = await userSchema.findbyusername(username)


  
//   const usersInfo = async () => {

//     let ReqUser = ctx.request.body.username;
//     let query = {username:userbody.username};

//     userSchema.statics.findbyusername = function(username, callback) {
//       return this.findOne({username:userbody.name}).exec()
//     }

//     userbody.static('users',function(username,callback){
//       return this.findOne({username:userbody.username},callback)
//     })
  
//     console.log(userbody.username)

// }


// let userbody = new userSchema({
//   username:ctx.request.body.username,
//   password:ctx.request.body.password,
//   checkpass:ctx.request.body.checkpass,
//   email:ctx.request.body.email
// })
// let query = {username:userbody.username}

// userdata = (data) => {
//   userSchema.findOne(query,(err,docs)=> {
//     if(!docs || err) {
//       ctx.response.body = "asdcasdcadsc"
//     }
//     return
//   });
// }




// await userSchema.findOne(query,function(err,docs){  
//   if(!docs || err) {
//     ctx.response.body = "asdcasdcadsc"
//   }
//   // 
//   // let ReqUser = ctx.request.body.username;
//   // let dbUser = docs.username;
//   // if (docs || ReqUser == dbUser) {
//   //   ctx.response.body = "asdcasdcadc"
//   // } else {
//   //   ctx.response.body = "123123123"
//   // }
//   // return
// }).exec()
// .then(await (data => {
//   //这里的可以执行
//   // ctx.response.body = "asdcasdcadsc"
  
//   if (docs || ReqUser == dbUser) {
//     ctx.response.body = {
//       status:0,
//       message:'asdcasdc',
//       result:''
//     }
//   } else {
//     ctx.response.body = {
//       status:1,
//       message:'123123',
//       result:''
//     }
//   }

// }))

  // let findUser = () => {
  // // let findUser = new Promise ((resolve, reject) =>{
  //   // ctx.response.body = "有相同用户名存在，请重新输入!"
    

  //   // .then((data) => {
  //   //   if (ReqUser == data.username || username == "") {
  //   //     ctx.response.body = "asdcasdcadsc"
  //   //   } else {
        
  //   //   }
  //   // })
  //   ctx.response.body = "asdcasdc"
  //   return
  // }
  // findUser()
  // ctx.response.body = findUser().then((data) => {
    
  // })
  // ctx.response.body = "asdcasdcadsc"

  
  // if (ctx.request.url == "/signup" && ctx.request.method === 'POST') {

    // return new Promise ((resolve, reject) => {
      
    //   let userbody = new userSchema({
    //     username:ctx.request.body.username,
    //     password:ctx.request.body.password,
    //     checkpass:ctx.request.body.checkpass,
    //     email:ctx.request.body.email
    //   })

      // userSchema.findOne({username:userbody.username},(err, doc) => {
        
      //   let ReqUser = ctx.request.body.username;
      //   let dbUser = doc.username;

      //   console.log(ReqUser + '<- ->' + dbUser );

      //   if (doc || ReqUser == dbUser) {
      //     return {
      //       status:1,
      //       message:'adca',
      //       result:''
            
      //     }
      //     return
      //   } else {
      //     console.log('用户名已经被使用了，请重新输入!');
      //   }

      // })

    // })
    // .then((data) => {
    //   return resolve(data)
    // })

  // }

  // const userInsert = new Promise((resolve, reject) => { }) //这个是Promise方式
    // try {
      // await next()
        // console.logo(data)
        // let userInsert = function (data) {
        //   return new Promise((resolve, reject) => {
        //     resolve()
        //   })
        // }
        // // console.logo(data)

        
         
      
      /**
       * 判断请求
       */
      // const postLogic = new Promise((resolve, reject) => {}) //这个是Promise方式
      // await postLogic (){
      //   if (ctx.request.url == "/signup" && ctx.request.method === 'POST') {
      //     userSchema.findOne({username:userbody.username},(err, doc) => {
            
      //       let ReqUser = ctx.request.body.username;
      //       let dbUser = doc.username;

      //       console.log(ReqUser + '<- ->' + dbUser );

      //       if (ReqUser == dbUser) {
      //         // return resolve({
      //         //   // ctx.response.body = {
      //         //     status:0,
      //         //     message:'很抱歉，该用户名已经被使用，请重新输入.',
      //         //     result:''
      //         //   // }
      //         // })
      //       } else {
      //         console.error(err);
      //       }

      //     })
      //   } else {
      //     ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
      //   }
      // }
    
    /**
     * try的catch
     */
    // } catch {
    //   console.log('错了')
    // }
      
  

  /**
   * 判断请求
   *
  const postLogic = new Promise((resolve, reject) => {

    if (ctx.request.url == "/signup" && ctx.request.method === 'POST') {
      userSchema.findOne({username:userbody.username},(err, doc) => {
        
        let ReqUser = ctx.request.body.username;
        let dbUser = doc.username;

        console.log(ReqUser + '<- ->' + dbUser );

        if (ReqUser == dbUser) {
          // return resolve({
          //   // ctx.response.body = {
          //     status:0,
          //     message:'很抱歉，该用户名已经被使用，请重新输入.',
          //     result:''
          //   // }
          // })
        } else {
          console.error(err);
        }

      })
    } else {
      ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }

  })/

   /**
   * 需要这个才不会404
   */
  // ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  // ctx.response.body =
  // ctx.response.redirect('/');

  // userInsert.then((data) => {
  //   // console.log(data)
  // })
  // userInsert.catch((data) => {
    
  // })
};

module.exports = users;