const express = require("express")
const http = require("http")
const middleware = require("./middlewares")

module.exports = function(){

	var app = express();
	const server = http.createServer(app);

	app.use(express.json());
	
	app.use(middleware.customResponses);
	
	app.use(middleware.logger);
	


	require( "./mongoose" )(app);
	app.use( "/api/v1" , require( "../app" ));


	return {
		app:app,
		server:server,
	};
}
