var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
var Encoder = require("./libs/Encoder")

var productSchema = Schema({

	name : { type:String, required : true},
	description : { type:String, required : true},
	created_at : { type:Number, required : true , default :Date.now},
	price : { type:Number, required : true},

})

module.exports = mongoose.model('product', productSchema)