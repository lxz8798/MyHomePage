var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({

	username:{
		type:String,
		unique:true,
		require:true
	},
	password:{
		type:String,
		require:true
	},
	checkpass:{
		type:String,
		require:true
	},
	email:{
		type:String
	},
	
})

module.exports = mongoose.model('users',userSchema);