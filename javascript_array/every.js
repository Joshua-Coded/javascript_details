// This retruns true if all the elements are matching withthe gien condition
// [].every(function(element) {return condition});

const products = [
    {productName: "TV", price: 2000},
    {productName: "TV STAND", price: 5000},
    {productName: "Battery", price: 400},
    {productName: "Remote", price: 6000},
    {productName: "LCD", price: 103}
];

// check if all the prices are greater than 1000
console.log(products.every(
    (p) => {
        return p.price >= 1000;
})
)