const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

let carts = [];

const inventoryRoute = require('./routes/inventoryRoutePtr18');

app.use('/inventoryPtr18', inventoryRoute);

app.listen(port, () =>{
    console.log(`Web Service is listening on port ${port}`);
});