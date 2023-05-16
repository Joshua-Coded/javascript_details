// for each method

function increaseQuantity(){
    this.quantity++;
}

const products = [
    {productName: "TV", quantity: 0, increaseQuantity: increaseQuantity},
    {productName: "TV STAND", quantity: 0, increaseQuantity: increaseQuantity},
    {productName: "Battery", quantity: 0, increaseQuantity: increaseQuantity},
    {productName: "Remote", quantity: 0, increaseQuantity: increaseQuantity},
    {productName: "LCD", quantity: 0, increaseQuantity: increaseQuantity}
];

products.forEach((p) => {
    p.increaseQuantity();
})

console.log(products)

