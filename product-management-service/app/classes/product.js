const Product = require( "mongoose" ).model( "product" );
const jwt = require('jsonwebtoken');
const jwtConfig = require('../../config/env/awt.config');

const find = (query , populate) => {

	let result = Product.findOne(query)

	if (populate) result = result.populate(populate);
	return result

}

const findManyAndPopulate = (query , populate , skip , limit) => {

	if (!skip) skip = 0
	if (!limit) limit = 1000

	let result = Product.find(query , "name , description , created_at , price").limit(limit).skip(skip * limit);

	if (populate) result = result.populate(populate);
	return result

}

const create = (data) => {

	const product = new Product(data);

	return product.save();

};

const update = ( product, data ) => {

	const { name , description , created_at , price } = data;
	const currentProduct = product;

	if (name) currentProduct.name = name;
	if (description) currentProduct.description = description;
	if (created_at) currentProduct.created_at = created_at;
	if (price) currentProduct.price = price;


	return product.save();

};

const deleteObj = ( product ) => product.remove();

const wrap = (product) => {

	if (product === null) return {};
	const { _id , name , description , created_at , price } = product;

	return { _id , name , description , created_at , price };

}



module.exports = {
	find,
	findManyAndPopulate,
	create,
	update,
	deleteObj,
	wrap,

};
