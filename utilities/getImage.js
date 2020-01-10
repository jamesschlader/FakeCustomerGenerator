const faker = require("faker");

const getImage = () => {
	return faker.internet.avatar();
};

module.exports = getImage;
