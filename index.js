const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

const inventoryRoute = require('./routes/inventoryRoutePtr18');
const cartRoute = require('./routes/cartRoutePtr18');

app.use('/inventoryPtr18', inventoryRoute);
app.use('/cartPtr18', cartRoute);

app.listen(port, () =>{
    console.log(`Web Service is listening on port ${port}`);
});