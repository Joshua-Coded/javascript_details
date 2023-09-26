// whenever a function calls one function inside the same function is called recursion
// meaning when the function calls itself is called recursive function.

function factorial(n){
    if(n == 1){
        return 1;
    }
    else {
        return factorial(n - 1) * n;
    }
}

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(10));
