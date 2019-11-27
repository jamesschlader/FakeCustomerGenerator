var express = require('express');
var router = express.Router();
const faker = require("faker");

/* GET customer listing. */
router.get('/', function(req, res, next) {

    const name = faker.name.findName();
    const email = faker.internet.email();
    const address = faker.address.streetAddress();
    const city = faker.address.city();
    const state = faker.address.state();
    const zip = faker.address.zipCode();
    const image = faker.internet.avatar()

    const returnObject = {
        name, email, address, city, state, zip, image
    }

  res.send(returnObject);
});

module.exports = router;
