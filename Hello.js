"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hello = Hello;
exports.Hello2 = Hello2;
exports.HelloOOOO = HelloOOOO;
exports.HelloWorldMyDear = HelloWorldMyDear;
let message = "Hello, World!";
let arr = ["", 123, 123];
function Hello() {
    console.log("Hello, World!");
    return "Hello";
}
function Hello2(who) {
    console.log("Hello, " + who + "!");
    return "Hello, " + who + "!";
}
function HelloOOOO(who, greeting = "Hello") {
    console.log(greeting + ", " + who + "!");
    return greeting + ", " + who + "!";
}
function HelloWorldMyDear(who, greeting = "Hello") {
    console.log(greeting + ", " + who + "!");
    return greeting + ", " + who + "!";
}
