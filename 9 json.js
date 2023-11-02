function customStringify(obj) {
  // Инициализируем переменную jsonString как пустую строку, в которую мы будем собирать JSON-подобную строку
  let jsonString = '{';
   // Флаг isFirstProperty используется для определения, является ли текущее свойство первым в объекте
  let isFirstProperty = true;
// Проходимся по всем свойствам объекта
  for (const key in obj) {
    // проверка наличия собственного (не унаследованного) свойства key в объекте obj. 
    if (obj.hasOwnProperty(key)) {
      // Если это не первое свойство, добавляем запятую и пробел перед следующим свойством
      if (!isFirstProperty) {
        jsonString += ', ';
      }
      isFirstProperty = false;
// Добавляем имя свойства в строку JSON и двоеточие
      jsonString += `"${key}":`;
// Получаем значение текущего свойства
      const value = obj[key];
      // Если значение - объект, рекурсивно вызываем customStringify для сериализации вложенного объекта
      if (typeof value === 'object' && value !== null) {
        jsonString += customStringify(value); // Рекурсивный вызов для вложенных объектов
      }
      // Если значение - строка, заключаем его в двойные кавычки
      else if (typeof value === 'string') {
        jsonString += `"${value}"`;
      } 
      // В противном случае добавляем значение как есть (число, булево и так далее)
      else {
        jsonString += value;
      }
    }
  }
 // Завершаем создание объекта JSON-подобной строки
  jsonString += '}';
   // Возвращаем полученную JSON-подобную строку
  return jsonString;
}

// Создаем объект jsonData
const jsonData = {
  name: 'John',
  age: 30,
  city: 'New York'
};
// Вызываем customStringify для объекта jsonData и сохраняем результат в переменной jsonString
const jsonString = customStringify(jsonData);
console.log(jsonString);

  