function addition(number1,number2){
        var result = number1 + number2;
        console.log("Addition of two numbers is: "+ result);
 }
function multiply(number1,number2){
        var result = number1 * number2;
        console.log("Multiplication of two numbers is: "+ result);
 }
module.exports.addition=addition;
module.exports.multiply=multiply;

