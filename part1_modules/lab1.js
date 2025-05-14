const _ = require('lodash');
const moment = require('moment');

// Sample holidays list
const holidays = [
    { name: "Christmas", date: "2025-12-25" },
    { name: "Canada Day", date: "2025-07-01" },
    { name: "New Year", date: "2026-01-01" }
];

// Function to calculate days remaining
holidays.forEach(holiday => {
    const today = moment();
    const holidayDate = moment(holiday.date);
    const daysLeft = holidayDate.diff(today, 'days');
    console.log(`${holiday.name} is in ${daysLeft} days`);
});

// Random holiday using lodash
const randomHoliday = _.sample(holidays);
console.log(`Random holiday: ${randomHoliday.name} on ${randomHoliday.date}`);

// Indexes of specific holidays
const names = holidays.map(h => h.name);
console.log("Index of Christmas:", _.indexOf(names, "Christmas"));
console.log("Index of Canada Day:", _.indexOf(names, "Canada Day"));
