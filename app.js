var modules=require('./modules');
const readline = require('readline');

const inputVal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
inputVal.question("Input 1st Number: ", (number1) => {
        inputVal.question("Input 2nd Number : ", (number2) => {
        modules.addition(+number1,+number2);
        modules.multiply(+number1,+number2);
    });
});

