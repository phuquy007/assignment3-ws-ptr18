const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

const corsOptions = {
    origin: '*'
}

app.use(cors());

app.use(bodyParser.json());

const inventoryRoute = require('./routes/inventoryRoutePtr18');
const cartRoute = require('./routes/cartRoutePtr18');

app.use('/inventoryPtr18',cors(corsOptions), inventoryRoute);
app.use('/cartPtr18',cors(corsOptions), cartRoute);


app.listen(port, () =>{
    console.log(`Web Service is listening on port ${port}`);
});