const Cart = require( "mongoose" ).model( "cart" );
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/env/awt.config');

const find = (query , populate) => {

	let result = Cart.findOne(query)

	if (populate) result = result.populate(populate);
	return result

}

const findManyAndPopulate = (query , populate , skip , limit) => {

	if (!skip) skip = 0
	if (!limit) limit = 1000

	let result = Cart.find(query , "user , product").limit(limit).skip(skip * limit);

	if (populate) result = result.populate(populate);
	return result

}

const create = (data) => {

	const cart = new Cart(data);

	return cart.save();

};

const update = ( cart, data ) => {

	const { user , product } = data;
	const currentCart = cart;

	if (user) currentCart.user = user;
	if (product) currentCart.product = product;


	return cart.save();

};

const deleteObj = ( cart ) => cart.remove();

const wrap = (cart) => {

	if (cart === null) return {};
	const { _id , user , product } = cart;

	return { _id , user , product };

}



module.exports = {
	find,
	findManyAndPopulate,
	create,
	update,
	deleteObj,
	wrap,

};
