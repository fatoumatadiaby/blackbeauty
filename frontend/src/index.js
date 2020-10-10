document.addEventListener("DOMContentLoaded", () => {
 fetchProducts()
})
const BASE_URL = 'http://localhost:3000/products'


// read - read a list of hair products
function fetchProducts() {
    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(products => {
        products.forEach((product) => {
             let newProduct = new Product(product.id, product.brand, product.product_type, product.ingrediants, product.description, product.directions, product.price)
             newProduct.renderProduct(product.id, product.brand, product.product_type, product.ingrediants, product.description, product.directions, product.price)
            })
    })}
         
       

// update shopping cart with new product
//  function updateShoppingCart() {

// }
// function updateShoppingCart() {
    
// }
//add event listener click add to cart
// for loop 

// delete item from shopping cart
// function deleteFromCart() {
// }