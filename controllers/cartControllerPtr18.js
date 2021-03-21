const e = require('express');
const { inventory } = require('../models/inventoryPtr18');

let cart = [ {
    "sku": "57881-334",
    "name": "Sugar - Crumb",
    "price": 34.99,
    "quantity": 4
}, {
    "sku": "67938-0993",
    "name": "Fish - Halibut, Cold Smoked",
    "price": 17.99,
    "quantity": 1
}, {
    "sku": "52125-038",
    "name": "Muffin Batt - Ban Dream Zero",
    "price": 2.99,
    "quantity": 2
}];

exports.getCartPtr18 = function(req, res){
    res.header("Content-type: application/json");
    res.send(cart);
}

exports.addItemPtr18 = function(req, res){
    var itemToAdd = req.body.sku;

    inventory.forEach(item =>{
        if(item.sku == itemToAdd){
            if(item.quantity > 0){
                if(cart.filter(i => i.sku == itemToAdd).length >0){
                    var cartItem = cart.find(i => i.sku == itemToAdd);
                    cartItem.quantity++;
                }else{
                    var newItem = JSON.parse(JSON.stringify(item));
                    newItem.quantity=1;
                    cart.push(newItem);
                }
                item.quantity--;
            }
        }else{
           
        }
    })

    res.header("Content-type: application/json");
    res.send(cart);
}


exports.removeItemPtr18 = function(req, res){
    var itemToDelete = req.body.sku;

    deleteItem = cart.find(e => e.sku == itemToDelete);
    if(deleteItem){
        inventory.find(item => item.sku == itemToDelete).quantity += deleteItem.quantity;
        const index = cart.indexOf(deleteItem);
        cart.splice(index, 1);
    }
    res.header("Content-type: application/json");
    res.send(cart);
}

exports.checkoutPtr18 = function(req, res){
    cart=[];

    res.header("Content-type: application/json");
    res.send(cart);
}