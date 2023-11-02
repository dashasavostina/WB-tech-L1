async function someAsyncOperation1() {
    return new Promise((resolve, reject) => {
      // Моделируем асинхронную операцию, например, ожидание 1 секунды перед разрешением промиса.
      setTimeout(() => {
        resolve(42); // В этом примере возвращаем 42 в качестве результата.
      }, 1000);
    });
  }

async function someAsyncOperation2() {
    return new Promise((resolve, reject) => {
      // Моделируем другую асинхронную операцию, например, ожидание 2 секунды перед разрешением промиса.
      setTimeout(() => {
        resolve(10); // В этом примере возвращаем 10 в качестве результата.
      }, 2000);
    });
  }
    

async function asyncFunction() {
    try {
      // Ожидаем выполнение асинхронной операции, например, чтение файла или запрос к серверу.
      const result1 = await someAsyncOperation1();
  
      // Ожидаем выполнение другой асинхронной операции.
      const result2 = await someAsyncOperation2();
  
      // Выполняем дополнительные операции с полученными результатами.
      const finalResult = result1 + result2;
  
      return finalResult; // Возвращаем результат.
    } catch (error) {
      // Обрабатываем ошибки, если они возникли в ходе выполнения асинхронных операций.
      console.error("Произошла ошибка:", error);
      throw error; // Можно выбросить ошибку дальше для обработки внешним кодом.
    }
  }
  
  // Пример вызова асинхронной функции и обработки её результата.
  asyncFunction()
    .then((result) => {
      console.log("Результат выполнения асинхронной функции:", result);
    })
    .catch((error) => {
      console.error("Ошибка в асинхронной функции:", error);
    });
  