var express = require('express');
var router = express.Router();

/* GET customer listing. */
router.get('/', function(req, res, next) {
    console.log("\nHit the customer route...\n")
  res.send('Gonna get you a customer...');
});

module.exports = router;
