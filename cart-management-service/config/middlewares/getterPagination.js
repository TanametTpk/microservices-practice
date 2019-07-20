// for import files

module.exports = function( req, res, next ) {

		try {

			req._page = parseInt(req.params.page) - 1;
			req._size = parseInt(req.query._size);

			delete req.params.page;
			delete req.query._size

	    return next();

		} catch (err){
			return res.preconditionFailed();
		}

};
