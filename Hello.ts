
let message: string = "Hello, World!";
let arr = ["", 123, 123];


function Hello()
{
    console.log("Hello, World!");
    return "Hello";
}


function Hello2(who: string ) {

    console.log("Hello, " + who + "!");
    return "Hello, " + who + "!";
}


function HelloOOOO(who: string, greeting: string = "Hello") {
    console.log(greeting + ", " + who + "!");
    return greeting + ", " + who + "!";
}


function HelloWorldMyDear(who: string, greeting: string = "Hello") {
    console.log(greeting + ", " + who + "!");
    return greeting + ", " + who + "!";
}

function HelloWorld111() {
    console.log(message);
    return message;
}
// Export the function so it can be used in other files
export { Hello, Hello2, HelloOOOO, HelloWorldMyDear };
