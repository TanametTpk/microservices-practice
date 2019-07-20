// for import files

module.exports = function( req, res, next ) {

    let objectId = req.params.objectId;
		delete req.params.objectId;

		req._objectId = objectId
    return next();

};
