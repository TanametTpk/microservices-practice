const product = require('../classes/product');

exports.get = async (req , res) => {

	try {

		productTarget = await product.findManyAndPopulate(req.query , req._populate);

		res.success(productTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getPagination = async (req , res) => {

	try {

		productTarget = await product.findManyAndPopulate(req.query , req._populate , req._page , req._size );
		res.success(productTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getSpecific = async (req , res) => {

	try {

		let productTarget = await product.find( {_id: req._objectId } , req._populate );
		productTarget = await product.wrap( productTarget );
		res.success(productTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.create = async (req , res) => {

	try{

		const saved = await product.create(req.body);
		res.success(saved);

	} catch (err){
		res.repeat();
	}

};

exports.update = async (req , res) => {

	try {

		let target = await product.find({ _id : req._objectId });
		let updatedObj = await product.update(target , req.body);
		updatedObj = await product.wrap( updatedObj );
		res.success(updatedObj);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.delete = async (req , res) => {

	try {

		let target = await product.find({ _id : req._objectId });
		let deletedObj = await product.deleteObj(target);
		deletedObj = await product.wrap( deletedObj );
		res.success(deletedObj);

	} catch (err){
			res.preconditionFailed();
	}

};



