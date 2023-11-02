const moment = require('moment');

// Функция для форматирования даты
function formatDate(date, format) {
  return moment(date).format(format);
}

// Фругция для вычисления разницы между двумя датами
function dateDiff(date1, date2, unit) {
  return moment(date1).diff(moment(date2), unit);
}

module.exports = {
  formatDate,
  dateDiff,
  moment
};
