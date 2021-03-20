var express = require('express');
var router = express.Router();

var inventoryController = require('../controllers/inventoryControllerPtr18');

router.get('/inventoryPtr18', inventoryController.getInventoryPtr18);

module.exports = router;