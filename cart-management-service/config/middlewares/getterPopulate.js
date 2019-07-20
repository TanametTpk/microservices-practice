// for import files

module.exports = function( req, res, next ) {

		req._populate = req.query._populate;
		delete req.query._populate;

    return next();

};
