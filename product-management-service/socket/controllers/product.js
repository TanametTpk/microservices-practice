const Product = require('../../app/classes/product');

module.exports = (socket) => {

	socket.on('create-product' , async(data) => {

		try{

			let data = await Product.create(data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('update-product' , async(data) => {

		try{

			let target = await Product.find({ _id : data._objectId });
			let data = await Product.update(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('delete-product' , async(data) => {

		try{

			let target = await Product.find({ _id : data._objectId });
			let data = await Product.delete(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	

};
