document.addEventListener("DOMContentLoaded", () => {
 fetchProducts()
})
const BASE_URL = 'http://localhost:3000'


// read - read a list of hair products
function fetchProducts() {
    fetch(`${BASE_URL}/products`)
    .then(resp => resp.json())
    .then(data => { console.log(data)
         
})

// update shopping cart with new product

// function updateShoppingCart() {
    
// }
//add event listener click add to cart
// for loop 

// delete item from shopping cart
// function deleteFromCart() {
}