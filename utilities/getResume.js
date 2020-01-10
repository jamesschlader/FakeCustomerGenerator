const faker = require("faker");

const getResume = () => {
	const number = Math.floor(Math.random() * 5 + 1);
	let resumes = [];

	for (let i = 0; i < number; i++) {
		const job = {};
		job.company = faker.company.companyName();
		const oneDate = faker.date.past();
		const anotherDate = faker.date.past();
		job.fromValue = oneDate <= anotherDate ? oneDate : anotherDate;
		job.toValue = oneDate <= anotherDate ? anotherDate : oneDate;
		job.description = faker.lorem.sentence();
		resumes.push(job);
	}
	return resumes;
};

module.exports = getResume;
