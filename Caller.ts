import { Hello, Hello2, HelloWorldMyDear } from './Hello.js';

function CallHello() {

    Hello2("World");
    const result = Hello();
    console.log(result);
}

CallHello();    