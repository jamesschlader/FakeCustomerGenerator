const faker = require("faker");

const getOne = () => {
	const firstName = faker.name.firstName();
	const lastName = faker.name.lastName();
	const email = faker.internet.email();
	const address = faker.address.streetAddress();
	const city = faker.address.city();
	const state = faker.address.state();
	const zip = faker.address.zipCode();
	const image = faker.internet.avatar();
	const phone = faker.phone.phoneNumber();
	return `"${lastName}, ${firstName}", "${email}", "${image}", "${address}", "${city}, ${state}", ${zip}, ${phone}\n`;
};

module.exports = getOne;
