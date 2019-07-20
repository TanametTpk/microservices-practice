const Customer = require( "mongoose" ).model( "customer" );
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/env/awt.config');

const find = (query , populate) => {

	let result = Customer.findOne(query)

	if (populate) result = result.populate(populate);
	return result

}

const findManyAndPopulate = (query , populate , skip , limit) => {

	if (!skip) skip = 0
	if (!limit) limit = 1000

	let result = Customer.find(query , "name , email , created_at").limit(limit).skip(skip * limit);

	if (populate) result = result.populate(populate);
	return result

}

const create = (data) => {

	const customer = new Customer(data);
	customer.setPassword(data.password)

	return customer.save();

};

const update = ( customer, data ) => {

	const { name , email , created_at , password } = data;
	const currentCustomer = customer;

	if (name) currentCustomer.name = name;
	if (email) currentCustomer.email = email;
	if (created_at) currentCustomer.created_at = created_at;
	if (password) currentCustomer.setPassword(password);


	return customer.save();

};

const deleteObj = ( customer ) => customer.remove();

const wrap = (customer) => {

	if (customer === null) return {};
	const { _id , name , email , created_at } = customer;

	return { _id , name , email , created_at };

}

const validatePassword = (customer , password) => {

	if (customer === null) return null;
	if ( !customer.validatePassword(password) ) return null;

	const { _id , name , email } = customer;
	let auth = { _id , name , email };

	return jwt.sign(auth , jwtConfig.awt_secret);

}


module.exports = {
	find,
	findManyAndPopulate,
	create,
	update,
	deleteObj,
	wrap,
	validatePassword,

};
