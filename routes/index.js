var express = require("express");
var router = express.Router();
const faker = require("faker");
const getOne = require("../utilities/getOne");
const getMany = require("../utilities/getMany");
const getResume = require("../utilities/getResume");
const getImage = require("../utilities/getImage");

/* GET home page. */
router.get("/", (req, res, next) => {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const email = faker.internet.email();
	const address = faker.address.streetAddress();
	const city = faker.address.city();
	const state = faker.address.state();
	const zip = faker.address.zipCode();
	const image = faker.internet.avatar();
	const phone = faker.phone.phoneNumber();

	res.send({
		lastName,
		firstName,
		email,
		address,
		city,
		state,
		zip,
		image,
		phone
	});
});

router.get("/csv", (req, res, next) => {
	res.send(getOne());
});

router.get("/csv/:number", (req, res, next) => {
	res.send(getMany(req.params.number));
});

router.get("/resume", (req, res, next) => {
	res.send(getResume());
});

router.get("/image", (req, res, next) => {
	res.send(getImage());
});

module.exports = router;
