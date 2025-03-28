
class Animal {
    constructor(name, species, habitat) {
        this.name = name;
        this.species = species;
        this.habitat = habitat;
    }

    getInfo() {
        return `${this.name} არის ${this.species}, რომელიც ცხოვრობს ${this.habitat}-ში.`;
    }
}


class Mammal extends Animal {
    constructor(name, species, habitat, isWarmBlooded = true) {
        super(name, species, habitat);
        this.isWarmBlooded = isWarmBlooded;
    }

    getInfo() {
        return super.getInfo() + ` ის თბილსისხლიანია.`;
    }
}

class Bird extends Animal {
    constructor(name, species, habitat, canFly) {
        super(name, species, habitat);
        this.canFly = canFly;
    }

    getInfo() {
        return super.getInfo() + ` ${this.canFly ? "მას შეუძლია ფრენა." : "მას არ შეუძლია ფრენა."}`;
    }
}


class Reptile extends Animal {
    constructor(name, species, habitat, isColdBlooded = true) {
        super(name, species, habitat);
        this.isColdBlooded = isColdBlooded;
    }

    getInfo() {
        return super.getInfo() + ` ის ცივსისხლიანია.`;
    }
}

class AnimalWiki {
    constructor() {
        this.animals = new Map();
    }

    addAnimal(animal) {
        this.animals.set(animal.name, animal);
    }

    getAnimalInfo(name) {
        return this.animals.has(name) ? this.animals.get(name).getInfo() : "ცხოველი ვერ მოიძებნა.";
    }

    listAllAnimals() {
        return [...this.animals.values()].map(animal => animal.getInfo());
    }
}


const wiki = new AnimalWiki();

const lion = new Mammal("ლომი", "Felidae", "სავანა");
const eagle = new Bird("არწივი", "Accipitridae", "მთები", true);
const snake = new Reptile("გველი", "Serpentes", "ჯუნგლები");

wiki.addAnimal(lion);
wiki.addAnimal(eagle);
wiki.addAnimal(snake);

console.log(wiki.getAnimalInfo("ლომი"));  


console.log(wiki.getAnimalInfo("არწივი"));  


console.log(wiki.getAnimalInfo("გველი"));  


console.log(wiki.listAllAnimals());
