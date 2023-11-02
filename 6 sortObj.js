const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Eve', age: 22 }
];

// Функция сравнения для сортировки
function comparePeople(a, b) {
    // Сначала сравниваем возраст
    if (a.age < b.age) {
        return -1; // a идет перед b
    } else if (a.age > b.age) {
        return 1; // b идет перед a
    } else {
        // Если возрасты равны, сравниваем по полю name
        return a.name.localeCompare(b.name);
    }
}

// Сортировка массива
people.sort(comparePeople);

// Результат
console.log(people);
