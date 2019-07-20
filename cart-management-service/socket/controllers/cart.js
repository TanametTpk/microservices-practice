const Cart = require('../../app/classes/cart');

module.exports = (socket) => {

	socket.on('create-cart' , async(data) => {

		try{

			let data = await Cart.create(data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('update-cart' , async(data) => {

		try{

			let target = await Cart.find({ _id : data._objectId });
			let data = await Cart.update(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('delete-cart' , async(data) => {

		try{

			let target = await Cart.find({ _id : data._objectId });
			let data = await Cart.delete(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	

};
