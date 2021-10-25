const express = require('express');
const app = express();
const hostname = "127.0.0.1";
const port = 3000;



app.get('/', function (req, res) {
    res.send('Hello World!')
});
console.log('First');
console.log('Second');
setTimeout(function () {
    console.log('First');
}, 3000);
console.log('Second');
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});
var square = require('./square.js');
var wiki = require('./wiki.js');
// ...
app.use('/wiki', wiki);
;
