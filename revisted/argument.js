// always use the arguments keyword when you are not sure of the input from users.

function getCardBill(){
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
    // console.log(arguments);
}

getCardBill(12,43);
getCardBill(1,2,3,4,5,6);
getCardBill(43,65,78,98,86);