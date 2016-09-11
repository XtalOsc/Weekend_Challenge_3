var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var calc = require('../modules/calc.js');

app.listen(process.env.PORT || 3000, function(){
  console.log('server is listening on port 3000');
});//end server listening

app.get ('/', function(req,res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/index.html'));
}); //end base url

app.use(express.static('public'));

app.post('/calc',urlencodedParser,function(req, res){
  console.log('calc hit ', req.body);
  var result;
  switch(req.body.type){
    case "addIn":
    result={total: calc.add(req.body.xValue, req.body.yValue)};
    break;
    case "subtractIn":
    result={total: calc.sub(req.body.xValue, req.body.yValue)};
    break;
    case "multiplyIn":
    result={total: calc.mult(req.body.xValue, req.body.yValue)};
    break;
    case "divideIn":
    result={total: calc.div(req.body.xValue, req.body.yValue)};
    break;

  }
  res.send (result)


});//end texter
