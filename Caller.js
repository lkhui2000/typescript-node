"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Hello_js_1 = require("./Hello.js");
function CallHello() {
    (0, Hello_js_1.Hello2)("World");
    const result = (0, Hello_js_1.Hello)();
    console.log(result);
}
CallHello();
