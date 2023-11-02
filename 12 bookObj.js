const book = {
    title: "Путешествия",
    author: "Д. Роуди",
    year: 2023,
    
    // Метод для получения названия книги
    getTitle: function() {
      return this.title;
    },
    
    // Метод для получения имени автора
    getAuthor: function() {
      return this.author;
    },
    
    // Метод для получения года издания
    getYear: function() {
      return this.year;
    },
    
    // Метод для изменения названия книги
    setTitle: function(newTitle) {
      this.title = newTitle;
    },
    
    // Метод для изменения имени автора
    setAuthor: function(newAuthor) {
      this.author = newAuthor;
    },
    
    // Метод для изменения года издания
    setYear: function(newYear) {
      this.year = newYear;
    }
  };
  
  // Пример использования методов объекта:
  console.log("Название книги:", book.getTitle());
  console.log("Автор книги:", book.getAuthor());
  console.log("Год издания:", book.getYear());
  
  // меняем поля свойства объекта
  book.setTitle("Новые путешествия");
  book.setAuthor("Н. Доуди");
  book.setYear(2025);
  
  console.log("Название книги (после изменения):", book.getTitle());
  console.log("Автор книги (после изменения):", book.getAuthor());
  console.log("Год издания (после изменения):", book.getYear());
  