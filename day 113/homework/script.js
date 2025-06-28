class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get initials() {
      return `${this.firstName[0]}${this.lastName[0]}`.toUpperCase();
    }
  }
  
  const person = new Person("John", "Doe");
  console.log(person.initials); 
  