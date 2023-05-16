// This returns true if at least one element matches with the given condition
// some()

const products = [
    {productName: "TV", price: 2000},
    {productName: "TV STAND", price: 5000},
    {productName: "Battery", price: 400},
    {productName: "Remote", price: 6000},
    {productName: "LCD", price: 103}
];

console.log(products.some(
    (p) => {
        return p.price > 100;
    }));