class Person {
    #name; 
    #age;  

    constructor(name, age) {
        this.#name = name;
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }


    setAge(newAge) {
        if (newAge > 0) {
            this.#age = newAge;
        } else {
            console.log("ასაკი უნდა იყოს დადებითი რიცხვი!");
        }
    }
}

const person = new Person("Luka", 25);
console.log(person.getName()); 
console.log(person.getAge());  

person.setAge(30);
console.log(person.getAge()); 
