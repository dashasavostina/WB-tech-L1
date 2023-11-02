// Определение класса ListNode, представляющего элемент односвязного списка
class ListNode {
    constructor(value) {
        this.value = value; // значение текущего элемента
        this.next = null; // Ссылка на следующий элемент
    }
}

// Функция jsonToLinkedList для создания односвязного списка из JSON
function jsonToLinkedList(json) {
    if (json.length === 0) {
        return null; // Возврат null, если JSON-массив пустой
    }

    const head = new ListNode(json[0].value); // Создание головы списка
    let current = head; // Указатель на текущий элемент (начинаем с головы)

    for (let i = 1; i < json.length; i++) {
        const newNode = new ListNode(json[i].value); // Создание нового элемента
        current.next = newNode; // Установка ссылки на следующий элемент
        current = newNode; // Перемещение указателя на новый элемент
    }

    return head; // Возврат головы списка
}

// Функция linkedListToObject для преобразования списка в объект
function linkedListToObject(linkedList) {
    let obj = linkedList; // Исходный связный список
    let result = {}; // Результирующий объект
    let current = result; // Указатель на текущий элемент в объекте

    while (obj) {
        current.value = obj.value; // Установка значения из связного списка в объект
        obj = obj.next; // Перемещение указателя в связном списке
        if (obj) {
            current.next = {}; // Создание нового объекта для следующего элемента
            current = current.next; // Перемещение указателя в объекте
        }
    }

    return result; // Возврат результирующего объекта
}

// Пример использования
const jsonStr = '[{"value": 1}, {"value": 2}, {"value": 3}]';
const linkedList = jsonToLinkedList(JSON.parse(jsonStr)); // Создание связного списка

const linkedListObject = linkedListToObject(linkedList); // Преобразование в желаемую структуру объекта

console.log(JSON.stringify(linkedListObject, null, 2)); // Вывод результата в виде JSON-строки
