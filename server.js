var express = require('express');
var app = express()
var port = process.env.PORT || 1337;
app.use('/', function(req, res, next) {
    res.send('Hello World' +  process.version)
})

app.listen(port, function() {
    console.log('Server running');
})
