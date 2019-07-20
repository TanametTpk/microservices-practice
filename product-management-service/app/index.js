const router = require( "express" ).Router();

const product = require( "./routes/product" );


router.use("/product", product);


module.exports = router;
