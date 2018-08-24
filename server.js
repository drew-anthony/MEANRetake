const express = require("express");
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const server = app.listen(8000);

app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require("./server/config/mongoose");
require("./server/config/routes")(app);