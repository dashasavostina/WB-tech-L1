function assessPasswordComplexity(password) {
    let score = 0;
  
     // Проверяем длину пароля
    if (password.length < 8) {
      score += 1;
    } else if (password.length < 12) {
      score += 2;
    } else {
      score += 3;
    }
  
    // Проверяем наличие букв верхнего и нижнего регистров
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      score += 2;
    }
  
    // Проверяем наличие цифр
    if (/\d/.test(password)) {
      score += 2;
    }
  
   // Проверяем наличие специальных символов
    if (/[\W_]/.test(password)) {
      score += 2;
    }
  
    // вывод оценки
    if (score <= 2) {
      console.log("Оценка сложности пароля: Очень слабый");
    } else if (score <= 5) {
      console.log("Оценка сложности пароля: Слабый");
      console.log("Рекомендации: Используйте более длинный пароль с разными символами и регистрами.");
    } else if (score <= 8) {
      console.log("Оценка сложности пароля: Умеренный");
      console.log("Рекомендации: Добавьте еще символов и увеличьте длину пароля.");
    } else {
      console.log("Оценка сложности пароля: Сильный");
    }
  }
  
  // пример
  const password = prompt("Введите пароль: ");
  assessPasswordComplexity(password);
  
  