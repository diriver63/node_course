'use strict';

class Person {
    // Add properties and methods directly to object
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.greet2 = function(){
            console.log(`Hello world!`);
        }
    }

    // Add properties and methods to object's prototype
    greet(){
        console.log(`hello ${this.firstname} ${this.lastname}`);
    }

}

var Diego = new Person('diego','rivera');
Diego.greet(); //This is a prototype method
Diego.greet2(); //This is an own method