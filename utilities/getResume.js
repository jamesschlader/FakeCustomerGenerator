const faker = require("faker");

const getResume = ()=>{
    let history = {};

    const jobs = Math.floor(Math.random() * 3) + 1;

    for (let i = 1; i < jobs + 1; i++){
        const job = {};
        job.company = faker.company.companyName();
        const oneDate = faker.date.past();
        const anotherDate = faker.date.past();
        job.from = oneDate <= anotherDate ? oneDate : anotherDate;
        job.to = oneDate <= anotherDate ? anotherDate : oneDate;
        job.description = faker.lorem.sentence();

        history[`job${i}`] = job;
    }

    return history
}

module.exports = getResume