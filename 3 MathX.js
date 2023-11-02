const MathX = (function() {
  // Приватные вспомогательные функции
  function isPrime(number) {
    // Функция для проверки, является ли число простым
    if (number <= 1) return false; // 0 и 1 не считаются простыми
    if (number <= 3) return true; // 2 и 3 считаются простыми

    if (number % 2 === 0 || number % 3 === 0) return false; // Проверка на делимость на 2 и 3

    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    
    return true; // Если не нашли делителей, число простое
  }
    return {
      // Публичные методы
      //  Реализация вычисления N-го числа в ряду Фибоначчи
      fibonacciN: function(n) {
        if (n <= 0) return 0; // Для отрицательных значений возвращаем 0
        if (n === 1) return 1; // Первое число в ряду Фибоначчи
        let a = 0, b = 1; // инициализируем два первых числа ряда Фибоначчи
        for (let i = 2; i <= n; i++) { // цикл, который будет выполняться от 2 до N. начинаем с 2, 
                                   // так как первые два числа в ряду Фибоначчи уже известны (0 и 1).
          [a, b] = [b, a + b]; // деструктуризация массива, которая обновляет значения переменных a и b согласно ряду Фибоначчи
        }
        return b; // По завершении цикла возвращаем переменную b, которая теперь 
                 // содержит N-ое число в ряду Фибоначчи.
      },
  
      // Вычисление всех чисел в ряду Фибоначчи до числа N
      fibonacciUpToN: function(n) {
        const result = []; // объявляем массив, куда будем добавлять числа Фибоначчи, 
                          // которые удовлетворяют условию (меньше или равны n).
        let a = 0, b = 1; // инициализируем два первых числа ряда Фибоначчи
        while (a <= n) { // цикл будет выполняться до тех пор, пока a не станет равно n
          result.push(a); // На каждой итерации цикла мы добавляем текущее значение a в массив result. 
                     // Это делается для сохранения всех чисел Фибоначчи, которые соответствуют условию
          [a, b] = [b, a + b]; // деструктуризация массива, которая обновляет значения переменных a и b согласно ряду Фибоначчи
        }
        return result; // По завершении цикла мы возвращаем массив result, который содержит все числа Фибоначчи, 
                       // которые меньше или равны n.
      },
  
      // Реализация вычисления N-го простого числа
      primeN: function(n) {
        if (n < 1) return undefined; // Для некорректных значений возвращаем undefined
        let count = 0; // объявляем счетчик простых чисел
        let currentNumber = 2; // Эта переменная представляет текущее число, которое будем проверять на простоту.
        while (count < n) { //цикл, который будет выполняться до тех пор, пока не будет найдено n простых чисел.
          if (isPrime(currentNumber)) { // На каждой итерации цикла проверяем, является ли currentNumber простым числом, 
            // используя функцию isPrime. Если currentNumber является простым числом, то увеличиваем счетчик count.
            count++;
          }
          currentNumber++; // увеличиваем currentNumber на 1 на каждой итерации, чтобы проверить следующее число.
        }
        return currentNumber - 1; // Возвращаем N-ное простое число
        // По завершении цикла мы возвращаем currentNumber - 1. Это делается потому, что после завершения 
        // цикла currentNumber будет указывать на следующее число после найденного n-ного простого числа, 
        // поэтому вычитаем 1, чтобы вернуть само n-ное простое число.
      },
  
      // Реализация вычисления всех простых чисел до числа N
      primesUpToN: function(n) {
        const result = []; // объявляем массив, куда будем записывать простые чисда до N
        let currentNumber = 2; // Эта переменная представляет текущее число, которое будем проверять на простоту.
        while (currentNumber <= n) { // цикл будет длиться до тех пор, пока текущее число не станет равно N
          if (isPrime(currentNumber)) { // если текущее число простое
            result.push(currentNumber); // то добавляем его в конец массива result
          }
          currentNumber++; // увеличиваем currentNumber на 1 на каждой итерации, чтобы проверить следующее число.
        }
        return result; // Возвращаем массив всех простых чисел, идущих до числа N
      }
    };
  })();
  
  // Примеры использования MathX
  console.log(MathX.fibonacciN(5)); // Выведет 5
  console.log(MathX.fibonacciUpToN(20)); // Выведет [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(MathX.primeN(10)); // Выведет 29
  console.log(MathX.primesUpToN(20)); // Выведет [2, 3, 5, 7, 11, 13, 17, 19]
  