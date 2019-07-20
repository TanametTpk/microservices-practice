var mongoose = require("mongoose");
var Schema = require("mongoose").Schema;
var Encoder = require("./libs/Encoder")

var cartSchema = Schema({

	user : { type:String, required : true},
	product : { type:String, required : true},

})

module.exports = mongoose.model('cart', cartSchema)