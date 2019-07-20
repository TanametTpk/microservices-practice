const router = require( "express" ).Router();

const cart = require( "./routes/cart" );


router.use("/cart", cart);


module.exports = router;
