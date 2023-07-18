function calculateArea(width, height){
    return width * height
};

function greetUser(name){
    return (`Hello ${name}!`)
};

let sum = 0;
function sumArray(arr){
    for (i = 0; i< arr.length; i ++){
        sum = sum += arr[i];
    }
    return sum
}

function isPalindrome(str){
    return str === str.split('').reverse().join('')
}

console.log(calculateArea(6, 9));
console.log(greetUser('Andrej'));
let arr1 = [4, 5, 6, 12, 3]
console.log(sumArray(arr1));
console.log(isPalindrome('poop'));