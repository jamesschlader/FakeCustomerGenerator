const faker = require("faker");

const getResume = ()=>{
   
    const job = {};
    job.company = faker.company.companyName();
    const oneDate = faker.date.past();
    const anotherDate = faker.date.past();
    job.from = oneDate <= anotherDate ? oneDate : anotherDate;
    job.to = oneDate <= anotherDate ? anotherDate : oneDate;
    job.description = faker.lorem.sentence();

    return job
}

module.exports = getResume