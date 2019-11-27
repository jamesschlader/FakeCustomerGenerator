var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("\nhit the home route...\n")
  res.render('index', { title: 'Customer Generator' });
});

module.exports = router;
