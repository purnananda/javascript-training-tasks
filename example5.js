class A {
    constructor(){
        console.log("Base class - A");
    }
}

class B extends A {
    constructor(){
        super();
        console.log("Child class - B");
    }

    sayHello(name) {
        console.log('Hello ', name);
    }
}

const obj = new B();
console.log(obj.sayHello("Ram"));