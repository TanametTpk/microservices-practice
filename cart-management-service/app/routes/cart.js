const middlewares = require( "../../config/middlewares" );
const cart = require( "../controllers/cart" );
const express = require( "express" );
const router = express.Router();

router.get("/", middlewares.getterPopulate , cart.get);

router.get("/pages/:page", middlewares.getterPagination, middlewares.getterPopulate, cart.getPagination);

router.get("/:objectId", middlewares.getterObjectId, middlewares.getterPopulate, cart.getSpecific);

router.post("/", cart.create);

router.post("/:objectId", middlewares.getterObjectId, cart.update);

router.post("/:objectId/del", middlewares.getterObjectId, cart.delete);





module.exports = router;
