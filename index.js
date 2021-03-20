const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parsser');

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.listen(port, () =>{
    console.log(`Web Service is listening on port ${port}`);
});