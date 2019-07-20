const controller = require('./controllers');

module.exports = function(server){

	const io = require('socket.io')(server);

	// user connected
	io.on('connection' , function(socket){

		// setup controller
		controller.cart(socket)

		socket.on('disconnect' , function(){
			// user disconnected
		})

	})

	return io

}
