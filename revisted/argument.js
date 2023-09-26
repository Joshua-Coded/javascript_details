// always use the arguments keyword when you are not sure of the input from users.

function getCardBill(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        // console.log(arguments[i]);
        sum += arguments[i];
    }
    return sum;
    // console.log(arguments);
}

console.log(getCardBill(12,43));
console.log(getCardBill(1,2,3,4,5,6));
console.log(getCardBill(43,65,78,98,86));