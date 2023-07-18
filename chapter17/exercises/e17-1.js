// 17.4.1. Zero Division: Throw

// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:
function divide(x,y){
    if(y === 0){
        throw Error("Attempted to divide by zero.");
    }
    return x/y
}

console.log(divide(8,9));