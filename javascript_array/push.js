// The push method allows you to add element at the end of array
// [].push(value);

const prices = [65,45,78,34,56,32,56];
prices.push(897)
console.log(prices);
prices.pop();
console.log(prices);

// array of objects
const products = [
    {productName: "TV", price: 643},
    {productName: "TV STAND", price: 50},
    {productName: "Battery", price: 43},
    {productName: "Remote", price: 64},
    {productName: "LCD", price: 103}
];

console.log("Before push", products);
products.push({productName: "CABLE", price: 100})
console.log("After push", products);
console.log(products.pop())
console.log("After pop", products);