const faker = require("faker");

const getImage = () => {
	return { image: faker.internet.avatar() };
};

module.exports = getImage;
