// find index method



const products = [
    {productName: "TV", price: 2000},
    {productName: "TV STAND", price: 5000},
    {productName: "Battery", price: 400},
    {productName: "Remote", price: 6000},
    {productName: "LCD", price: 103}
];

console.log(products.findIndex(
    (p) => {
        return p.price >= 1000;
    }
));