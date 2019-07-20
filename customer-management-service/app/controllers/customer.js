const customer = require('../classes/customer');
const MQService = require('../../config/mqService');
const QueueType = require('../../config/queues/type');

exports.get = async (req , res) => {

	try {

		customerTarget = await customer.findManyAndPopulate(req.query , req._populate);

		res.success(customerTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getPagination = async (req , res) => {

	try {

		customerTarget = await customer.findManyAndPopulate(req.query , req._populate , req._page , req._size );
		res.success(customerTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.getSpecific = async (req , res) => {

	try {

		let customerTarget = await customer.find( {_id: req._objectId } , req._populate );
		customerTarget = await customer.wrap( customerTarget );
		res.success(customerTarget);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.create = async (req , res) => {

	try{

		const saved = await customer.create(req.body);

		// send queue
		let obj = JSON.stringify(saved)
		await MQService.publishToQueue(QueueType.CREATE_CUSTOMER , obj);

		res.success(saved);

	} catch (err){
		res.repeat();
	}

};

exports.update = async (req , res) => {

	try {

		let target = await customer.find({ _id : req._objectId });
		let updatedObj = await customer.update(target , req.body);
		updatedObj = await customer.wrap( updatedObj );
		res.success(updatedObj);

	} catch (err){
		res.preconditionFailed();
	}

};

exports.delete = async (req , res) => {

	try {

		let target = await customer.find({ _id : req._objectId });
		let deletedObj = await customer.deleteObj(target);
		deletedObj = await customer.wrap( deletedObj );
		res.success(deletedObj);

	} catch (err){
			res.preconditionFailed();
	}

};

exports.validate = async (req , res) => {

	let {email , password} = req.body;
	try{

		let target = await customer.find({ email });
		let token = await customer.validatePassword(target ,password);
		if (token){

			return res.success({
				customer : customer.wrap(target),
				token : token
			});
		}

		return res.unauthorized();

	} catch (err){
		return res.unauthorized();
	}
}


