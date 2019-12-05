var express = require('express');
var router = express.Router();
const faker = require("faker");
const getOne = require("../utilities/getOne")
const getMany = require("../utilities/getMany")

/* GET home page. */
router.get('/', (req, res, next) => {
  const name = faker.name.findName();
  const email = faker.internet.email();
  const address = faker.address.streetAddress();
  const city = faker.address.city();
  const state = faker.address.state();
  const zip = faker.address.zipCode();
  const image = faker.internet.avatar()

  res.send({name, email, address, city, state, zip, image});
});

router.get("/csv", (req, res, next) =>{
  res.send(getOne())
})

router.get("/csv/:number", (req, res, next) => {
  res.send(getMany(req.params.number))
})

module.exports = router;
