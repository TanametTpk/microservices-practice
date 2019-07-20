const Customer = require('../../app/classes/customer');

module.exports = (socket) => {

	socket.on('create-customer' , async(data) => {

		try{

			let data = await Customer.create(data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('update-customer' , async(data) => {

		try{

			let target = await Customer.find({ _id : data._objectId });
			let data = await Customer.update(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('delete-customer' , async(data) => {

		try{

			let target = await Customer.find({ _id : data._objectId });
			let data = await Customer.delete(target , data);

			

		} catch (err) {

			console.log(err);

		}

	})

	

};
