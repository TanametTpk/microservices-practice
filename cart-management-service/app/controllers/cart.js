const cart = require('../classes/cart');

exports.get = async (req , res) => {

	try {

		cartTarget = await cart.findManyAndPopulate(req.query , req._populate);

		res.success(cartTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getPagination = async (req , res) => {

	try {

		cartTarget = await cart.findManyAndPopulate(req.query , req._populate , req._page , req._size );
		res.success(cartTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getSpecific = async (req , res) => {

	try {

		let cartTarget = await cart.find( {_id: req._objectId } , req._populate );
		cartTarget = await cart.wrap( cartTarget );
		res.success(cartTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.create = async (req , res) => {

	try{

		const saved = await cart.create(req.body);
		res.success(saved);

	} catch (err){
		res.repeat();
	}

};

exports.update = async (req , res) => {

	try {

		let target = await cart.find({ _id : req._objectId });
		let updatedObj = await cart.update(target , req.body);
		updatedObj = await cart.wrap( updatedObj );
		res.success(updatedObj);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.delete = async (req , res) => {

	try {

		let target = await cart.find({ _id : req._objectId });
		let deletedObj = await cart.deleteObj(target);
		deletedObj = await cart.wrap( deletedObj );
		res.success(deletedObj);

	} catch (err){
			res.preconditionFailed();
	}

};



