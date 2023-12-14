function addNumbers(){
    let result = 0;
    for(let i=0; i<arguments.length ; i++){
        result = result + arguments[i];
    }
    return result;
    
}

console.log(addNumbers(8,9));
console.log(addNumbers(8,28,9));
console.log(addNumbers(8,6,9));
console.log(addNumbers(8,9,7));
console.log(addNumbers(8,9));
console.log(addNumbers());