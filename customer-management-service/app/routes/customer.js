const middlewares = require( "../../config/middlewares" );
const customer = require( "../controllers/customer" );
const express = require( "express" );
const router = express.Router();

router.get("/", middlewares.getterPopulate , customer.get);

router.get("/pages/:page", middlewares.getterPagination, middlewares.getterPopulate, customer.getPagination);

router.get("/:objectId", middlewares.getterObjectId, middlewares.getterPopulate, customer.getSpecific);

router.post("/", customer.create);

router.post("/:objectId", middlewares.getterObjectId, customer.update);

router.post("/:objectId/del", middlewares.getterObjectId, customer.delete);

router.post("/validate", customer.validate);




module.exports = router;
