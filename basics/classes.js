class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed;
    }

    speak() {
        super.speak(); // Call the parent class method
        console.log(`${this.name} barks.`);
    }
}

const myDog = new Dog("Rex", "German Shepherd");
myDog.speak();
