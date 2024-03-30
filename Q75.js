"use strict";
// Compound AssignmentOperators: Use compound Assignment Operators to simplify arithmetic Operations. Start with x = 4 and perform a series of operation(addition, subtraction, Multiplication, division) on x using compound operators.
function compoundOperators() {
    let a = 5;
    console.log(`a is : ${a} now`);
    // using Addiotion compound assignment operator
    a += 10;
    console.log(`a is :${a} now`);
    // using subtraction compound assignment operator
    a -= 1;
    console.log(`a is :${a} now`);
    // using Multiplication compound assignment operator
    a *= 100;
    console.log(`a is :${a} now`);
    // using division compound assignment operator
    a /= 5;
    console.log(`a is :${a} now`);
}
compoundOperators();
