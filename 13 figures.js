class Shape {
    constructor() {
      // Конструктор базового класса
    }
  
    // Метод для расчета площади (заглушка)
    calculateArea() {
      throw new Error("Метод calculateArea должен быть переопределен в подклассе");
    }
  
    // Метод для расчета периметра (заглушка)
    calculatePerimeter() {
      throw new Error("Метод calculatePerimeter должен быть переопределен в подклассе");
    }
  }
  
  // создание наследуемого класса прямоугольник
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
  
    calculatePerimeter() {
      return 2 * (this.width + this.height);
    }
  }
  
  // создание наследуемого класса окружность
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    calculateArea() {
        const area = Math.PI * this.radius ** 2;
        return area.toFixed(2);
    }
  
    calculatePerimeter() {
        const perimeter = 2 * Math.PI * this.radius;
        return perimeter.toFixed(2);
    }
  }
  
  // создание наследуемого класса треугольник
  class Triangle extends Shape {
    constructor(side1, side2, side3) {
      super();
      this.side1 = side1;
      this.side2 = side2;
      this.side3 = side3;
    }
  
    calculateArea() {
      // Используем полупериметр и формулу Герона для расчета площади треугольника
      const s = (this.side1 + this.side2 + this.side3) / 2;
      return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
    }
  
    calculatePerimeter() {
      return this.side1 + this.side2 + this.side3;
    }
  }
  
  // Примеры использования классов и их методов:
  const rectangle = new Rectangle(4, 5);
  console.log("Прямоугольник:");
  console.log("Площадь:", rectangle.calculateArea());
  console.log("Периметр:", rectangle.calculatePerimeter());
  
  const circle = new Circle(3);
  console.log("Круг:");
  console.log("Площадь:", circle.calculateArea());
  console.log("Периметр:", circle.calculatePerimeter());
  
  const triangle = new Triangle(3, 4, 5);
  console.log("Треугольник:");
  console.log("Площадь:", triangle.calculateArea());
  console.log("Периметр:", triangle.calculatePerimeter());
  