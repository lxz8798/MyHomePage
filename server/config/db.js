const mongoose = require('mongoose');
const testUserInfo = require('./../models/users.js');
const url = "mongodb://47.75.5.73:27017/homepage";
const options = {
	user:'homepageAdmin',
	pass:'Lxz8798z!'
}
/**
 * 连接
 */
mongoose.connect(url,options,(err) => {
	if (err) {
		console.log(err);
	} else {
		console.log('连接成功!');
	}
});
/**
 * 连接错误
 */
mongoose.connection.on("error",() => {
	console.log("mongoDB connected fail.")
});
/**
 * 连接打开
 */
mongoose.connection.on("open",(callback) => {
	console.log("mongoDB connected access");
});
/**
 * 连接断开
 */
mongoose.connection.on("disconnected",() => {
	console.log("mongoDB connected disconnected.")
});

module.exports = mongoose;