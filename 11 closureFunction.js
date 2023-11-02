function outerFunction() {
    // outerFunction создает переменную outerVariable
    let outerVariable = "Я видима во внешней и внутренней функции";
  
    function innerFunction() {
      console.log(outerVariable);
    }
  // возвращаем внутреннюю функцию
    return innerFunction;
  }
  
  // Создаем экземпляр innerFunction, который сохраняет доступ к outerVariable
  let myClosure = outerFunction();
  
  // Вызываем внутреннюю функцию, которая имеет доступ к outerVariable
  myClosure(); // Выведет: "Я видима во внешней и внутренней функции"
  