exports.getCartPtr18 = function(req, res){
    
}

exports.addItemPtr18 = function(req, res){
    var newItem = {"sku":req.body.sku, "name":req.body.name, "price": req.body.price, "quantity": req.body.quantity};

    res.header("Content-type: application/json");
    res.send(newItem);
}