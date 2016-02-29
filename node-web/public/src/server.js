var express = require('express');
var app = express();
app.get('/hello', function(req,res){
    res.end("hello express");
})
app.listen(8888);
console.log('express server started at 8888')
