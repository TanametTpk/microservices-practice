module.exports = (socket) => {

	socket.on('join' , (data) => {

		try{

			socket.join(data.room)

		} catch (err) {

			console.log(err);

		}

	})

	socket.on('leave' , (data) => {

		try{

			socket.leave(data.room)

		}catch(err){

			console.log(err);

		}

	})

};
