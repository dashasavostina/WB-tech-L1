// Создаем модуль с функцией changeEnding
const ChangeEndingModule = (function () {
    // Определяем функцию, которая будет изменять окончание слова в зависимости от числа
    function changeEnding(number, words) {
     // Определяем массив случаев изменения окончания
      const cases = [2, 0, 1, 1, 1, 2];
      return words[
        // Проверяем особые случаи чисел от 11 до 19
        number % 100 > 4 && number % 100 < 20
          ? 2
         // или определяем по правилам, какое окончание использовать на основе последней цифры числа.
          : cases[number % 10 < 5 ? number % 10 : 5]
      ];
    }
  
    // Экспортируем функцию, чтобы её можно было использовать извне
    return {
      changeEnding,
    };
  })();
  
  // Пример использования модуля
  const messagesCount = 11;
  const usersCount = 101;
  
  const messagesEnding = ChangeEndingModule.changeEnding(messagesCount, [
    "сообщение",
    "сообщения",
    "сообщений",
  ]);
  
  const usersEnding = ChangeEndingModule.changeEnding(usersCount, [
    "пользователь",
    "пользователя",
    "пользователей",
  ]);
  
  console.log(`${messagesCount} ${messagesEnding}`);
  console.log(`${usersCount} ${usersEnding}`);
  