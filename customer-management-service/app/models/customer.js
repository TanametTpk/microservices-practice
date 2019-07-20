var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
var Encoder = require("./libs/Encoder")

var customerSchema = Schema({

	name : { type:String, required : true},
	email : { type:String, required : true},
	created_at : { type:Number, required : true , default :Date.now},
	password : { type:String, required : true},

})

customerSchema.index({ email:1 } , {unique: true});

customerSchema.methods.setPassword = function( password ){
	this.password = Encoder.MD5_encrypt(password);
}

customerSchema.methods.validatePassword = function( password ){
	return Encoder.MD5_validate(password , this.password);
}

module.exports = mongoose.model('customer', customerSchema)