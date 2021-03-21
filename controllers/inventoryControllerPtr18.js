exports.getInventoryPtr18 = function(req, res){
    let inventory = require('../models/inventoryPtr18').inventory;
    res.header("Content-type: application/json");
    res.send(inventory);
}
