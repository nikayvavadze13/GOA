    class Animal {
    constructor(name, species, sound) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }
  
    makeSound() {
      return `${this.name} (${this.species}) says: "${this.sound}"`;
    }
  }
  

  class Car {
    constructor(brand, model, color) {
      this.brand = brand;
      this.model = model;
      this.color = color;
    }
  
    drive() {
      return `The ${this.color} ${this.brand} ${this.model} is driving.`;
    }
  }
  

  class Human {
    constructor(name, age, occupation) {
      this.name = name;
      this.age = age;
      this.occupation = occupation;
    }
  
    introduce() {
      return `Hi, I'm ${this.name}, a ${this.age}-year-old ${this.occupation}.`;
    }
  }
  

  const animal1 = new Animal("Leo", "Lion", "Roar");
  const animal2 = new Animal("Bella", "Dog", "Woof");
  const animal3 = new Animal("Molly", "Cat", "Meow");
  

  const car1 = new Car("Toyota", "Corolla", "Red");
  const car2 = new Car("Tesla", "Model S", "Black");
  const car3 = new Car("Ford", "Mustang", "Blue");

  const human1 = new Human("Alice", 25, "Doctor");
  const human2 = new Human("Bob", 30, "Engineer");
  const human3 = new Human("Charlie", 22, "Student");
  

  console.log(animal1.makeSound());
  console.log(animal2.makeSound());
  console.log(animal3.makeSound());
  
  console.log(car1.drive());
  console.log(car2.drive());
  console.log(car3.drive());
  
  console.log(human1.introduce());
  console.log(human2.introduce());
  console.log(human3.introduce());
  