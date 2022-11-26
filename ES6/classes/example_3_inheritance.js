class A {
    constructor(){
        console.log("Base class - A");
    }

    sayHelloA() {
        console.log('Hello Parent Class - A');
    }
}

class B extends A {
    constructor(){
        super();
        console.log("Child class - B");
    }

    sayHelloB() {
        console.log('Hello Child Class - B');
    }
}

const obj = new B();
obj.sayHelloA();
obj.sayHelloB();