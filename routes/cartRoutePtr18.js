var express = require('express');
var router = express.Router();

var cartController = require('../controllers/cartControllerPtr18');

router.get('/', cartController.getCartPtr18);
router.post('/', cartController.addItemPtr18);
router.delete('/', cartController.removeItemPtr18);
router.post('/checkoutPtr18', cartController.checkoutPtr18);

module.exports = router;