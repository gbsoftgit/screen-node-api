const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/crud', { useNewUrlParser: true });

const app = express();
const port = 8000;
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));
app.use(express.static('public'))


// init router
const router = require('./routes')
app.use(router);

app.listen(port, () => {
    console.log("We are live on http://localhost:" + port);
})
