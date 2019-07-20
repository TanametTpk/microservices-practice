const router = require( "express" ).Router();

const customer = require( "./routes/customer" );


router.use("/customer", customer);


module.exports = router;
