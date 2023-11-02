// Массив функций
const functions = [
    // в каждой функции идет действие самой функции + Здесь увеличивается значение переменной currentIndex на 1, 
    // чтобы указать, что следующая функция должна быть вызвана при следующем вызове callNextFunction. 
    // Это обеспечивает переход к следующей функции в массиве при следующем вызове callNextFunction. 
    () => {
        console.log(`Функция ${currentIndex + 1}`);
        currentIndex++;
        // вызывается функция callNextFunction  для перехода к следующей функции в массиве функций
        callNextFunction();
    },
    () => {
        console.log(`Функция ${currentIndex + 1}`);
        currentIndex++;
        callNextFunction();
    },
    () => {
        console.log(`Функция ${currentIndex + 1}`);
        currentIndex++;
        callNextFunction();
    }

];

let currentIndex = 0;

// Функция, которая вызывает следующую функцию в массиве
function callNextFunction() {
    // до тех пор, пока текущий порядковый номер функции меньше длины массива функций
    if (currentIndex < functions.length) {
        // вызывается функция с текущим порядковым номером
        functions[currentIndex]();
    }
}

// Начнем с вызова первой функции
callNextFunction();


