var express = require('express');
var router = express.Router();

function authorize(req, res, next) {
  if (req.user === 'farmer') {
   next()
  } else {
    console.log(req.url);
    res.status(403).send('Forbidden')
  }
}

router.get('/brands', authorize, function(req, res){
  res.send('Audi, BMW, Mercedes');
})

router.get('/models', function(req, res){
  res.send('Audi Q7, BMW X5, Mercedes GL');
})


module.exports = router;
