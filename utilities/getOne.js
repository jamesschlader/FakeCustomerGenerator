const faker = require("faker");

const name = faker.name.findName();
const firstName = name.slice(0, name.lastIndexOf(" "));
const lastName = name.slice(name.lastIndexOf(" ") + 1);
const email = faker.internet.email();
const address = faker.address.streetAddress();
const city = faker.address.city();
const state = faker.address.state();
const zip = faker.address.zipCode();
const image = faker.internet.avatar()

module.exports = `"${firstName}, ${lastName}", "${email}", "${image}", "${address}", "${city}, ${state}", ${zip}\n`