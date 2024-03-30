// Swapping variable variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes a 10 and b becomes 5
let a:number = 5;
let b: number = 10;
console.log(`the value of a:${a}, and the value of b:${b}`);
let c = a;
a = b;
b = c;
console.log(`The value of b is:${b} and the value of a is: ${a} now`);
