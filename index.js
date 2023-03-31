// cat.js
class Cat {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
  let fluffy = new Cat('Fluffy');
  console.log(fluffy.speak()); // Output: "Fluffy says meow!"
  
  // dog.js
  class Dog {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  module.exports = Dog;
  // bird.js
class Bird {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      if (this.gender === "male") {
        return `It's me! ${this.name}, the parrot!`;
      } else {
        return `${this.name} says squawk!`;
      }
    }
  }
  
  module.exports = Bird;
  
  // Your code here