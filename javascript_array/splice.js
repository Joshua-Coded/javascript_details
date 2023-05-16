// THis remove the specified element from the Array,
// starting from the startindex.
// [].splice(startindex, count);

const products = [
    {productName: "TV", price: 2000},
    {productName: "TV STAND", price: 5000},
    {productName: "Battery", price: 400},
    {productName: "Remote", price: 6000},
    {productName: "LCD", price: 103}
];

products.splice(2, 2);
console.log("After splce", products);
products.splice(1,0,{productName: "COMPUTER", price:210000})
console.log("Added product with splice", products);
