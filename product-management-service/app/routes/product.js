const middlewares = require( "../../config/middlewares" );
const product = require( "../controllers/product" );
const express = require( "express" );
const router = express.Router();

router.get("/", middlewares.getterPopulate , product.get);

router.get("/pages/:page", middlewares.getterPagination, middlewares.getterPopulate, product.getPagination);

router.get("/:objectId", middlewares.getterObjectId, middlewares.getterPopulate, product.getSpecific);

router.post("/", product.create);

router.post("/:objectId", middlewares.getterObjectId, product.update);

router.post("/:objectId/del", middlewares.getterObjectId, product.delete);





module.exports = router;
