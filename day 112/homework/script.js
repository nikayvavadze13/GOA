
class Book {
    constructor(title, author, genre) {
      this.title = title;
      this.author = author;
      this.genre = genre;
    }
  

    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, Genre: ${this.genre}`;
    }

    read() {
      return `Reading "${this.title}" by ${this.author}`;
    }
  

    get info() {
      return `${this.title} by ${this.author} is a ${this.genre} book.`;
    }
  }
  

  class AdventureBook extends Book {
    constructor(title, author, genre, adventureType) {
      super(title, author, genre);
      this.adventureType = adventureType;
      this._difficultyLevel = null;
      this.location = null;
    }

    getDetails() {
      return `Adventure Book: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Adventure Type: ${this.adventureType}`;
    }
  

    read() {
      return `${super.read()} This is an adventure story set in ${this.location || "unknown location"}.`;
    }
  
    setLocation(location) {
      this.location = location;
    }
  

    get difficultyLevel() {
      return this._difficultyLevel;
    }
  
    set difficultyLevel(level) {
      if (["Easy", "Medium", "Hard"].includes(level)) {
        this._difficultyLevel = level;
      } else {
        throw new Error("Invalid difficulty level");
      }
    }
  }
  
    class SatireBook extends Book {
    constructor(title, author, genre, targetSubject) {
      super(title, author, genre);
      this.targetSubject = targetSubject;
      this._impact = null;
      this.theme = null;
    }
  

    getDetails() {
      return `Satire Book: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Target Subject: ${this.targetSubject}`;
    }
  

    read() {
      return `${super.read()} This satire tackles the topic of ${this.targetSubject}.`;
    }
  

    setTheme(theme) {
      this.theme = theme;
    }
  

    get impact() {
      return this._impact;
    }
  
    set impact(level) {
      if (["Low", "Medium", "High"].includes(level)) {
        this._impact = level;
      } else {
        throw new Error("Invalid impact level");
      }
    }
  }
  

  class FantasyBook extends Book {
    constructor(title, author, genre, magicalElements) {
      super(title, author, genre);
      this.magicalElements = magicalElements;
      this._magicSystem = null;
      this.worldBuilding = null;
    }
  

    getDetails() {
      return `Fantasy Book: ${this.title}, Author: ${this.author}, Genre: ${this.genre}, Magical Elements: ${this.magicalElements}`;
    }
  

    read() {
      return `${super.read()} Dive into a world filled with ${this.magicalElements}.`;
    }
  

    setWorldBuilding(worldBuilding) {
      this.worldBuilding = worldBuilding;
    }
  

    get magicSystem() {
      return this._magicSystem;
    }
  
    set magicSystem(system) {
      if (["Elemental", "Rune-based", "Alchemy"].includes(system)) {
        this._magicSystem = system;
      } else {
        throw new Error("Invalid magic system");
      }
    }
  }
  

  const adventure = new AdventureBook("Into the Wild", "Jon Krakauer", "Adventure", "Survival");
  adventure.setLocation("Alaska");
  adventure.difficultyLevel = "Hard";
  
  console.log(adventure.getDetails());
  console.log(adventure.read());
  console.log(adventure.difficultyLevel);
  
  const satire = new SatireBook("Animal Farm", "George Orwell", "Satire", "Political Systems");
  satire.impact = "High";
  satire.setTheme("Revolution and Power");
  
  console.log(satire.getDetails());
  console.log(satire.read());
  console.log(satire.impact);
  
  const fantasy = new FantasyBook("The Hobbit", "J.R.R. Tolkien", "Fantasy", "Dragons and Magic");
  fantasy.magicSystem = "Elemental";
  fantasy.setWorldBuilding("Middle-Earth");
  
  console.log(fantasy.getDetails());
  console.log(fantasy.read());
  console.log(fantasy.magicSystem);
  