function customParseJSON(input) {
  // если тип входных данных - не строка, выбрасываем ошибку
  if (typeof input !== 'string') {
    throw new SyntaxError("Входные данные должны быть строкой JSON");
  }

  try {
      // если строка начинается и заканчивается не на фигурные скобки, выбрасываем ошибку
    if (input[0] !== '{' || input[input.length - 1] !== '}') {
      throw new SyntaxError("Неверный формат JSON: строка должна начинаться и заканчиваться символами '{' и '}'");
    }
// Разбиение JSON-строки на массив пар "ключ: значение".
    const pairs = input.slice(1, -1).split(',');
// Создание объекта, в который будут добавляться пары "ключ: значение".
    const obj = {};

    for (const pair of pairs) {
      // Перебор пар "ключ: значение".
      const [key, value] = pair.split(':');
// Разбиение пары на ключ и значение по символу ':'.
      if (!key || !value) {
         // Проверка наличия ключа и значения, иначе выбрасывается исключение.
        throw new SyntaxError("Неверный формат JSON: ожидалось пару 'ключ: значение'");
      }

      // Удаление лишних пробелов из ключа и значения.
      let trimmedKey = key.trim();
      let trimmedValue = value.trim();

      if ((trimmedKey[0] === '"' && trimmedKey[trimmedKey.length - 1] === '"') ||
          (trimmedKey[0] === "'" && trimmedKey[trimmedKey.length - 1] === "'")) {
        // Удаляем кавычки из ключа, если они есть
        trimmedKey = trimmedKey.slice(1, -1);
    
      }

      if ((trimmedValue[0] === '"' && trimmedValue[trimmedValue.length - 1] === '"') ||
          (trimmedValue[0] === "'" && trimmedValue[trimmedValue.length - 1] === "'")) {
        // Удаляем кавычки из значения, если они есть
        trimmedValue = trimmedValue.slice(1, -1);
      } else if (!isNaN(trimmedValue)) {
        // Если значение можно преобразовать в число, оставляем его как есть
        trimmedValue = parseFloat(trimmedValue);
      }
 // Добавление пары "ключ: значение" в объект 'obj'.
      obj[trimmedKey] = trimmedValue;
    }
// Возврат полученного объекта.
    return obj;
  } catch (error) {
    // Обработка ошибок и возврат информации об ошибке.
    throw new SyntaxError(`Ошибка разбора JSON: ${error.message}`);
  }
}

// Пример использования
const jsonString = '{ "name": "John Smith", "age": 30, "city": "New York" }';
try {
  const jsonObject = customParseJSON(jsonString);
  console.log(jsonObject);
} catch (error) {
  console.error(`Ошибка разбора JSON: ${error.message}`);
}