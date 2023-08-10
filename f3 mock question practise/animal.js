class Animal {
  constructor(name, age, sound) {
    this.name = name;
    this.age = age;
    this.sound = sound;
  }
  makeSound() {
    console.log(this.sound);
  }
}

class Cat extends Animal {
  constructor(name, age, sound, breed) {
    super(name, age, sound);
    this.breed = breed;
  }
  meow() {
    console.log("meow");
  }
}
const cat = new Cat("mewmew", 1, "meow", "desi");
cat.makeSound();
cat.meow();
