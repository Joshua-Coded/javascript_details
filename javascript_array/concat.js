// Attaches the given array to the actula array
// [].concat([]);

const products1 = [
    {productName: "TV", price: 2000},
    {productName: "TV STAND", price: 5000},
];

const products2 = [
    {productName: "Battery", price: 400},
    {productName: "Remote", price: 6000},
    {productName: "LCD", price: 103}
]

const allProducts = products1.concat(products2);
console.log("Product1", products1);
console.log("Product2", products2);
console.log("Allproducts", allProducts);