const { formatDate,dateDiff, moment } = require("./16 module");

const currentDate = new Date();
const pastDate = moment().subtract(7, 'days').toDate();

const formattedDate = formatDate(currentDate, 'YYYY-MM-DD');
const daysDifference = dateDiff(currentDate, pastDate, 'days');

console.log('Current Date:', formattedDate);
console.log('Days Difference:', daysDifference);
