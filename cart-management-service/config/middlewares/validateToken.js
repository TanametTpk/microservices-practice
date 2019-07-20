const jwt = require('jsonwebtoken');
const config = require('../env/awt.config');

module.exports = function( req, res, next ) {
    let token = req.body.token || req.headers[ "authorization" ];
		if(req.headers[ "authorization" ]) token = token.split(' ')[1];

    if ( token ) {
        return jwt.verify( token, config.awt_secret, function( err, decoded ) {
            if ( err ) {
                return res.unauthorized({
                    message: "Failed to authenticate token.",
                });
            }
            req.user = decoded;
            return next();
        } );
    }
    return res.unauthorized();
};
