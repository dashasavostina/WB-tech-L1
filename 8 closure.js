// функция, которая принимает в кач-ве параметра массив функций 
function executeFunctionsAndGetResults(functions) {
    // возвращает другую функцию (замыкание)
    return function() {
        // объявим результирующий массив, куда запишутся результаты вызовов функций из массива
        const results = [];
       // начинаем перебирать массив функций, который был передан в качестве параметра
        for (const func of functions) {
            // при вызове каждой функции ее результат добавляется в массив
            results.push(func());
        }
        // Возвращается замыкание, которое при вызове выполнит все функции из массива и вернет массив результатов.
        return results;
    };
}

// Пример использования
const function1 = () => 1;
const function2 = () => 2;
const function3 = () => 3;

// создается массив из простых функций
const functionsArray = [function1, function2, function3];

// и передается в функцию замыкания в кач-ве аргумента
const executeAllFunctions = executeFunctionsAndGetResults(functionsArray);
const results = executeAllFunctions();

console.log(results); // Вывод результатов вызова каждой функции: [1, 2, 3]
