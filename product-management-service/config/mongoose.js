const mongoose = require( "mongoose" );
const config = require("./env/database.env");

module.exports = function(app) {

  // assign uri
  db_auth = (config.username + config.password).length === 0 ? "" : config.username + ":" + config.password + "@";
  // uri = "mongodb://" + db_auth + config.hostname + "/" + config.database_name;
  let uri = 'mongodb://product-db:27017'

  require('../app/models');

	mongoose.connect(uri)
	mongoose.Promise = global.Promise;

	if ( app ) app.set( "mongoose", mongoose );

}
